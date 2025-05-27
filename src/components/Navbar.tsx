import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Github, Linkedin, Home, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolledPast } from "../hooks/useScrollPosition";
import { mainRoutes } from "../config/routes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const scrolled = useScrolledPast(10);

  // Close mobile menu when route changes or when clicked outside
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Control body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = mainRoutes.filter((route) => route.showInNav);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "glassmorphism-strong shadow-2xl py-3 backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo/Home */}
          <motion.div
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <NavLink to="/" className="flex items-center group">
              <div className="relative">
                <motion.div
                  className="p-2 rounded-xl bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                  whileHover={{
                    boxShadow: "0 8px 32px rgba(59, 130, 246, 0.4)",
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Home size={20} />
                </motion.div>

                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-1 -right-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Sparkles size={12} className="text-accent" />
                </motion.div>
              </div>

              <span className="ml-3 text-lg font-bold text-gray-900 font-display">
                Santosh
              </span>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-2xl p-1 border border-white/20">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl ${
                        isActive
                          ? "text-white bg-gradient-to-r from-primary to-secondary shadow-lg"
                          : "text-gray-600 hover:text-primary hover:bg-white/20"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span className="relative z-10">{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl"
                            initial={false}
                            transition={{
                              type: "spring",
                              stiffness: 500,
                              damping: 30,
                            }}
                          />
                        )}
                      </>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center space-x-3">
              <motion.a
                href="https://github.com/SantoshDasari-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 hover:text-primary transition-all duration-300 hover:bg-white/20"
                aria-label="GitHub"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/santosh-dasari"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 hover:text-primary transition-all duration-300 hover:bg-white/20"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={18} />
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-gray-600 hover:text-gray-900"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden z-40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm glassmorphism-strong shadow-2xl overflow-y-auto border-l border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <span className="text-xl font-bold text-primary font-display">
                  Menu
                </span>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-xl bg-white/10 text-gray-600 hover:text-gray-900"
                  aria-label="Close menu"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                          isActive
                            ? "text-white bg-gradient-to-r from-primary to-secondary shadow-lg"
                            : "text-gray-600 hover:text-primary hover:bg-white/20"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}

                <div className="flex items-center space-x-4 px-4 py-6 mt-6 border-t border-white/20">
                  <motion.a
                    href="https://github.com/SantoshDasari-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 text-gray-600 hover:text-primary transition-colors"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={20} />
                  </motion.a>

                  <motion.a
                    href="https://linkedin.com/in/santosh-dasari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-white/10 text-gray-600 hover:text-primary transition-colors"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Linkedin size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
