import React, { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";

// This will be replaced with your actual CAD exercises data once you upload the images
const cadExercises = [
  {
    id: "cad1",
    title: "CAD Exercise 1",
    image: "/assets/projects/cad/placeholder1.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-1", // Replace with actual GrabCAD link
  },
  {
    id: "cad2",
    title: "CAD Exercise 2",
    image: "/assets/projects/cad/placeholder2.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-2", // Replace with actual GrabCAD link
  },
  {
    id: "cad3",
    title: "CAD Exercise 3",
    image: "/assets/projects/cad/placeholder3.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-3", // Replace with actual GrabCAD link
  },
  {
    id: "cad4",
    title: "CAD Exercise 4",
    image: "/assets/projects/cad/placeholder4.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-4", // Replace with actual GrabCAD link
  },
  {
    id: "cad5",
    title: "CAD Exercise 5",
    image: "/assets/projects/cad/placeholder5.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-5", // Replace with actual GrabCAD link
  },
  {
    id: "cad6",
    title: "CAD Exercise 6",
    image: "/assets/projects/cad/placeholder6.jpg", // Replace with actual image path once uploaded
    grabCadLink: "https://grabcad.com/library/your-model-6", // Replace with actual GrabCAD link
  },
];

const CadExercises: React.FC = () => {
  const projectData = projects.find((p) => p.id === "cad-exercises");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<
    (typeof cadExercises)[0] | null
  >(null);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const openModal = (exercise: (typeof cadExercises)[0]) => {
    setSelectedExercise(exercise);
    setModalImage(exercise.image);
  };

  const closeModal = () => {
    setModalImage(null);
    setSelectedExercise(null);
  };

  const openGrabCadLink = () => {
    if (selectedExercise) {
      window.open(selectedExercise.grabCadLink, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            <header className="px-4 py-3 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
              <div className="flex justify-between items-center gap-4 max-w-[90rem] mx-auto">
                <div className="flex-1">
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {projectData.title}
                  </h1>
                  <p className="text-base text-gray-600 max-w-2xl">
                    {projectData.description}
                  </p>
                </div>
              </div>
            </header>

            <div className="p-4">
              <div className="max-w-[90rem] mx-auto">
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-gray-900 flex items-center mb-2">
                    <span className="w-5 h-5 rounded-lg bg-blue-100 text-blue-600 inline-flex items-center justify-center mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3 h-3"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        ></rect>
                        <circle cx="8.5" cy="8.5" r="1.5"></circle>
                        <polyline points="21 15 16 10 5 21"></polyline>
                      </svg>
                    </span>
                    CAD Exercise Gallery
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">
                    Click on any image to view details and access the GrabCAD
                    link
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {cadExercises.map((exercise) => (
                      <motion.div
                        key={exercise.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="relative group"
                      >
                        <div
                          className="relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transition-shadow duration-300"
                          onClick={() => openModal(exercise)}
                        >
                          <img
                            src={exercise.image}
                            alt={exercise.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white text-sm font-medium">
                              {exercise.title}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>

      {/* Modal for viewing images and accessing GrabCAD links */}
      {modalImage && selectedExercise && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={modalImage}
                alt={selectedExercise.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70 transition-colors"
                onClick={closeModal}
              >
                <span className="text-xl font-light">&times;</span>
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {selectedExercise.title}
              </h3>
              <button
                onClick={openGrabCadLink}
                className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                View on GrabCAD
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CadExercises;
