import {
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer({ theme }) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`w-full py-12 transition-colors duration-500 ${
        isDark ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between gap-10">

        {/* Branding */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="VAVA Logo"
              className="h-12 w-12 object-contain"
            />
            <h1 className="text-2xl font-extrabold tracking-tight bg-clip-text text-transparent 
              bg-linear-to-r from-green-400 via-sky-400 to-yellow-400 drop-shadow-lg">
              VAVA
            </h1>
          </div>

          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Learn anytime, grow anytime with our expert-led courses.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">

            <a
              href="#"
              className="p-2 rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 
                         text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Facebook size={20} />
            </a>

            <a
              href="https://www.youtube.com/@-vava"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-red-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Youtube size={20} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full bg-blue-500 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
            >
              <Linkedin size={20} />
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className={`space-y-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <li>
              <a href="#home" className="hover:text-indigo-500 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#courses" className="hover:text-indigo-500 transition">
                Courses
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-indigo-500 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className={`space-y-2 ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            <li className="flex items-center gap-2">
              <Mail size={18} /> vimal251294gupta@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +91 9808885514
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 A Pradeep Ramvihar Colony Agra 282006, India
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>

          <p className={isDark ? "text-gray-400" : "text-gray-600"}>
            Subscribe to our newsletter for the latest courses and offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className={`flex-1 h-12 px-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-600 transition ${
                isDark
                  ? "border-gray-700 bg-gray-900 text-white"
                  : "border-gray-300 bg-white text-gray-900"
              }`}
            />
            <button
              type="submit"
              className="h-12 px-6 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-white font-medium transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div
        className={`mt-12 border-t pt-6 text-center text-sm ${
          isDark
            ? "border-gray-800 text-gray-500"
            : "border-gray-300 text-gray-500"
        }`}
      >
        &copy; {new Date().getFullYear()} VAVA. All rights reserved.
      </div>

      <div className="mt-6 text-center text-sm text-gray-500">
        Developed by Ankit Kumar
      </div>
    </footer>
  );
}