import { Instagram, Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-12">
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
                           bg-gradient-to-r from-green-400 via-purple-500 via-sky-400 to-yellow-400 drop-shadow-lg">
              VAVA
            </h1>
          </div>
          <p className="text-gray-400">
            Learn anytime, grow anytime with our expert-led courses.
          </p>
          <div className="flex space-x-4 mt-4">
  {/* Instagram */}
  <a
    href="#"
    className="p-2 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 
               text-white hover:scale-110 transition-transform duration-300 shadow-lg"
  >
    <Instagram size={20} />
  </a>

  {/* Facebook */}
  <a
    href="#"
    className="p-2 rounded-full bg-blue-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
  >
    <Facebook size={20} />
  </a>

  {/* YouTube */}
  <a
    href="https://www.youtube.com/@-vava"
    target="_blank"
    className="p-2 rounded-full bg-red-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg"
  >
    <Youtube size={20} />
  </a>

  {/* LinkedIn */}
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
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-indigo-400 transition">Home</a></li>
            <li><a href="#courses" className="hover:text-indigo-400 transition">Courses</a></li>
            <li><a href="#about" className="hover:text-indigo-400 transition">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2"><Mail size={18} /> vimal251294gupta@gmail.com</li>
            <li className="flex items-center gap-2"><Phone size={18} /> +91 9808885514</li>
            <li className="flex items-center gap-2"><MapPin size={18} /> 123 A Pradeep Ramvihar Colony Agra 282006, India</li>
          </ul>
        </div>

        {/* Newsletter / Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <p className="text-gray-400">Subscribe to our newsletter for the latest courses and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 h-12 px-4 rounded-lg border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-600"
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
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VAVA. All rights reserved.
      </div>
       <div className="mt-12 pt-6 text-center text-gray-500 text-sm">
         Developed by Ankit Kumar
      </div>
    </footer>
  );
}
