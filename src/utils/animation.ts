import { Variants, Variant } from "framer-motion";

/**
 * Interface for container animation variants with staggered children
 */
export interface ContainerVariants extends Variants {
  hidden: Variant;
  visible: Variant & {
    transition: {
      staggerChildren: number;
      delayChildren: number;
    };
  };
}

/**
 * Interface for item animation variants
 */
export interface ItemVariants extends Variants {
  hidden: Variant;
  visible: Variant & {
    transition: {
      type: string;
      stiffness: number;
      damping: number;
    };
  };
}

/**
 * Creates staggered animation variants for container elements
 * @param staggerDelay - Delay between each child animation
 * @param initialDelay - Initial delay before starting animations
 * @returns Container animation variants
 */
export function createContainerVariants(
  staggerDelay = 0.1,
  initialDelay = 0.3
): ContainerVariants {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: initialDelay,
      },
    },
  };
}

/**
 * Creates animation variants for child items
 * @param direction - Direction of animation ('up', 'down', 'left', 'right')
 * @param distance - Distance to animate in pixels
 * @returns Item animation variants
 */
export function createItemVariants(
  direction: "up" | "down" | "left" | "right" = "up",
  distance = 20
): ItemVariants {
  const directionMap = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
  };

  const { x, y } = directionMap[direction];

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };
}
