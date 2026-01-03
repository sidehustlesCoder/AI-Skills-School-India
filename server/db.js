// server/db.js
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dbPath = join(__dirname, 'database.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database ' + dbPath + ': ' + err.message);
    } else {
        console.log('Connected to the SQLite database.');
        initDb();
    }
});

function initDb() {
    db.serialize(() => {
        // Courses Table
        db.run(`CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT,
            duration TEXT,
            lessons INTEGER,
            level TEXT,
            image TEXT
        )`);

        // Features Table
        db.run(`CREATE TABLE IF NOT EXISTS features (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            description TEXT
        )`); // Note: Icons will be handled on frontend mapping based on id or title/type

        // Testimonials Table
        db.run(`CREATE TABLE IF NOT EXISTS testimonials (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            role TEXT,
            image TEXT,
            text TEXT
        )`);

        // Stats Table
        db.run(`CREATE TABLE IF NOT EXISTS stats (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            number TEXT,
            label TEXT
        )`);

        // Pricing Plans Table
        db.run(`CREATE TABLE IF NOT EXISTS pricing_plans (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            price TEXT,
            originalPrice TEXT,
            period TEXT,
            popular BOOLEAN
        )`);

        // Plan Features Table
        db.run(`CREATE TABLE IF NOT EXISTS plan_features (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            plan_id INTEGER,
            feature_text TEXT,
            FOREIGN KEY(plan_id) REFERENCES pricing_plans(id)
        )`);

        // Demos Table
        db.run(`CREATE TABLE IF NOT EXISTS demos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            url TEXT,
            poster TEXT
        )`);

        // Users Table
        db.run(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT UNIQUE,
            password TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Always seed to ensure the latest data from this file is used
        console.log("Updating Database Content...");
        seedData();
    });
}

function seedData() {
    db.run("DELETE FROM courses");
    const courses = [
        ["AI Video Creation for YouTube & Reels", "Master AI tools like Runway, Pika, and ChatGPT for creating viral content in Hindi & English", "8 सप्ताह", 42, "शुरुआती से उन्नत", "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop"],
        ["AI से Video Editing सीखें", "Professional editing techniques using AI-powered tools for Instagram, YouTube & WhatsApp", "6 सप्ताह", 38, "मध्यम स्तर", "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop"],
        ["Content Creation & Monetization", "Build your brand and earn through AI video content - Hindi & Regional language support", "4 सप्ताह", 24, "सभी स्तर", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"]
    ];
    const stmtCourses = db.prepare("INSERT INTO courses (title, description, duration, lessons, level, image) VALUES (?, ?, ?, ?, ?, ?)");
    courses.forEach(c => stmtCourses.run(c));
    stmtCourses.finalize();

    db.run("DELETE FROM features");
    const features = [
        ["100+ Video Lessons", "Hindi & English दोनों में"],
        ["Industry Certification", "मान्यता प्राप्त प्रमाणपत्र"],
        ["Indian Community", "50,000+ भारतीय छात्र"],
        ["Career Support", "Job placement & freelancing"]
    ];
    const stmtFeatures = db.prepare("INSERT INTO features (title, description) VALUES (?, ?)");
    features.forEach(f => stmtFeatures.run(f));
    stmtFeatures.finalize();

    const testimonials = [
        ["Neeraj Sharma", "YouTube Creator, Mumbai", "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop", "मैंने 3 महीने में YouTube पर 100K subscribers gain किए! AI video tools ने मेरी life बदल दी।"],
        ["Vivaan Singh", "Digital Marketer, Bangalore", "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop", "This course helped me start my own video production business. Now earning ₹80,000+ per month!"],
        ["Vanya Singh", "Freelance Editor, Delhi", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", "Best investment! अब मैं घर बैठे international clients के लिए काम करती हूं।"],
        ["Pushpa Saini", "Freelance Editor, Delhi", "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop", "Best investment! अब मैं घर बैठे international clients के लिए काम करती हूं।"]
    ];
    db.run("DELETE FROM testimonials");
    const stmtTestimonials = db.prepare("INSERT INTO testimonials (name, role, image, text) VALUES (?, ?, ?, ?)");
    testimonials.forEach(t => stmtTestimonials.run(t));
    stmtTestimonials.finalize();

    db.run("DELETE FROM stats");
    const stats = [
        ["50,000+", "भारतीय Students"],
        ["₹15 LPA", "Average Salary"],
        ["95%", "Placement Rate"],
        ["200+", "Video Lessons"]
    ];
    const stmtStats = db.prepare("INSERT INTO stats (number, label) VALUES (?, ?)");
    stats.forEach(s => stmtStats.run(s));
    stmtStats.finalize();

    const pricingPlans = [
        ["Starter", "999", "1,999", "month", false],
        ["Pro", "1,999", "4,999", "month", true],
        ["Enterprise", "4,999", "9,999", "month", false]
    ];

    // Clear plans and features
    db.run("DELETE FROM plan_features");
    db.run("DELETE FROM pricing_plans");

    // Insert Plans and get IDs to insert features
    db.serialize(() => {
        db.run("INSERT INTO pricing_plans (name, price, originalPrice, period, popular) VALUES ('Starter', '999', '1,999', 'month', 0)", function (err) {
            if (!err) {
                const planId = this.lastID;
                const features = ["3 core courses तक access", "Community forum", "Weekly live Q&A (Hindi/English)", "Course certificates", "Lifetime access to purchased courses"];
                const stmt = db.prepare("INSERT INTO plan_features (plan_id, feature_text) VALUES (?, ?)");
                features.forEach(f => stmt.run(planId, f));
                stmt.finalize();
            }
        });

        db.run("INSERT INTO pricing_plans (name, price, originalPrice, period, popular) VALUES ('Pro', '1,999', '4,999', 'month', 1)", function (err) {
            if (!err) {
                const planId = this.lastID;
                const features = ["सभी Starter features", "ALL courses unlimited access", "1-on-1 mentorship (Hindi)", "Exclusive workshops", "Lifetime updates", "Priority support", "Freelancing guidance", "Job placement support"];
                const stmt = db.prepare("INSERT INTO plan_features (plan_id, feature_text) VALUES (?, ?)");
                features.forEach(f => stmt.run(planId, f));
                stmt.finalize();
            }
        });

        db.run("INSERT INTO pricing_plans (name, price, originalPrice, period, popular) VALUES ('Enterprise', '4,999', '9,999', 'month', 0)", function (err) {
            if (!err) {
                const planId = this.lastID;
                const features = ["सभी Pro features", "Team accounts (10 तक)", "Custom training programs", "Dedicated account manager", "API access", "White-label options", "Business consultation", "GST invoice"];
                const stmt = db.prepare("INSERT INTO plan_features (plan_id, feature_text) VALUES (?, ?)");
                features.forEach(f => stmt.run(planId, f));
                stmt.finalize();
            }
        });
    });

    db.run("DELETE FROM demos");
    const demos = [
        ["Text to Video Magic", "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"],
        ["AI Animation Style", "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=800&auto=format&fit=crop"],
        ["Realistic Avatars", "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop"],
        ["Cinematic Storytelling", "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"],
        ["Sci-Fi VFX Creation", "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", "https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=800&auto=format&fit=crop"],
        ["Commercial & Product AI", "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop"],
        ["Travel Vlogging", "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4", "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?q=80&w=800&auto=format&fit=crop"],
        ["Auto Tech Review", "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4", "https://images.unsplash.com/photo-1542362567-b07e5208eb53?q=80&w=800&auto=format&fit=crop"]
    ];
    const stmtDemos = db.prepare("INSERT INTO demos (title, url, poster) VALUES (?, ?, ?)");
    demos.forEach(d => stmtDemos.run(d));
    stmtDemos.finalize();

    console.log("Database seeded successfully.");
}

export default db;
