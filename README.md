# Rank - Career Benchmarking Platform

A modern React-based web application that helps engineering professionals benchmark their careers, track skill development, and connect with peers to accelerate professional growth through data-driven insights.

## 🚀 Features

- **Career Benchmarking**: Compare your progress with peers and industry standards
- **Skill Assessment**: Track and improve your technical and soft skills
- **Community Network**: Connect with professionals and mentors in your field
- **Goal Tracking**: Set and achieve your career milestones
- **Interactive Dashboard**: Comprehensive overview of your career progress
- **Leaderboard**: See how you rank among your peers
- **Dark/Light Theme**: Toggle between themes for better user experience
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **UI Components**: Headless UI
- **Routing**: React Router DOM v7
- **Linting**: ESLint with TypeScript support

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Rank-P1
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Layout, Sidebar)
│   ├── UI/             # Basic UI components (Card, etc.)
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication context
│   └── ThemeContext.tsx # Theme switching context
├── pages/              # Application pages
│   ├── Landing.tsx     # Landing page
│   ├── Login.tsx       # Login page
│   ├── Signup.tsx      # Registration page
│   ├── Dashboard.tsx   # User dashboard
│   ├── Leaderboard.tsx # Rankings and leaderboard
│   ├── Profile.tsx     # User profile
│   ├── Skills.tsx      # Skill tracking
│   ├── Community.tsx   # Community features
│   ├── Settings.tsx    # User settings
│   └── Help.tsx        # Help and documentation
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## 🔐 Authentication

The application includes a complete authentication system with:

- User registration and login
- Protected routes that require authentication
- Authentication context for state management
- Automatic redirection for unauthenticated users

## 🎨 Theming

The application supports both light and dark themes:

- Theme context manages the current theme state
- Tailwind CSS classes handle the visual changes
- Theme preference is persistent across sessions

## 🌐 Routing

The application uses React Router v7 with the following routes:

- `/` - Landing page (public)
- `/login` - Login page (public)
- `/signup` - Registration page (public)
- `/dashboard` - User dashboard (protected)
- `/leaderboard` - Rankings and leaderboard (protected)
- `/profile` - User profile (protected)
- `/skills` - Skill tracking (protected)
- `/community` - Community features (protected)
- `/settings` - User settings (protected)
- `/help` - Help and documentation (protected)

## 🚀 Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting platform of choice (Netlify, Vercel, AWS S3, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses ESLint for code linting. Make sure to run `npm run lint` before committing changes.

## 🐛 Bug Reports

If you find any bugs, please create an issue on the repository with:

- A clear description of the bug
- Steps to reproduce the issue
- Expected vs actual behavior
- Screenshots (if applicable)

## 📄 License

This project is private and proprietary. All rights reserved.

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

Made with ❤️ by the Rank Team
