import React from "react";
import ConditionalScrollIndicator from "./ConditionalScrollIndicator";
import { motion, AnimatePresence } from "framer-motion";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Simplify the layout component to fix potential issues
  return (
    <AnimatePresence mode="wait">
      <div className="relative overflow-x-hidden">
        {/* Background noise texture */}
        <div className="fixed inset-0 pointer-events-none opacity-20 z-0">
          <div className="absolute inset-0 bg-noise"></div>
        </div>

        <ConditionalScrollIndicator />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-10"
        >
          {children}
        </motion.main>
      </div>
    </AnimatePresence>
  );
};

export default Layout;
