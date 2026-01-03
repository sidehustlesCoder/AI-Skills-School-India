# 🎬 AI Video School India

> **भारतीय क्रिएटर्स के लिए AI Video Creation सीखें**  
> Learn AI-powered video creation designed specifically for Indian creators targeting YouTube, Instagram Reels, and other platforms.

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF.svg)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.18-38B2AC.svg)](https://tailwindcss.com/)
[![Express](https://img.shields.io/badge/Express-4.18.2-000000.svg)](https://expressjs.com/)

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Available Scripts](#-available-scripts)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🌟 Overview

**AI Video School India** is a comprehensive educational platform designed to teach Indian creators how to leverage AI tools for video creation, editing, and monetization. The platform features:

- 🎓 **Interactive Course Modules** - Step-by-step lessons on AI video creation
- 🎥 **Video Gallery** - Showcase of AI-generated video examples
- 💳 **Enrollment System** - Course registration with authentication
- 📱 **Mobile-First Design** - Optimized for Indian mobile users
- 🌙 **Dark Theme** - Modern, premium UI with AI gradients
- 💰 **INR Pricing** - Localized for the Indian market

---

## ✨ Features

### 🎯 Core Features

- **Modal-First Architecture** - Smooth, interactive user experience with reusable modal components
- **Authentication System** - Secure user registration and login with bcrypt password hashing
- **Course Management** - Multiple course offerings with detailed lesson pages
- **Video Tools** - Interactive tools for AI video creation
- **Responsive Design** - Beautiful UI that works seamlessly across all devices
- **SQLite Database** - Lightweight, serverless database for user and course data

### 📚 Course Offerings

1. **AI Video Creation for YouTube & Reels** - Master AI tools for creating engaging video content
2. **AI से Video Editing सीखें** - Learn professional video editing with AI assistance
3. **Content Creation & Monetization** - Turn your creativity into income

---

## 🛠 Tech Stack

### Frontend
- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.2.4** - Lightning-fast build tool and dev server
- **TailwindCSS 4.1.18** - Utility-first CSS framework
- **Lucide React** - Beautiful, consistent icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express 4.18.2** - Web application framework
- **SQLite3** - Embedded database
- **bcryptjs** - Password hashing and security
- **CORS** - Cross-origin resource sharing

### Development Tools
- **ESLint** - Code linting and quality
- **PostCSS** - CSS processing
- **Concurrently** - Run multiple commands simultaneously

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/AI-School-India.git
   cd AI-School-India
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_BASE_URL=http://localhost:3000
   ```

4. **Initialize the database**
   
   The SQLite database will be automatically created when you start the server for the first time.

5. **Start the development server**
   
   Run both frontend and backend:
   ```bash
   npm run dev:full
   ```
   
   Or run them separately:
   ```bash
   # Terminal 1 - Backend
   npm run server
   
   # Terminal 2 - Frontend
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

---

## 📁 Project Structure

```
AI-School-India/
├── public/                 # Static assets
├── server/                 # Backend server
│   ├── index.js           # Express server setup
│   ├── db.js              # Database configuration and queries
│   └── database.sqlite    # SQLite database file
├── src/
│   ├── components/        # React components
│   │   ├── modals/       # Modal components
│   │   │   ├── AuthModal.jsx
│   │   │   ├── EnrollmentModal.jsx
│   │   │   └── VideoGalleryModal.jsx
│   │   ├── pages/        # Page components
│   │   │   └── VideoTools.jsx
│   │   └── ui/           # UI components
│   │       └── Modal.jsx
│   ├── AIVideoSchool.jsx  # Main application component
│   ├── App.jsx            # Root component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── .env                   # Environment variables
├── .gitignore            # Git ignore rules
├── eslint.config.js      # ESLint configuration
├── index.html            # HTML entry point
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind configuration
└── vite.config.js        # Vite configuration
```

---

## 📜 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start Vite development server (frontend only) |
| `npm run server` | Start Express backend server |
| `npm run dev:full` | Run both frontend and backend concurrently |
| `npm run build` | Build production bundle |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000
```

> **Note:** All Vite environment variables must be prefixed with `VITE_` to be exposed to the client.

---

## 🔌 API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

- **POST** `/api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "securepassword"
  }
  ```

### Courses

- **GET** `/api/courses` - Get all courses
- **GET** `/api/courses/:id` - Get course by ID
- **POST** `/api/enrollments` - Enroll in a course

### Users

- **GET** `/api/users/:id` - Get user profile
- **PUT** `/api/users/:id` - Update user profile

---

## 🎨 Design Philosophy

This project follows modern web design principles:

- **Mobile-First** - Optimized for Indian mobile users
- **Dark Theme** - Premium, modern aesthetic
- **AI Gradients** - Vibrant, eye-catching color schemes
- **Micro-Animations** - Smooth, engaging interactions
- **Accessibility** - WCAG compliant for all users

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style

- Follow the existing code style
- Run `npm run lint` before committing
- Write meaningful commit messages
- Add comments for complex logic

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- Inspired by modern AI video creation platforms
- Built for the Indian creator community
- Designed to empower creators with AI tools

---

## 📧 Contact

For questions or support, please reach out:

- **GitHub Issues:** [Create an issue](https://github.com/yourusername/AI-School-India/issues)
- **Email:** your.email@example.com

---

<div align="center">
  <strong>Made with ❤️ for Indian Creators</strong>
  <br>
  <sub>Empowering the next generation of AI-powered content creators</sub>
</div>
