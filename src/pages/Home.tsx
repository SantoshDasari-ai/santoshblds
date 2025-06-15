import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Check,
  Sparkles,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
import ErrorBoundary from "../components/ErrorBoundary";
import SEO from "../components/SEO";
import OptimizedImage from "../components/OptimizedImage";
import {
  AnimatedButton,
  ScrollReveal,
  FloatingElement,
  StaggeredContainer,
  StaggeredItem,
} from "../components/MicroInteractions";
import { createContainerVariants } from "../utils/animation";
import { safeAddEventListener } from "../utils/dom";
import { CONTACT_EMAIL, GITHUB_URL, LINKEDIN_URL, ROUTES } from "../constants";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Animation variants for staggered text reveal
  const containerVariants = createContainerVariants(0.1, 0.3);

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
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/30 py-20 px-4 relative overflow-hidden flex items-center justify-center"
      style={bgStyle}
    >
      <SEO
        title="Santosh Dasari | Biomedical Engineer"
        description="A Biomedical Engineering Graduate at San Jose State University fueled by a passion for innovative product design."
        keywords={[
          "Biomedical Engineer",
          "Product Design",
          "Medical Devices",
          "Robotics",
          "CAD",
          "DFMA",
        ]}
      />

      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-[10%] opacity-30 bg-noise-modern"></div>

        {/* Floating geometric shapes */}
        <FloatingElement intensity="subtle" className="absolute top-20 left-10">
          <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-xl" />
        </FloatingElement>

        <FloatingElement
          intensity="medium"
          className="absolute top-40 right-20"
        >
          <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 organic-blob blur-2xl" />
        </FloatingElement>

        <FloatingElement
          intensity="subtle"
          className="absolute bottom-40 left-1/4"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-2xl rotate-45 blur-xl" />
        </FloatingElement>

        {/* Grid pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="modernGrid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#modernGrid)" />
        </svg>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <ErrorBoundary>
          {/* Hero Section with Profile */}
          <ScrollReveal direction="up" className="text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              {/* Enhanced Profile Image */}
              <ErrorBoundary>
                <FloatingElement intensity="subtle">
                  <motion.div
                    className="mb-8 relative inline-block transform-gpu"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div className="relative inline-block">
                      {/* Animated gradient border */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur opacity-75 animate-gradient"></div>

                      {/* Profile image */}
                      <OptimizedImage
                        src="/assets/my-photo.JPG"
                        alt="Santosh Dasari"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full relative z-10 object-cover border-4 border-white shadow-2xl"
                        priority={true}
                        width={160}
                        height={160}
                        sizes="(max-width: 768px) 128px, 160px"
                      />

                      {/* Glow effect */}
                      <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl animate-pulse-slow"></div>
                    </motion.div>

                    {/* Status indicator */}
                    <motion.div
                      className="absolute -right-2 -bottom-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full p-2 shadow-lg border-2 border-white"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0, -5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                    >
                      <Sparkles size={16} className="text-white" />
                    </motion.div>
                  </motion.div>
                </FloatingElement>
              </ErrorBoundary>

              {/* Enhanced Typography */}
              <StaggeredContainer staggerDelay={0.1}>
                <StaggeredItem>
                  <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 px-4 relative font-display">
                    Hi, I'm{" "}
                    <span className="text-gradient-aurora font-extrabold">
                      Santosh Dasari
                    </span>
                  </motion.h1>
                </StaggeredItem>

                <StaggeredItem>
                  <motion.h2 className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-6 relative font-medium">
                    <span className="relative">
                      <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full"></span>
                      Biomedical Engineer & Product Designer
                    </span>
                  </motion.h2>
                </StaggeredItem>

                <StaggeredItem>
                  <motion.p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto px-4 relative leading-relaxed text-balance">
                    A recent Biomedical Engineering graduate from San Jose State
                    University with a passion for designing products that
                    improve healthcare outcomes. From medical devices to
                    robotics, I bring a blend of technical expertise and
                    creative problem-solving to develop solutions that make a
                    real difference in patients' lives.
                  </motion.p>
                </StaggeredItem>

                {/* Action Buttons */}
                <StaggeredItem>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                    <AnimatedButton variant="primary" size="lg">
                      <Link
                        to={ROUTES.PORTFOLIO}
                        className="flex items-center gap-3"
                      >
                        View My Work
                        <ArrowRight size={20} />
                      </Link>
                    </AnimatedButton>

                    <AnimatedButton variant="ghost" size="lg">
                      <Link
                        to={ROUTES.RESUME}
                        className="flex items-center gap-3"
                      >
                        <FileText size={20} />
                        Resume
                      </Link>
                    </AnimatedButton>
                  </div>
                </StaggeredItem>

                {/* Social Links */}
                <StaggeredItem>
                  <div className="flex gap-6 justify-center">
                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition-colors shadow-lg"
                      aria-label="GitHub Profile"
                    >
                      <Github size={24} />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-blue-600 text-white rounded-2xl hover:bg-blue-700 transition-colors shadow-lg"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin size={24} />
                    </motion.a>

                    <motion.button
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={copyEmailToClipboard}
                      className="p-4 bg-red-600 text-white rounded-2xl hover:bg-red-700 transition-colors shadow-lg"
                      aria-label="Copy Email"
                    >
                      <Mail size={24} />
                    </motion.button>
                  </div>
                </StaggeredItem>
              </StaggeredContainer>
            </motion.div>
          </ScrollReveal>
        </ErrorBoundary>
      </div>

      {/* Enhanced Toast Notification */}
      <ErrorBoundary>
        <AnimatePresence>
          {showToast && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-6 left-1/2 transform -translate-x-1/2 glassmorphism-strong text-gray-900 px-6 py-4 rounded-2xl shadow-2xl flex items-center space-x-3 z-50 border border-green-200"
            >
              <div className="p-2 bg-green-100 rounded-xl">
                <Check size={20} className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold">Email Copied!</p>
                <p className="text-sm opacity-75">Ready to paste and send</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </ErrorBoundary>
    </div>
  );
}
