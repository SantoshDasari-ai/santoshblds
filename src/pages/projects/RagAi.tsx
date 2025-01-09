import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { projects } from "../../data/projects";

const RagAi: React.FC = () => {
  const projectData = projects.find((p) => p.id === "rag-ai");
  const [modalImage, setModalImage] = useState<string | null>(null);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <header className="px-8 py-12 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Retrieval Augmented Generation (RAG) AI Tool
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl">
                A modern knowledge management system leveraging RAG technology for efficient information organization, search, and retrieval.
              </p>
            </header>

            <section className="p-8 lg:p-12 space-y-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Image Gallery Section */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    </span>
                    Project Screenshots
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 aspect-[4/3]">
                      {/* Main App Preview */}
                      <div className="col-span-2 row-span-2">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/ragapp/preview.png")
                          }
                        >
                          <img
                            src="/assets/projects/ragapp/preview.png"
                            alt="RAG AI Tool Main Interface"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chat Start Preview */}
                      <div className="col-span-2 row-span-1">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/ragapp/chatstart.png")
                          }
                        >
                          <img
                            src="/assets/projects/ragapp/chatstart.png"
                            alt="Chat Interface Initial State"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Chat End and Feedback Previews */}
                      <div className="col-span-1 row-span-1">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/ragapp/chatend.png")
                          }
                        >
                          <img
                            src="/assets/projects/ragapp/chatend.png"
                            alt="Chat Interface with Conversation"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-1 row-span-1">
                        <div
                          className="relative h-full cursor-pointer group rounded-lg overflow-hidden"
                          onClick={() =>
                            openModal("/assets/projects/ragapp/feedback.png")
                          }
                        >
                          <img
                            src="/assets/projects/ragapp/feedback.png"
                            alt="User Feedback Interface"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              Click to enlarge
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* System Architecture Section */}
                <div className="space-y-8">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                    </span>
                    System Architecture
                  </h2>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="aspect-[4/3] flex flex-col">
                      <div
                        className="relative flex-1 cursor-pointer group rounded-lg overflow-hidden"
                        onClick={() =>
                          openModal("/assets/projects/ragapp/flow-map.png")
                        }
                      >
                        <img
                          src="/assets/projects/ragapp/flow-map.png"
                          alt="RAG AI Tool System Architecture Flow Map"
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">
                            Click to enlarge
                          </span>
                        </div>
                      </div>
                      <figcaption className="text-center mt-4 text-sm text-gray-600">
                        System Architecture and Data Flow Diagram
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Description Section */}
              <div className="space-y-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 text-lg leading-relaxed">
                    This project is a modern knowledge management system that
                    leverages Retrieval-Augmented Generation (RAG) technology to
                    enable organizations to efficiently organize, search, and
                    retrieve information from their documents. The application
                    combines semantic search capabilities with advanced question
                    answering, providing a powerful tool for knowledge
                    management and information retrieval.
                  </p>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </span>
                    Key Features
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <li className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Semantic Search</h4>
                      <p className="text-gray-600">
                        Utilizes Pinecone vector database for meaning-based searches using cosine similarity for relevance measurement.
                      </p>
                    </li>
                    <li className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Advanced Question Answering</h4>
                      <p className="text-gray-600">
                        Powered by Google's Gemini 1.5 Flash for understanding complex questions and generating relevant answers.
                      </p>
                    </li>
                    <li className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Document Processing</h4>
                      <p className="text-gray-600">
                        Supports PDF and text document ingestion with efficient processing, chunking, and indexing.
                      </p>
                    </li>
                    <li className="bg-gray-50 p-6 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-2">Interactive Interface</h4>
                      <p className="text-gray-600">
                        User-friendly chat interface for natural conversational interactions.
                      </p>
                    </li>
                  </ul>
                </div>

                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center">
                    <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                    </span>
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      { label: "Programming Language", value: "Python 3.8+" },
                      { label: "Vector Database", value: "Pinecone (cosine similarity)" },
                      { label: "LLM", value: "Google Gemini 1.5 Flash" },
                      { label: "Embedding Model", value: "all-MiniLM-L6-v2" },
                      { label: "Web Framework", value: "Flask" },
                      { label: "Frontend", value: "HTML, CSS, JavaScript" },
                    ].map((tech) => (
                      <div
                        key={tech.label}
                        className="bg-gray-50 p-6 rounded-xl border border-gray-100"
                      >
                        <p className="font-semibold text-gray-900 mb-1">{tech.label}</p>
                        <p className="text-gray-600">{tech.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Credits and Acknowledgments Section */}
              <div className="space-y-8 border-t border-gray-100 pt-16">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <span className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </span>
                  Credits &amp; Acknowledgments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-4">Product Team</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Project Head: Venkata Dasari
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Product Manager: Meghana Gundluru
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Technical Advisor: Raj Gundluru
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Development Team: Raj Gundluru
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-4">Special Thanks</h3>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        CXPA Global team for their valuable feedback and support
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Open-source community for their excellent tools and documentation
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                        Beta testers who provided invaluable feedback during development
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </motion.div>
      </div>

      {/* Image Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeModal}
          >
            <span className="text-4xl font-light">&times;</span>
          </button>
          <img
            src={modalImage}
            alt="Enlarged view"
            className="max-w-[90%] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default RagAi;
