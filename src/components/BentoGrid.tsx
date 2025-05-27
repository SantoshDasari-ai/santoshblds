import { motion } from "framer-motion";
import { ReactNode } from "react";

interface BentoItemProps {
  children: ReactNode;
  className?: string;
  size?: "default" | "large" | "wide" | "tall";
  gradient?: "primary" | "secondary" | "accent" | "aurora";
  delay?: number;
}

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

const sizeClasses = {
  default: "",
  large: "bento-large",
  wide: "bento-wide",
  tall: "bento-tall",
};

const gradientClasses = {
  primary: "bg-gradient-to-br from-primary-50 to-primary-100",
  secondary: "bg-gradient-to-br from-secondary-50 to-secondary-100",
  accent: "bg-gradient-to-br from-accent-50 to-accent-100",
  aurora: "bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50",
};

export function BentoItem({
  children,
  className = "",
  size = "default",
  gradient = "primary",
  delay = 0,
}: BentoItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3 },
      }}
      className={`
        bento-item 
        ${sizeClasses[size]} 
        ${gradientClasses[gradient]}
        ${className}
        group
        cursor-pointer
        will-change-transform
        gpu-accelerated
      `}
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">{children}</div>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" />
    </motion.div>
  );
}

export function BentoGrid({ children, className = "" }: BentoGridProps) {
  return (
    <div
      className={`
        bento-grid 
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// Pre-built Bento components for common use cases
export function BentoHero({
  title,
  subtitle,
  description,
  action,
  className = "",
}: {
  title: string;
  subtitle?: string;
  description: string;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <BentoItem size="large" gradient="aurora" className={className}>
      <div className="flex flex-col justify-center h-full text-center">
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-sm font-medium text-primary-600 mb-2 tracking-wide uppercase"
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-3xl md:text-4xl font-bold text-gradient-aurora mb-4 text-balance"
        >
          {title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-lg leading-relaxed mb-6 text-pretty"
        >
          {description}
        </motion.p>
        {action && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {action}
          </motion.div>
        )}
      </div>
    </BentoItem>
  );
}

export function BentoStat({
  value,
  label,
  icon,
  trend,
  className = "",
}: {
  value: string | number;
  label: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  className?: string;
}) {
  const trendColors = {
    up: "text-green-500",
    down: "text-red-500",
    neutral: "text-gray-500",
  };

  return (
    <BentoItem gradient="primary" className={className}>
      <div className="flex items-start justify-between mb-4">
        {icon && <div className="p-3 bg-primary-100 rounded-2xl">{icon}</div>}
        {trend && (
          <div className={`text-sm font-medium ${trendColors[trend]}`}>
            {trend === "up" && "↗"}
            {trend === "down" && "↘"}
            {trend === "neutral" && "→"}
          </div>
        )}
      </div>
      <div className="mt-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="text-3xl font-bold text-gray-900 mb-1"
        >
          {value}
        </motion.div>
        <p className="text-gray-600 text-sm font-medium">{label}</p>
      </div>
    </BentoItem>
  );
}

export function BentoFeature({
  title,
  description,
  icon,
  image,
  className = "",
}: {
  title: string;
  description: string;
  icon?: ReactNode;
  image?: string;
  className?: string;
}) {
  return (
    <BentoItem gradient="secondary" className={className}>
      {image && (
        <div className="mb-4 rounded-2xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex items-start gap-3 mb-3">
        {icon && (
          <div className="p-2 bg-secondary-100 rounded-xl flex-shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-semibold text-gray-900 text-lg mb-2">{title}</h3>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </BentoItem>
  );
}

export default BentoGrid;
