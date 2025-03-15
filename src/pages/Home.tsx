import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Check,
  MousePointer,
} from "lucide-react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import SEO from "../components/SEO";
import {
  createContainerVariants,
  createItemVariants,
} from "../utils/animation";
import { safeAddEventListener } from "../utils/dom";
import {
  CONTACT_EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  SKILLS,
  ROUTES,
} from "../constants";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation variants for staggered text reveal
  const containerVariants = createContainerVariants(0.1, 0.3);
  const itemVariants = createItemVariants("up", 20);

  // Track mouse position for interactive background effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    return safeAddEventListener(window, "mousemove", handleMouseMove);
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  // Interactive background style based on mouse position
  const bgStyle = {
    backgroundPosition: `${mousePosition.x * 30}px ${mousePosition.y * 30}px`,
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 py-20 px-4 relative overflow-hidden"
      style={bgStyle}
    >
      <SEO
        title="Santosh Dasari | Biomedical Engineer"
        description="A senior Biomedical Engineering student at San Jose State University fueled by a passion for innovative product design."
        keywords={[
          "Biomedical Engineer",
          "Product Design",
          "Medical Devices",
          "Robotics",
          "CAD",
          "DFMA",
        ]}
      />

      {/* Interactive background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-20 bg-noise blur-xl"></div>
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="smallGrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#smallGrid)" />
        </svg>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <ErrorBoundary>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center flex flex-col items-center"
          >
            {/* Profile image with 3D effect */}
            <ErrorBoundary>
              <motion.div
                className="mb-6 md:mb-8 relative inline-block transform-gpu"
                animate={{
                  y: [-5, 5, -5],
                  transition: {
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut",
                  },
                }}
              >
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 animate-pulse"></div>
                  <img
                    src="/assets/my-photo.JPG"
                    alt="Santosh Dasari"
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full relative z-10 object-cover border-4 border-white dark:border-gray-700 shadow-lg"
                  />
                  <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl animate-pulse"></div>
                </motion.div>

                {/* Interactive indicator */}
                <motion.div
                  className="absolute -right-2 -bottom-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                >
                  <MousePointer size={16} className="text-primary" />
                </motion.div>
              </motion.div>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.h1
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 px-4 relative"
              >
                Hi, I'm{" "}
                <span className="text-gradient font-extrabold">
                  Santosh Dasari
                </span>
              </motion.h1>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-3 relative"
              >
                <span className="relative">
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary-300 dark:bg-primary-700 opacity-60 rounded-full"></span>
                  Biomedical Engineer
                </span>
              </motion.h2>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.p
                variants={itemVariants}
                className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto px-4 relative"
              >
                A senior Biomedical Engineering student at San Jose State
                University fueled by a passion for innovative product design.
                From medical devices to robotics, my work focuses on blending
                technical knowledge with creative problem-solving.
              </motion.p>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-2 mb-8 px-4"
              >
                {SKILLS.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1.5 bg-primary-100 dark:bg-gray-700 text-primary-800 dark:text-primary-300 rounded-full text-sm font-medium relative overflow-hidden"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                  >
                    <span className="relative z-10">{skill}</span>
                    <motion.span
                      className="absolute inset-0 bg-primary/10 dark:bg-primary/20"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.span>
                ))}
              </motion.div>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.div
                variants={itemVariants}
                className="flex justify-center space-x-6 mb-8"
              >
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 active:shadow-sm transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary text-white rounded-full hover:bg-primary-600 active:shadow-sm transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.button
                  whileHover={{
                    scale: 1.1,
                    y: -3,
                    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}
                  onClick={copyEmailToClipboard}
                  className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 active:shadow-sm transition-all btn-hover-effect"
                  aria-label="Copy Email"
                >
                  <Mail size={24} />
                </motion.button>
              </motion.div>
            </ErrorBoundary>

            <ErrorBoundary>
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-center gap-4 px-4"
              >
                <Link
                  to={ROUTES.PORTFOLIO}
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-600 active:bg-primary-700 transition-colors shadow-md active:shadow-sm group overflow-hidden relative btn-hover-effect"
                >
                  <span className="relative z-10 flex items-center">
                    View Portfolio
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        repeatType: "loop",
                      }}
                    >
                      <ArrowRight className="ml-2" size={20} />
                    </motion.span>
                  </span>
                </Link>
                <Link
                  to={ROUTES.RESUME}
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-semibold rounded-lg hover:bg-secondary-600 active:bg-secondary-700 transition-colors shadow-md active:shadow-sm group overflow-hidden relative btn-hover-effect"
                >
                  <span className="relative z-10 flex items-center">
                    View Resume
                    <motion.span
                      initial={{ x: 0 }}
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        repeat: Infinity,
                        duration: 1.5,
                        repeatType: "loop",
                      }}
                    >
                      <ArrowRight className="ml-2" size={20} />
                    </motion.span>
                  </span>
                </Link>
              </motion.div>
            </ErrorBoundary>
          </motion.div>
        </ErrorBoundary>
      </div>

      <ErrorBoundary>
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 glassmorphism text-gray-900 dark:text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50"
            >
              <Check size={20} className="text-green-400" />
              <span>Email copied!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}
