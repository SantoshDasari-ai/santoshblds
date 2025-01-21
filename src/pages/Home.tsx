import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const [showToast, setShowToast] = useState(false);
  const email = "santosh.d4sari@gmail.com";

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-6 md:mb-8">
            <motion.img
              src="/assets/my-photo.JPG"
              alt="Santosh Dasari"
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 px-4">
            Hi, I'm <span className="text-blue-600">Santosh Dasari</span>
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-3">
            Biomedical Engineer
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-2xl mx-auto px-4">
            A senior Biomedical Engineering student at San Jose State University
            fueled by a passion for innovative product design. From medical
            devices to robotics, my work focuses on blending technical knowledge
            with creative problem-solving.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8 px-4">
            {[
              "Mechanical Design",
              "CAD",
              "DFMA",
              "Product Development",
              "Medical Devices",
              "Robotics",
            ].map((skill) => (
              <motion.span
                key={skill}
                className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/SantoshDasari-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 shadow-md active:shadow-sm transition-all"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="https://linkedin.com/in/santosh-dasari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 shadow-md active:shadow-sm transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={copyEmailToClipboard}
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 shadow-md active:shadow-sm transition-all"
              aria-label="Copy Email"
            >
              <Mail size={24} />
            </motion.button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-md active:shadow-sm"
            >
              View Portfolio
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition-colors shadow-md active:shadow-sm"
            >
              View Resume
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-50"
          >
            <Check size={20} className="text-green-400" />
            <span>Email copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
