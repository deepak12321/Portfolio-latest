# 🚀 Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.17-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

A modern, responsive portfolio website showcasing my skills, projects, education, and certifications. Built with React, featuring smooth animations, an elegant UI, and a backend system for dynamic content management.

> **⚠️ Note:** This website is currently under active development and may have inconsistent formatting or incomplete features.

---

## ✨ Features

### 🎨 Frontend
- **Hero Section** - Eye-catching landing page with animated hero content
- **About Me** - Detailed personal introduction and background
- **Skills Showcase** - Interactive display of technical skills with smooth animations
- **Projects Portfolio** - Comprehensive showcase of all projects with details
- **Education Timeline** - Educational background with smooth image transitions
- **Certifications** - Display of professional certifications
- **Contact Page** - "Connect Me" page with contact form and social media links
- **Dark/Light Mode** - Theme switcher for better user experience
- **Smooth Scrolling** - Implemented using Lenis for buttery-smooth scroll experience
- **GSAP Animations** - Advanced animations with ScrollTrigger for engaging user experience
- **Responsive Design** - Fully responsive across all devices (mobile, tablet, desktop)

### 🔐 Admin Panel
- **Admin Dashboard** - Protected route at `/deepak/admin`
- **Skills Management** - Add new skills dynamically through admin interface
- **Content Management** - Forms to manage portfolio content

### ⚙️ Backend
- **RESTful API** - Express.js backend for data management
- **Database** - MongoDB for persistent data storage
- **File Upload** - Multer middleware for handling file uploads
- **Cloud Storage** - Cloudinary integration for image and file storage
- **API Routes**:
  - Skills CRUD operations
  - Certificates management
  - Dynamic content delivery

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 19.2.0** | UI library for building component-based interface |
| **Vite 7.2.4** | Lightning-fast build tool and dev server |
| **TailwindCSS 4.1.17** | Utility-first CSS framework for styling |
| **GSAP** | Professional-grade animation library |
| **React Router DOM** | Client-side routing |
| **Axios** | HTTP client for API requests |
| **Lenis** | Smooth scroll library |
| **React Icons** | Icon library |
| **React Toastify** | Toast notifications |
| **React PDF** | PDF viewing capabilities |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | JavaScript runtime environment |
| **Express 5.2.1** | Web application framework |
| **MongoDB 9.0.1** | NoSQL database (via Mongoose) |
| **Cloudinary** | Cloud storage for media files |
| **Multer** | Middleware for file uploads |
| **CORS** | Cross-origin resource sharing |
| **dotenv** | Environment variable management |
| **Nodemon** | Development server with auto-restart |

---

## 📁 Project Structure

```
Portfolio/
├── frontend/                    # React frontend application
│   ├── src/
│   │   ├── components/
│   │   │   ├── home/           # Home page components
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── About.jsx
│   │   │   │   ├── Skills.jsx
│   │   │   │   ├── Projects.jsx
│   │   │   │   ├── Education.jsx
│   │   │   │   ├── Certifications.jsx
│   │   │   │   └── Home.jsx
│   │   │   ├── contact/        # Contact page
│   │   │   │   └── Contact.jsx
│   │   │   ├── admin/          # Admin panel components
│   │   │   │   ├── AdminPage.jsx
│   │   │   │   └── AddSkill.jsx
│   │   │   └── global/         # Global components
│   │   │       ├── Navbar.jsx
│   │   │       └── ThemeSwitch.jsx
│   │   ├── data/               # Static data files
│   │   │   ├── certificatesData.js
│   │   │   ├── educationData.js
│   │   │   ├── heroImage.js
│   │   │   ├── projectData.js
│   │   │   ├── socialLinks.js
│   │   │   └── techStack.js
│   │   ├── stylings/           # CSS stylesheets
│   │   ├── App.jsx             # Main app component
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx           # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # Express backend API
│   ├── src/
│   │   ├── app.js             # Express app setup
│   │   └── index.js           # Server entry point
│   ├── controllers/           # Request handlers
│   │   ├── certificates.controller.js
│   │   └── skills.controller.js
│   ├── models/                # MongoDB schemas
│   │   ├── certificates.models.js
│   │   ├── projects.model.js
│   │   └── skills.models.js
│   ├── routes/                # API routes
│   │   ├── certificates.routes.js
│   │   └── skills.routes.js
│   ├── middleware/            # Custom middleware
│   │   └── multer.middleware.js
│   ├── db/                    # Database connection
│   │   └── index.js
│   ├── utility/               # Utility functions
│   ├── temp/                  # Temporary file storage
│   ├── .env                   # Environment variables
│   └── package.json
│
└── README.md                  # This file
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Cloudinary** account for image storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deepak12321/portfolio-latest.git
   cd Portfolio
   ```

2. **Install Frontend Dependencies**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd ../backend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create a `.env` file in the `backend` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

### Running the Application

#### Development Mode

1. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Backend will run on `http://localhost:5000` (or the PORT specified in .env)

2. **Start Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on `http://localhost:5173` (Vite default)

3. **Access the Application**
   - Portfolio: `http://localhost:5173/`
   - Contact Page: `http://localhost:5173/contact`
   - Admin Panel: `http://localhost:5173/deepak/admin`

#### Production Build

**Build Frontend**
```bash
cd frontend
npm run build
```

The optimized production build will be created in the `dist` folder.

---

## 🎯 Usage

### User Features
- Browse through different sections using the navigation bar
- Switch between dark and light themes
- View projects, skills, education, and certifications
- Contact via the contact form or social media links
- Enjoy smooth scroll and animations throughout the site

### Admin Features
Access the admin panel at `/deepak/admin` to:
- Add new skills to the skills section
- Manage certificates
- Update portfolio content dynamically

---

## 🔧 Work in Progress

The following features are currently under development:

### 🚧 Backend Admin Panel (In Development)
- **Dynamic Content Management** - Full-featured backend dashboard to update all portfolio data
- **Projects Management** - CRUD operations for projects
- **Education Management** - Update education details dynamically
- **Certifications Upload** - Direct upload and management of certificates
- **About Section Editor** - Edit personal information and bio
- **Image Management** - Better interface for managing portfolio images
- **Authentication** - Secure login system for admin access
- **Dashboard Analytics** - View portfolio statistics and visitor analytics

### 🚧 Additional Planned Features
- Blog section for technical articles
- Resume download functionality
- Contact form backend integration with email notifications
- More interactive animations and micro-interactions
- Performance optimizations
- SEO improvements
- PWA (Progressive Web App) support

---

## 📸 Screenshots

*Screenshots will be added soon*

---

## 🤝 Contributing

As this is a personal portfolio project, contributions are currently not being accepted. However, feel free to fork the project for your own use!

---

## 📄 License

This project is created and maintained by **Deepak Phulara**.

All rights reserved © 2025

---

## 👨‍💻 Author

**Deepak Phulara**

- Portfolio: [Deepak Phulara Portfolio](deepakphulara.netlify.app)
- GitHub: [@deepak12321](https://github.com/deepak12321)
- LinkedIn: [deepakphulara](https://www.linkedin.com/in/deepakphulara/)

---

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- GSAP for amazing animation capabilities
- The open-source community for excellent tools and libraries

---

<div align="center">
  <p>Built with ❤️ by Deepak Phulara</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
