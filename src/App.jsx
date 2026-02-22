import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ScrollProgress from "./components/ScrollProgress";
import CoursesPage from "./pages/CoursesPage";
import StudentDashboard from "./pages/StudentDashboard";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  const [theme, setTheme] = useState(() => {
    // ✅ Load theme from localStorage OR system preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // System dark mode detect
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  // ✅ Apply theme to <html>
  useEffect(() => {
     console.log("Theme changed:", theme);
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      {/* Global theme wrapper */}
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ScrollProgress />
        <Navbar toggleTheme={toggleTheme} currentTheme={theme} />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/dashboard" element={<StudentDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;