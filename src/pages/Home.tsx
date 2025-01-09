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
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-4">
            <img
              src="/assets/my-photo.JPG"
              alt="Santosh Dasari"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Hi, I'm <span className="text-blue-600">Santosh Dasari</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 mb-2">
            Biomedical Engineer &amp; Product Designer
          </h2>
          <p className="text-lg text-gray-600 mb-4 max-w-2xl mx-auto">
            A senior Biomedical Engineering student at San Jose State University
            fueled by a passion for innovative product design. From medical
            devices to robotics, my work focuses on blending technical knowledge
            with creative problem-solving.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[
              "Mechanical Design",
              "CAD",
              "DFMA",
              "Product Development",
              "Medical Devices",
              "Robotics",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mb-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/SantoshDasari-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/santosh-dasari"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={copyEmailToClipboard}
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700"
            >
              <Mail size={24} />
            </motion.button>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              to="/portfolio"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              View Portfolio
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
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
            className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2"
          >
            <Check size={20} className="text-green-400" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
