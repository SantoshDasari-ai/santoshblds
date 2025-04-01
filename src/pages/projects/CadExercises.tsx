import React, { useState } from "react";
import { projects } from "../../data/projects";

// Define simple type
type GalleryItem = {
  id: string;
  title: string;
  type: "image" | "video";
  src: string;
};

// Utility function to ensure paths are absolute from root
const withBasePath = (path: string): string => {
  // Remove leading slash if exists to standardize
  const cleanPath = path.startsWith("/") ? path.substring(1) : path;
  // Get the base URL from the window location
  const baseUrl = window.location.origin;
  return `${baseUrl}/${cleanPath}`;
};

// Define gallery items
const galleryItems: GalleryItem[] = [
  {
    id: "cad1",
    title: "BMW Wheel Design",
    type: "image",
    src: "assets/projects/cad/BMW Wheel.jpg",
  },
  {
    id: "cad2",
    title: "Sheet Metal Practice (3D)",
    type: "image",
    src: "assets/projects/cad/sheet metal practice.jpg",
  },
  {
    id: "cad3",
    title: "Sheet Metal Practice (Flat Pattern)",
    type: "image",
    src: "assets/projects/cad/sheet metal practice flat.jpg",
  },
  {
    id: "cad4",
    title: "Boat Design",
    type: "image",
    src: "assets/projects/cad/Boat.jpg",
  },
  {
    id: "cad5",
    title: "Medicine Bottle Design",
    type: "image",
    src: "assets/projects/cad/Medicine Bottle.jpg",
  },
  {
    id: "cad6",
    title: "Robot Mechanism",
    type: "image",
    src: "assets/projects/cad/robot.JPG",
  },
  {
    id: "cad7",
    title: "Wrist Mechanism",
    type: "image",
    src: "assets/projects/cad/wrist.JPG",
  },
  {
    id: "cad8",
    title: "Bottle Opener (View 1)",
    type: "image",
    src: "assets/projects/cad/Bottle opener1.jpg",
  },
  {
    id: "cad9",
    title: "Bottle Opener (View 2)",
    type: "image",
    src: "assets/projects/cad/Bottle opener2.jpg",
  },
  {
    id: "cad10",
    title: "Make-A-Thon Project (View 1)",
    type: "image",
    src: "assets/projects/cad/make-thon1.PNG",
  },
  {
    id: "cad11",
    title: "Make-A-Thon Project (View 2)",
    type: "image",
    src: "assets/projects/cad/make-thon2.PNG",
  },
  {
    id: "cad12",
    title: "Engine Assembly Animation",
    type: "video",
    src: "assets/projects/cad/Engine Assembly.mp4",
  },
  {
    id: "cad13",
    title: "Assembly Controls Demo",
    type: "video",
    src: "assets/projects/cad/Assembly Controls.mp4",
  },
];

// Google Drive folder link
const driveFolderLink =
  "https://drive.google.com/drive/folders/your-drive-folder-id";

function CadExercises() {
  const projectData = projects.find((p) => p.id === "cad-exercises");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  if (!projectData) {
    return <div>Project not found</div>;
  }

  const handleItemClick = (item: GalleryItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">
              {projectData.title}
            </h1>
            <p className="mt-2 text-gray-600">{projectData.description}</p>
          </div>

          {/* Gallery Header with Drive Button */}
          <div className="px-6 py-4 flex flex-wrap justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-800">
              CAD Project Gallery
            </h2>
            <a
              href={driveFolderLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 sm:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                />
              </svg>
              View All CAD Files
            </a>
          </div>

          {/* Gallery */}
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {galleryItems.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden rounded-lg shadow-md cursor-pointer transform hover:scale-105 transition-all duration-300"
                  onClick={() => handleItemClick(item)}
                >
                  {item.type === "image" ? (
                    <div className="relative h-52">
                      <img
                        src={withBasePath(item.src)}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                        {item.title}
                      </div>
                    </div>
                  ) : (
                    <div className="relative h-52 bg-gray-800 flex items-center justify-center">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full w-12 h-12 bg-blue-500 flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2">
                        {item.title}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Simple Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-75 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-lg max-w-3xl max-h-[90vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-75"
            >
              ×
            </button>

            <div className="p-4 bg-black flex items-center justify-center">
              {selectedItem.type === "image" ? (
                <img
                  src={withBasePath(selectedItem.src)}
                  alt={selectedItem.title}
                  className="max-h-[70vh] max-w-full mx-auto object-contain"
                />
              ) : (
                <video
                  src={withBasePath(selectedItem.src)}
                  controls
                  className="max-h-[70vh] max-w-full mx-auto"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            <div className="px-4 py-3 bg-gray-100">
              <h3 className="text-lg font-medium text-gray-900">
                {selectedItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CadExercises;
