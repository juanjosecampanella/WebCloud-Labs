import React, { useState, useEffect } from "react";
import "../CSS/NavBar.css";

function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        setVisible(false); // Ocultar cuando el usuario sube
      } else {
        setVisible(true); // Mostrar cuando baja
      }

      setScrolling(currentScrollY > 50);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault(); // Evitar que la página recargue
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // Cerrar el menú en móviles después de hacer clic
    }
  };

  return (
    <nav className={`navbar ${scrolling ? "scrolled" : ""} ${visible ? "" : "hidden"}`}>
      <div className="logo">
        <img src="src/assets/logo_webcloud.png" alt="Logo" />
        <span className={`logo-text ${scrolling ? "hidden" : ""}`}>WebCloud Labs</span>
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li><a href="#home" onClick={(e) => scrollToSection(e, "home")}>Home</a></li>
        <li><a href="#about" onClick={(e) => scrollToSection(e, "aboutUs")}>About Us</a></li>
        <li><a href="#services" onClick={(e) => scrollToSection(e, "services")}>Services</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, "contact")}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
