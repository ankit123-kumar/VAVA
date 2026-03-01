// src/layouts/PublicLayout.jsx
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import ScrollProgress from "../components/ScrollProgress";

export default function PublicLayout({ toggleTheme, currentTheme }) {
  return (
    <>
      <ScrollProgress />
      <Navbar toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Outlet />
    </>
  );
}