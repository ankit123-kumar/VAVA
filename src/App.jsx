import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import LandingPage from "./pages/LandingPage";
import ScrollProgress from "./components/ScrollProgress";
import CoursesPage from "./pages/CoursesPage";
import StudentDashboard from "./pages/StudentDashboard";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Gallery from "./pages/Gallary";
import AllTests from "./pages/dashboard/AllTests";
import TestPage from "./pages/dashboard/TestPage";

import PublicLayout from "./layouts/PublicLayout";
import StudentLayout from "./layouts/StudentLayout";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
        <ScrollProgress />

        <Routes>
          {/* Public Pages */}
          <Route
            element={<PublicLayout toggleTheme={toggleTheme} currentTheme={theme} />}
          >
            <Route path="/" element={<LandingPage theme={theme}/>} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/gallary" element={<Gallery />} />
          </Route>

          {/* Student Pages */}
          <Route element={<StudentLayout />}>
            <Route path="/dashboard" element={<StudentDashboard />} />
            {/* Test Pages */}
            <Route path="/tests" element={<AllTests />} />
            <Route path="/test/:testId" element={<TestPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;