import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import OptimizedImage from "../../components/OptimizedImage";

const RagAi: React.FC = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const project = projects.find((p) => p.id === "rag-ai");

  if (!project) {
    return <div>Project not found</div>;
  }

  const openModal = (image: string) => setModalImage(image);
  const closeModal = () => setModalImage(null);

  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2">{project.title}</h1>
        <p className="text-xl text-gray-600 mb-8">{project.description}</p>

        <div className="mb-12">
          <OptimizedImage
            src="/assets/projects/ragapp/preview.png"
            alt="RAG AI application preview"
            className="w-full rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal("/assets/projects/ragapp/preview.png")}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Chat Interface</h3>
            <OptimizedImage
              src="/assets/projects/ragapp/chatstart.png"
              alt="Initial chat interface"
              className="w-full rounded-lg shadow-lg cursor-pointer mb-4"
              onClick={() => openModal("/assets/projects/ragapp/chatstart.png")}
            />
            <OptimizedImage
              src="/assets/projects/ragapp/chatend.png"
              alt="Chat interface with feedback"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal("/assets/projects/ragapp/chatend.png")}
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Feedback System</h3>
            <OptimizedImage
              src="/assets/projects/ragapp/feedback.png"
              alt="User feedback modal"
              className="w-full rounded-lg shadow-lg cursor-pointer"
              onClick={() => openModal("/assets/projects/ragapp/feedback.png")}
            />
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">System Architecture</h3>
          <OptimizedImage
            src="/assets/projects/ragapp/flow-map.png"
            alt="System architecture flow map"
            className="w-full rounded-lg shadow-lg cursor-pointer"
            onClick={() => openModal("/assets/projects/ragapp/flow-map.png")}
          />
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.img
              src={modalImage}
              alt="Expanded view"
              className="max-w-[90vw] max-h-[90vh] rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default RagAi;
