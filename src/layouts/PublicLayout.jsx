// src/layouts/PublicLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function PublicLayout({ toggleTheme, currentTheme }) {
  return (
    <>
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Outlet />
    </>
  );
}