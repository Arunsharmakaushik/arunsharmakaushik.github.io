import { useState } from "react";
import "../App.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
 <div className="logo">AS.</div>

      <div className={`menu ${open ? "active" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}