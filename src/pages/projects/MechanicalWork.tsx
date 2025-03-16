import React from "react";
import { motion } from "framer-motion";

const MechanicalWork: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Mechanical Work
          </h1>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600">Content coming soon...</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MechanicalWork;
