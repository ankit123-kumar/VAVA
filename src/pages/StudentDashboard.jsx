// src/pages/StudentDashboard.jsx
import React from "react";
import { Bell, User, BookOpen, CheckCircle } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 hidden md:block">
        <h1 className="text-2xl font-bold mb-8">Dashboard</h1>
        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
            <BookOpen size={18} /> My Courses
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
            <CheckCircle size={18} /> Progress
          </a>
          <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-indigo-600">
            <User size={18} /> Profile
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Welcome, Ankit</h2>
          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={24} className="text-gray-600 hover:text-indigo-600" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <img 
              src="https://i.pravatar.cc/40" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow flex flex-col">
            <span className="text-gray-500">Total Courses</span>
            <h3 className="text-2xl font-bold mt-2">8</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex flex-col">
            <span className="text-gray-500">Completed</span>
            <h3 className="text-2xl font-bold mt-2">5</h3>
          </div>
          <div className="bg-white p-4 rounded-lg shadow flex flex-col">
            <span className="text-gray-500">Pending</span>
            <h3 className="text-2xl font-bold mt-2">3</h3>
          </div>
        </div>

        {/* Courses List */}
        <section>
          <h3 className="text-xl font-semibold mb-4">My Courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">React Basics</h4>
              <p className="text-gray-500 mb-2">Progress: 80%</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-indigo-600 h-2 rounded" style={{ width: "80%" }}></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Spring Boot</h4>
              <p className="text-gray-500 mb-2">Progress: 60%</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-indigo-600 h-2 rounded" style={{ width: "60%" }}></div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition">
              <h4 className="font-semibold text-lg mb-2">Java Fundamentals</h4>
              <p className="text-gray-500 mb-2">Progress: 100%</p>
              <div className="w-full bg-gray-200 h-2 rounded">
                <div className="bg-indigo-600 h-2 rounded" style={{ width: "100%" }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
