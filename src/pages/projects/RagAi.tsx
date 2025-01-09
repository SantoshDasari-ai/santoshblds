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
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/portfolio"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Portfolio
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <header className="p-8 border-b border-gray-100">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                Retrieval Augmented Generation (RAG) AI Tool
              </h1>
            </header>

            <section className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Image Gallery Section */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">
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
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-gray-900">
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
              <div className="mt-12 space-y-8">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600">
                    This project is a modern knowledge management system that
                    leverages Retrieval-Augmented Generation (RAG) technology to
                    enable organizations to efficiently organize, search, and
                    retrieve information from their documents. The application
                    combines semantic search capabilities with advanced question
                    answering, providing a powerful tool for knowledge
                    management and information retrieval.
                  </p>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Key Features
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Semantic Search
                        </p>
                        <p className="mt-1 text-gray-600">
                          The application utilizes a Pinecone vector database to
                          perform semantic searches, allowing users to find
                          information based on the meaning of their queries
                          rather than just keyword matching. The vector database
                          uses cosine similarity for measuring the relevance of
                          the embeddings.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Advanced Question Answering
                        </p>
                        <p className="mt-1 text-gray-600">
                          Google's Gemini 1.5 Flash is integrated to provide
                          advanced question answering capabilities, enabling the
                          system to understand complex questions and generate
                          relevant answers based on the provided knowledge base.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Document Processing
                        </p>
                        <p className="mt-1 text-gray-600">
                          The system supports the ingestion of PDF and text
                          documents, which are then processed, chunked, and
                          indexed for efficient retrieval.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">
                          Interactive Interface
                        </p>
                        <p className="mt-1 text-gray-600">
                          A user-friendly chat interface allows users to
                          interact with the system, ask questions, and receive
                          answers in a conversational manner.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Technology Stack
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { label: "Programming Language", value: "Python 3.8+" },
                      {
                        label: "Vector Database",
                        value: "Pinecone (cosine similarity)",
                      },
                      { label: "LLM", value: "Google Gemini 1.5 Flash" },
                      { label: "Embedding Model", value: "all-MiniLM-L6-v2" },
                      { label: "Web Framework", value: "Flask" },
                      { label: "Frontend", value: "HTML, CSS, JavaScript" },
                    ].map((tech) => (
                      <div
                        key={tech.label}
                        className="bg-gray-50 p-4 rounded-lg"
                      >
                        <p className="font-medium text-gray-900">
                          {tech.label}
                        </p>
                        <p className="text-gray-600">{tech.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Credits and Acknowledgments Section */}
              <div className="mt-12 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Credits &amp; Acknowledgments
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">Product Team</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>Project Head: Venkata Dasari</li>
                      <li>Product Manager: Meghana Gundluru</li>
                      <li>Technical Advisor: Raj Gundluru</li>
                      <li>Development Team: Raj Gundluru</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">
                      Special Thanks
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>
                        CXPA Global team for their valuable feedback and support
                      </li>
                      <li>
                        Open-source community for their excellent tools and
                        documentation
                      </li>
                      <li>
                        Beta testers who provided invaluable feedback during
                        development
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
