import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Github, Linkedin, Moon, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return document.documentElement.classList.contains("dark");
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  // Initialize dark mode based on user preference, defaulting to light mode
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    // Only use dark mode if explicitly set in localStorage
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      // Default to light mode
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
      // If no theme is set yet, save light as the default
      if (!savedTheme) {
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/resume", label: "Resume" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <img
                src="/assets/logo.png"
                alt="Santosh Dasari Logo"
                className="h-10 w-auto object-contain transition-transform hover:scale-105"
              />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-primary ${
                    isActive
                      ? "text-primary"
                      : "text-gray-600 dark:text-gray-300"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={
                isDarkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
            <span className="text-lg font-semibold dark:text-white">Menu</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-2 py-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-primary bg-primary-50 dark:bg-gray-800"
                      : "text-gray-600 dark:text-gray-300 hover:text-primary hover:bg-primary-50 dark:hover:bg-gray-800"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center space-x-4 px-4 py-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
