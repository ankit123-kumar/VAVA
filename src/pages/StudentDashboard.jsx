// src/pages/StudentDashboard.jsx
import DashboardHome from "./dashboard/DashboardHome";
import AllTests from "./dashboard/AllTests";
import Results from "./dashboard/Results";
import Leaderboard from "./dashboard/Leaderboard";
import Profile from "./dashboard/Profile";

import React, { useState } from "react";
import {
  Bell,
  User,
  ClipboardList,
  BarChart3,
  Trophy,
  LogOut,
  Home,
  Menu,
} from "lucide-react";

export default function StudentDashboard() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const upcomingTests = [
    { id: 1, name: "SSC Weekly Test 1", date: "25 Feb 2026" },
    { id: 2, name: "Banking Mock Test", date: "27 Feb 2026" },
  ];

  const recentResults = [
    { id: 1, test: "SSC Test", score: 78, rank: 12 },
    { id: 2, test: "Reasoning Quiz", score: 85, rank: 5 },
  ];

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  const menu = [
    { key: "dashboard", label: "Dashboard", icon: Home },
    { key: "tests", label: "All Tests", icon: ClipboardList },
    { key: "results", label: "Results", icon: BarChart3 },
    { key: "leaderboard", label: "Leaderboard", icon: Trophy },
    { key: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="h-screen bg-gray-100 flex overflow-hidden">

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static
          top-0 left-0 z-40
          h-full md:h-screen
          bg-white shadow-lg
          flex flex-col justify-between
          transition-all duration-300
          ${collapsed ? "w-20" : "w-64"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        <div>
          {/* Logo */}
          <div className="flex items-center justify-between p-4">
            {!collapsed && (
              <h1 className="text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-purple-500 to-yellow-400">
                VAVA
              </h1>
            )}

            {/* Desktop collapse */}
            <button
              onClick={() => setCollapsed(!collapsed)}
              className="p-2 rounded-lg hover:bg-gray-100 hidden md:block"
            >
              <Menu />
            </button>
          </div>

          {/* Menu */}
          <nav className="space-y-2 px-2">
            {menu.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.key}
                  onClick={() => {
                    setActive(item.key);
                    setMobileOpen(false);
                  }}
                  className={`group flex items-center gap-3 w-full px-3 py-2 rounded-lg transition
                    ${
                      active === item.key
                        ? "bg-indigo-100 text-indigo-600"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  <Icon size={20} />
                  {!collapsed && <span>{item.label}</span>}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-2 text-red-500 hover:bg-red-50 p-3 m-2 rounded-lg"
        >
          <LogOut size={18} />
          {!collapsed && "Logout"}
        </button>
      </aside>

      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Main */}
      <div className="flex-1 w-full p-4 md:p-6 overflow-y-auto">

        {/* Header */}
        <header className="flex justify-between items-center mb-6 sticky top-0 bg-gray-100 z-10 py-2">
          <div className="flex items-center gap-3">
            {/* Mobile menu */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setMobileOpen(true)}
            >
              <Menu />
            </button>

            <h2 className="text-xl md:text-2xl font-semibold">
              Welcome, Student 👋
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative">
              <Bell size={22} />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </header>

        {/* Content */}
        {active === "dashboard" && (
          <DashboardHome
            upcomingTests={upcomingTests}
            recentResults={recentResults}
          />
        )}

        {active === "tests" && <AllTests />}
        {active === "results" && <Results />}
        {active === "leaderboard" && <Leaderboard />}
        {active === "profile" && <Profile />}
      </div>
    </div>
  );
}