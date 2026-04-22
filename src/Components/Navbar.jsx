import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../assets/Images/logo.png";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/ourprojects" },
    // { name: "Portfolio", path: "/portfolio" },
    { name: "People", path: "/ourteam" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-backdrop-filter:bg-white/95 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" 
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="flex items-center">
          <img
            src={logo}
            alt="Badar Global Enterprise Logo"
            className="h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-8">
          <ul className="flex items-center gap-6 text-base font-medium text-[#085733]">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-[#857333] transition "
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden p-2 text-[#085733] hover:text-[#857333] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#085733]"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <nav
          className="xl:hidden bg-white border-b border-gray-200 overflow-hidden"
        >
          <ul className="px-4 py-4 space-y-2 font-medium text-gray-700">
            {navItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.path}
                  className="block rounded-lg px-3 py-2 hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
