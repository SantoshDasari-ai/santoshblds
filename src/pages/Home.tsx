import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 flex items-center justify-center">
      <SEO
        title="Santosh Dasari | Biomedical Engineer"
        description="Biomedical Engineer specializing in medical device design and product development"
        keywords={[
          "Biomedical Engineer",
          "Medical Device Engineer",
          "Santosh Dasari",
        ]}
        type="profile"
      />

      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <img
            src="/assets/optimized/my-photo.JPG.webp"
            alt="Santosh Dasari"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
            width={160}
            height={160}
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
          Hi, I'm <span className="text-blue-600">Santosh Dasari</span>
        </h1>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Biomedical Engineer specializing in medical device design, product
          development, and innovative engineering solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/portfolio"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/resume"
            className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}
