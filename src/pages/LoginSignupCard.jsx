import { useState, useEffect } from "react";

export default function LoginSignupCard({ onClose }) {
  const [isSignup, setIsSignup] = useState(false);
  const [showCard, setShowCard] = useState(false);

  // ✅ card ko animate ke liye delay se render karo
  useEffect(() => {
    const timer = setTimeout(() => setShowCard(true), 50); // small delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[9999]">
      {/* Card */}
      <div
        className={`bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative overflow-hidden transition-all duration-500 ${
          showCard
            ? "translate-y-0 opacity-100"
            : "translate-y-[-50px] opacity-0"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 z-50"
        >
          ✕
        </button>

        {/* Login Form */}
        <div
          className={`transition-transform duration-500 ${
            isSignup
              ? "translate-y-full opacity-0"
              : "translate-y-0 opacity-100"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition transform hover:scale-105">
              Login
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-4 text-center text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => setIsSignup(true)}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>

        {/* Signup Form (slide from bottom) */}
        <div
          className={`absolute top-0 left-0 w-full p-8 transition-transform duration-500 ${
            isSignup
              ? "translate-y-0 opacity-100"
              : "translate-y-[100%] opacity-0"
          }`}
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign Up
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            />
            <button className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition transform hover:scale-105">
              Create Account
            </button>
          </form>

          {/* Back to Login */}
          <p className="mt-4 text-center text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => setIsSignup(false)}
              className="text-indigo-600 font-semibold hover:underline"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
