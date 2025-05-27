import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Card3DProps {
  children: ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

interface FloatingShapeProps {
  shape?: "circle" | "square" | "triangle" | "blob";
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary" | "accent";
  className?: string;
}

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

// 3D Card with hover effects
export function Card3D({
  children,
  className = "",
  intensity = "medium",
}: Card3DProps) {
  const intensityConfig = {
    subtle: { rotateX: 5, rotateY: 5, translateZ: 10 },
    medium: { rotateX: 10, rotateY: 10, translateZ: 20 },
    strong: { rotateX: 15, rotateY: 15, translateZ: 30 },
  };

  const config = intensityConfig[intensity];

  return (
    <motion.div
      className={`
        element-3d card-3d
        ${className}
      `}
      whileHover={{
        rotateX: config.rotateX,
        rotateY: config.rotateY,
        translateZ: config.translateZ,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {children}
    </motion.div>
  );
}

// Floating geometric shapes
export function FloatingShape({
  shape = "circle",
  size = "md",
  color = "primary",
  className = "",
}: FloatingShapeProps) {
  const shapes = {
    circle: "rounded-full",
    square: "rounded-lg",
    triangle: "clip-triangle",
    blob: "organic-blob",
  };

  const sizes = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-24 h-24",
  };

  const colors = {
    primary: "bg-gradient-to-br from-primary/20 to-primary/40",
    secondary: "bg-gradient-to-br from-secondary/20 to-secondary/40",
    accent: "bg-gradient-to-br from-accent/20 to-accent/40",
  };

  return (
    <motion.div
      className={`
        ${shapes[shape]}
        ${sizes[size]}
        ${colors[color]}
        ${className}
        backdrop-blur-sm
        shadow-lg
      `}
      animate={{
        y: [-10, 10, -10],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

// Parallax scrolling element
export function ParallaxElement({
  children,
  speed = 0.5,
  className = "",
}: ParallaxElementProps) {
  return (
    <motion.div
      className={className}
      style={{
        y: `${speed * 100}%`,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      {children}
    </motion.div>
  );
}

// Morphing blob background
export function MorphingBlob({
  className = "",
  color = "primary",
}: {
  className?: string;
  color?: "primary" | "secondary" | "accent";
}) {
  const colors = {
    primary: "bg-gradient-to-br from-primary/10 to-secondary/10",
    secondary: "bg-gradient-to-br from-secondary/10 to-accent/10",
    accent: "bg-gradient-to-br from-accent/10 to-primary/10",
  };

  return (
    <motion.div
      className={`
        ${colors[color]}
        ${className}
        organic-blob
        blur-3xl
        absolute
      `}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

// Isometric grid background
export function IsometricGrid({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full opacity-5"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="isometric"
            x="0"
            y="0"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 0 5 L 5 0 L 10 5 L 5 10 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isometric)" />
      </svg>
    </div>
  );
}

// Depth layers for visual hierarchy
export function DepthLayer({
  children,
  depth = 1,
  className = "",
}: {
  children: ReactNode;
  depth?: 1 | 2 | 3 | 4 | 5;
  className?: string;
}) {
  const depthStyles = {
    1: "transform translate-z-0",
    2: "transform translate-z-10 shadow-lg",
    3: "transform translate-z-20 shadow-xl",
    4: "transform translate-z-30 shadow-2xl",
    5: "transform translate-z-40 shadow-2xl",
  };

  return (
    <div
      className={`
        ${depthStyles[depth]}
        ${className}
        transition-all duration-300
      `}
      style={{
        transform: `translateZ(${depth * 10}px)`,
      }}
    >
      {children}
    </div>
  );
}

// Holographic effect
export function HolographicCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-2xl
        bg-gradient-to-br from-white/10 to-white/5
        backdrop-blur-xl border border-white/20
        ${className}
      `}
      whileHover={{
        scale: 1.02,
        rotateX: 5,
        rotateY: 5,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
    >
      {/* Holographic shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-out" />

      {/* Rainbow border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-red-500/20 via-yellow-500/20 via-green-500/20 via-blue-500/20 via-indigo-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

// Neon glow effect
export function NeonGlow({
  children,
  color = "primary",
  intensity = "medium",
  className = "",
}: {
  children: ReactNode;
  color?: "primary" | "secondary" | "accent";
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
}) {
  const colors = {
    primary: "shadow-primary/50",
    secondary: "shadow-secondary/50",
    accent: "shadow-accent/50",
  };

  const intensities = {
    subtle: "shadow-lg",
    medium: "shadow-xl",
    strong: "shadow-2xl",
  };

  return (
    <motion.div
      className={`
        ${colors[color]}
        ${intensities[intensity]}
        ${className}
      `}
      whileHover={{
        boxShadow: `0 0 30px var(--color-${color})`,
      }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default {
  Card3D,
  FloatingShape,
  ParallaxElement,
  MorphingBlob,
  IsometricGrid,
  DepthLayer,
  HolographicCard,
  NeonGlow,
};
