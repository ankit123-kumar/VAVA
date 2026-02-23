import { useState } from "react";
import { Menu, X, Sun, Moon, Mail, Lock, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Navbar({ toggleTheme, currentTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");

  const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  setModalOpen(false); // modal close
  navigate("/dashboard"); // student dashboard pe redirect
};


  const handleToggle = () => setIsOpen(!isOpen);

  const linkClass =
    "relative text-lg font-medium tracking-wide hover:text-indigo-600 dark:hover:text-indigo-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full";

  return (
    <>
      {/* Navbar */}
      <header className="w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md transition-colors duration-500">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="VAVA Logo" className="h-14 w-14 object-contain" />
            <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-purple-500 to-yellow-400">
              VAVA
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10 text-gray-700 dark:text-gray-200 font-medium">
            <a href="/" className={linkClass}>Home</a>
            <a href="/courses" className={linkClass}>Courses</a>
            <a href="/about" className={linkClass}>About</a>
            <a href="/contact" className={linkClass}>Contact</a>
             <a href="/gallary" className={linkClass}>Gallery</a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-6 py-2 font-medium text-indigo-600 border border-indigo-600 rounded-lg relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-indigo-600 scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500"></span>
              <span className="relative text-indigo-600 group-hover:text-white">Login</span>
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => {
    console.log("Theme button clicked");
    toggleTheme();
  }}
              className="w-11 h-10 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
            >
              {currentTheme === "light" ? (
                <Moon size={20} className="text-indigo-500" />
              ) : (
                <Sun size={20} className="text-yellow-400" />
              )}
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={handleToggle}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 shadow-md border-t border-gray-200 dark:border-gray-700 animate-fadeIn">
            <nav className="flex flex-col px-6 py-4 space-y-4 text-gray-700 dark:text-gray-200 font-medium">
              <a href="/" className={linkClass} onClick={() => setIsOpen(false)}>Home</a>
              <a href="/courses" className={linkClass} onClick={() => setIsOpen(false)}>Courses</a>
              <a href="/about" className={linkClass} onClick={() => setIsOpen(false)}>About</a>
              <a href="/contact" className={linkClass} onClick={() => setIsOpen(false)}>Contact</a>
              <hr />
              <button
                onClick={() => { setModalOpen(true); setIsOpen(false); }}
                className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Login
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="relative w-[420px] rounded-2xl bg-white/90 dark:bg-gray-800/90 shadow-2xl border border-white/20 dark:border-gray-700/40 backdrop-blur-xl p-8 animate-scaleUp">
            {/* Close */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
              onClick={() => setModalOpen(false)}
            >
              <X size={22} />
            </button>

            {/* Tabs */}
            <div className="flex justify-center mb-6 space-x-3">
              {["login", "signup"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setAuthTab(tab)}
                  className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    authTab === tab
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md scale-105"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tab === "login" ? "Login" : "Signup"}
                </button>
              ))}
            </div>

            {/* Form */}
      <form className="flex flex-col gap-4" onSubmit={handleLogin}>
  {/* Email Input */}
  <div className="relative">
    <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
    <input
      type="email"
      placeholder="Email"
      required
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>

  {/* Password Input */}
  <div className="relative">
    <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
    <input
      type="password"
      placeholder="Password"
      required
      className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
    />
  </div>

  {/* If Signup → Extra Input */}
  {authTab === "signup" && (
    <div className="relative">
      <User className="absolute left-3 top-3 text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Full Name"
        required
        className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      />
    </div>
  )}

  {/* Submit */}
  <button
    type="submit"
    className="w-full py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
  >
    {authTab === "login" ? "Login" : "Signup"}
  </button>
</form>

            {/* Switch Text */}
            <p className="text-sm text-gray-500 mt-5 text-center">
              {authTab === "login" ? (
                <>
                  Don’t have an account?{" "}
                  <button
                    onClick={() => setAuthTab("signup")}
                    className="text-indigo-600 hover:underline"
                  >
                    Signup
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setAuthTab("login")}
                    className="text-indigo-600 hover:underline"
                  >
                    Login
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
