import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md"
      >
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <div className="w-full h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"></div>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-600 transition-colors"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
