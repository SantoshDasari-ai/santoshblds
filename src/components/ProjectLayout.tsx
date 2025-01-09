import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface ProjectLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function ProjectLayout({ title, subtitle, children }: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            {subtitle && (
              <p className="text-lg text-gray-600 mb-8">{subtitle}</p>
            )}
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
}