import { motion, useAnimation, useInView } from "framer-motion";
import { ReactNode, useRef, useEffect } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

interface FloatingElementProps {
  children: ReactNode;
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}

interface MagneticButtonProps {
  children: ReactNode;
  strength?: number;
  className?: string;
  onClick?: () => void;
}

// Modern animated button with microinteractions
export function AnimatedButton({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
}: AnimatedButtonProps) {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white",
    secondary: "bg-gradient-to-r from-secondary to-accent text-white",
    accent: "bg-gradient-to-r from-accent to-primary text-white",
    ghost:
      "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
        relative overflow-hidden rounded-xl font-semibold
        transition-all duration-300 ease-out
        focus:outline-none focus:ring-4 focus:ring-primary/30
        disabled:opacity-50 disabled:cursor-not-allowed
        group
      `}
      whileHover={{
        scale: disabled ? 1 : 1.02,
        y: disabled ? 0 : -2,
      }}
      whileTap={{
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0,
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-white/20 rounded-xl"
        initial={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
      />

      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}

// Scroll reveal animation
export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration,
          delay,
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      });
    }
  }, [isInView, controls, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction],
      }}
      animate={controls}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Floating animation for elements
export function FloatingElement({
  children,
  intensity = "medium",
  className = "",
}: FloatingElementProps) {
  const intensities = {
    subtle: { y: [-2, 2], duration: 4 },
    medium: { y: [-5, 5], duration: 3 },
    strong: { y: [-10, 10], duration: 2 },
  };

  const config = intensities[intensity];

  return (
    <motion.div
      className={className}
      animate={{
        y: config.y,
      }}
      transition={{
        duration: config.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic button effect
export function MagneticButton({
  children,
  strength = 20,
  className = "",
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);

    ref.current.style.transform = `translate(${deltaX * strength}px, ${
      deltaY * strength
    }px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`
        transition-transform duration-300 ease-out
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
}

// Staggered children animation
export function StaggeredContainer({
  children,
  staggerDelay = 0.1,
  className = "",
}: {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Individual staggered item
export function StaggeredItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

// Morphing icon button
export function MorphingIcon({
  icon1,
  icon2,
  isToggled,
  onClick,
  className = "",
}: {
  icon1: ReactNode;
  icon2: ReactNode;
  isToggled: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`
        relative p-3 rounded-xl
        bg-white/10 backdrop-blur-sm
        border border-white/20
        hover:bg-white/20 transition-colors
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isToggled ? 180 : 0,
          scale: isToggled ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isToggled ? icon2 : icon1}
      </motion.div>
    </motion.button>
  );
}

// Pulse animation for notifications
export function PulseNotification({
  children,
  isActive = false,
  className = "",
}: {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={
        isActive
          ? {
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(59, 130, 246, 0.7)",
                "0 0 0 10px rgba(59, 130, 246, 0)",
                "0 0 0 0 rgba(59, 130, 246, 0)",
              ],
            }
          : {}
      }
      transition={{
        duration: 2,
        repeat: isActive ? Infinity : 0,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default {
  AnimatedButton,
  ScrollReveal,
  FloatingElement,
  MagneticButton,
  StaggeredContainer,
  StaggeredItem,
  MorphingIcon,
  PulseNotification,
};
