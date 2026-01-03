// server/index.js
import express from 'express';
import cors from 'cors';
import db from './db.js';
import bcrypt from 'bcryptjs';

const app = express();
const PORT = process.env.PORT || 3000;

// Configure CORS for production
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    credentials: true
}));
app.use(express.json());

// Get all courses
app.get('/api/courses', (req, res) => {
    db.all("SELECT * FROM courses", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get features
app.get('/api/features', (req, res) => {
    db.all("SELECT * FROM features", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get testmonials
app.get('/api/testimonials', (req, res) => {
    db.all("SELECT * FROM testimonials", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get stats
app.get('/api/stats', (req, res) => {
    db.all("SELECT * FROM stats", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get demos
app.get('/api/demos', (req, res) => {
    db.all("SELECT * FROM demos", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get pricing plans with features
app.get('/api/plans', (req, res) => {
    const query = `
        SELECT p.*, GROUP_CONCAT(pf.feature_text, '||') as features_list
        FROM pricing_plans p
        LEFT JOIN plan_features pf ON p.id = pf.plan_id
        GROUP BY p.id
    `;
    db.all(query, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        // Format features back to array
        const plans = rows.map(plan => ({
            ...plan,
            features: plan.features_list ? plan.features_list.split('||') : [],
            popular: plan.popular === 1 // Convert 1/0 to boolean
        }));
        res.json(plans);
    });
});

// Authentication Endpoints
app.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Name, email and password are required' });
    }

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    // Hash password before saving
    bcrypt.hash(password, 10, (err, hash) => {
        if (err) return res.status(500).json({ error: 'Hashing failed' });

        db.run(sql, [name, email, hash], function (err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ error: 'Email already exists' });
                }
                return res.status(500).json({ error: err.message });
            }
            res.json({
                message: 'User registered successfully',
                user: { id: this.lastID, name, email }
            });
        });
    });
});

app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: 'Email and password are required' });
    }

    const sql = 'SELECT id, name, email, password FROM users WHERE email = ?';
    db.get(sql, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Compare hashed password
        bcrypt.compare(password, user.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({ error: 'Invalid email or password' });
            }

            // Remove password from response
            const { password: _, ...userWithoutPassword } = user;
            res.json({
                message: 'Login successful',
                user: userWithoutPassword
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
