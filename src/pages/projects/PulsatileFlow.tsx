import React, { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import OptimizedImage from "../../components/OptimizedImage";

const PulsatileFlow: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const projectMetadata = {
    timeline: "Aug 2024 - Present",
    status: "In Progress",
    team: ["Santosh Dasari (Lead)", "Yhanira Medina Amaro"],
    advisor: "Dr. Alessandro Bellofiore",
    location: "Cardio Lab, San Jose State University",
  };

  const progressSteps = [
    { status: "completed", label: "Research & Planning" },
    { status: "completed", label: "Design Phase" },
    { status: "in-progress", label: "Development" },
    { status: "upcoming", label: "Testing" },
    { status: "upcoming", label: "Validation" },
  ];

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="project-container space-y-16"
        >
          {/* Project Header */}
          <div className="project-header">
            <div className="flex items-start justify-between gap-8">
              <div className="flex-1">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  In-vitro Pulsatile Flow Environment for Blood Clot Growth
                  <br />
                  Characterization near Bileaflet MHVs (TGT 2.0)
                </h1>

                {/* Project Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="flex items-center text-gray-600">
                    <Calendar size={18} className="mr-2" />
                    <span>{projectMetadata.timeline}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock size={18} className="mr-2" />
                    <span>{projectMetadata.status}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users size={18} className="mr-2" />
                    <span>{projectMetadata.team.length} Team Members</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <ExternalLink size={18} className="mr-2" />
                    <span>Cardio Lab</span>
                  </div>
                </div>
              </div>
              <img
                src="/assets/projects/pulsatile-flow/MHVicon.jpg"
                alt="MHV Icon"
                className="w-20 h-20 object-cover rounded-full shadow-md flex-shrink-0"
              />
            </div>
          </div>

          {/* Progress Timeline */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Project Progress
            </h2>
            <div className="flex justify-between items-center">
              {progressSteps.map((step, index) => (
                <div
                  key={step.label}
                  className="flex flex-col items-center flex-1"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                    ${
                      step.status === "completed"
                        ? "bg-green-500"
                        : step.status === "in-progress"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    } 
                    text-white`}
                  >
                    {step.status === "completed" ? "✓" : index + 1}
                  </div>
                  <div className="text-sm text-center text-gray-600">
                    {step.label}
                  </div>
                  {index < progressSteps.length - 1 && (
                    <div
                      className={`h-1 w-full mt-4 
                      ${
                        step.status === "completed"
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Background and Design Requirements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Background */}
            <section className="project-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Background
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Mechanical Heart Valves (MHVs) are lifesaving implants but pose
                a significant risk of thromboembolism, often leading to
                complications like stroke. The Cardio Lab's original
                'Thrombogenicity Tester (TGT)' aimed to study clot formation by
                simulating pulsatile blood flow through an MHV. While
                innovative, it struggled to replicate key physiological factors
                such as flow patterns and valve closure dynamics, limiting its
                accuracy and potential for impactful insights. As part of my
                senior project, I am leading the development of the TGT 2.0, an
                upgraded model designed to address these challenges. With
                advanced features to better mimic the cardiovascular system, TGT
                2.0 will enable more precise and reliable testing. This new
                design represents a significant step forward in understanding
                and reducing the clotting risks associated with MHVs.
              </p>
            </section>

            {/* Design Requirements */}
            <section className="project-section">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Design Requirements
              </h2>
              <ul className="list-disc pl-6 space-y-4 text-gray-600">
                <li>Human heart flow rate profile match</li>
                <li>Flow rate monitoring capabilities</li>
                <li>Vertical orientation for proper gravity simulation</li>
                <li>ISO 10993-4 Hemocompatibility Compliance</li>
                <li>Adaptable motor control code</li>
                <li>Prevent retrograde flow prevention</li>
              </ul>
            </section>
          </div>

          {/* Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* OLD TGT 1.0 Column */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                OLD TGT 1.0
              </h2>
              <div className="mb-8">
                <img
                  src="/assets/projects/pulsatile-flow/oldTGT.gif"
                  alt="Animation showing the current TGT system in operation"
                  className="w-full rounded-lg shadow-md cursor-pointer"
                  onClick={() =>
                    handleImageClick(
                      "/assets/projects/pulsatile-flow/oldTGT.gif"
                    )
                  }
                />
                <p className="text-sm text-gray-500 mt-3 text-center">
                  Figure 1: Original TGT system showing horizontal orientation
                  and clear valve housing
                </p>
              </div>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Key Features
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600">
                    <li>Horizontal orientation</li>
                    <li>Basic flow control system</li>
                    <li>Clear Valve Housing</li>
                    <li>Soft Tubing</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Limitations
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600">
                    <li>Non-physiological Heart Valve orientation</li>
                    <li>Inadequate gravity effects simulation</li>
                    <li>Poor retrograde flow prevention</li>
                    <li>Limited control over valve closure dynamics</li>
                    <li>Poor physiological flow profile</li>
                  </ul>
                </section>

                <div>
                  <OptimizedImage
                    src="/assets/projects/pulsatile-flow/oldtgtflow.png"
                    alt="Graph comparing flow rate profiles"
                    className="w-full rounded-lg shadow-md"
                    onClick={() =>
                      handleImageClick(
                        "/assets/projects/pulsatile-flow/oldtgtflow.png"
                      )
                    }
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Figure 2: Comparison of flow rate profiles between the
                    original TGT system (red) and physiological simulation
                    target (blue), highlighting the limitations in flow pattern
                    replication
                  </p>
                </div>
              </div>
            </div>

            {/* TGT 2.0 Column */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                TGT 2.0 - In Progress
              </h2>

              <div className="space-y-8">
                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Research Methodology
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">
                        Design and fabrication of flow simulation system:
                      </h4>
                      <ul className="list-disc pl-6 space-y-3 text-gray-600">
                        <li>SolidWorks-based design of kink-free flow loop</li>
                        <li>Custom valve housing and filling chamber</li>
                        <li>
                          Hemocompatible materials (PEEK, PMEA-coated PVC)
                        </li>
                        <li>
                          Vertical configuration for physiological accuracy
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">
                        Advanced motor control programming:
                      </h4>
                      <ul className="list-disc pl-6 space-y-3 text-gray-600">
                        <li>Cardiac-cycle flow characterization</li>
                        <li>Arduino-based control system</li>
                        <li>Adjustable parameters for iterative testing</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-3">
                        Validation through:
                      </h4>
                      <ul className="list-disc pl-6 space-y-3 text-gray-600">
                        <li>Ultrasonic flow meter data analysis</li>
                        <li>Statistical modeling (RMSE, CCF)</li>
                        <li>Comparison with MCL data</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Expected Outcomes
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600">
                    <li>Physiologically accurate pulsatile flow simulation</li>
                    <li>Enhanced thrombosis prevention mechanisms</li>
                    <li>Modular design for repeatable experimentation</li>
                    <li>Precise bidirectional flow control</li>
                    <li>Statistical validation of physiological conditions</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Broader Impacts
                  </h3>
                  <ul className="list-disc pl-6 space-y-3 text-gray-600">
                    <li>Advanced cardiovascular research capabilities</li>
                    <li>Expanded testing potential for various implants</li>
                    <li>Improved mechanical heart valve designs</li>
                    <li>Enhanced patient outcomes through safer technology</li>
                  </ul>
                </section>

                <div className="mt-8">
                  <img
                    src="/assets/projects/pulsatile-flow/optimized/Master Assembly Conference Render.JPG.jpg"
                    alt="CAD model of TGT 2.0 assembly"
                    className="w-full rounded-lg shadow-md cursor-pointer"
                    onClick={() =>
                      handleImageClick(
                        "/assets/projects/pulsatile-flow/optimized/Master Assembly Conference Render.JPG.jpg"
                      )
                    }
                  />
                  <p className="text-sm text-gray-500 mt-3 text-center">
                    Figure 3: CAD model showing the vertical orientation and
                    improved design features of TGT 2.0
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-4xl mx-auto p-4">
                {selectedImage.endsWith(".gif") ? (
                  <img
                    src={selectedImage}
                    alt="Enlarged view"
                    className="max-h-[90vh] w-auto"
                  />
                ) : (
                  <OptimizedImage
                    src={selectedImage}
                    alt="Enlarged view"
                    className="max-h-[90vh] w-auto"
                    priority={true}
                  />
                )}
              </div>
            </div>
          )}

          {/* Credits Section */}
          <div className="border-t border-gray-200 pt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Team & Acknowledgements
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Team Members
                </h3>
                <ul className="space-y-2">
                  {projectMetadata.team.map((member) => (
                    <li
                      key={member}
                      className="flex items-center text-gray-600"
                    >
                      <ChevronRight size={16} className="mr-2" />
                      {member}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Acknowledgements
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Special thanks to {projectMetadata.advisor} and Dr. Sreyashi
                  Chakraborty for their guidance and support throughout this
                  project. This project was made possible by the resources
                  provided by the Cardio Lab and the support from San Jose State
                  University.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PulsatileFlow;
