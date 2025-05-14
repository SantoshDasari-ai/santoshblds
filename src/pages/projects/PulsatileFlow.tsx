import React, { useState } from "react";
import {
  Calendar,
  Users,
  Clock,
  ExternalLink,
  ChevronRight,
  X,
} from "lucide-react";
import { motion } from "framer-motion";

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
    { status: "completed", label: "Development" },
    { status: "completed", label: "Testing" },
    { status: "in-progress", label: "Validation" },
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

          {/* Introduction Section with Images */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-5">
                  Project Introduction
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This Project designs, develops, and validates an innovative
                  in-vitro pulsatile flow system, the ThromboGenicity Tester
                  (TGT 2.0), to evaluate blood clot formation near bileaflet
                  mechanical heart valves (MHVs).
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The device replicates physiological cardiac flow conditions
                  with enhanced accuracy, utilizing hemocompatible materials and
                  precise motor control mechanisms to prevent unintended
                  thrombosis within the experimental setup. Validation is
                  conducted through flow dynamics testing and comparative
                  analysis against established physiological flow benchmarks.
                </p>
              </div>
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/projects/pulsatile-flow/showcase-pic.JPG"
                      alt="Project Showcase with Team"
                      className="rounded-lg shadow-md w-full h-auto object-contain cursor-pointer"
                      onClick={() =>
                        handleImageClick(
                          "/assets/projects/pulsatile-flow/showcase-pic.JPG"
                        )
                      }
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/projects/pulsatile-flow/TGTBlood.png"
                      alt="TGT Blood Flow Testing Device"
                      className="rounded-lg shadow-md w-full h-auto object-contain cursor-pointer"
                      onClick={() =>
                        handleImageClick(
                          "/assets/projects/pulsatile-flow/TGTBlood.png"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Overview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Design Overview
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    The ThromboGenicity Tester (TGT 2.0) is designed to be
                    compact, modular, and lightweight for easy handling and
                    integration into lab procedures. Its torus structure
                    includes specialized sections for blood administration, flow
                    measurement, and valve housing, all securely mounted for
                    stability and ease of maintenance.
                  </p>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    The TGT 2.0 reproduces the heart's pulsatile flow through a
                    precisely controlled stepper motor system. The motor creates
                    a fast clockwise rotation to simulate systole (heart
                    contraction) and a slower counterclockwise return stroke to
                    mimic diastole (heart relaxation). This mechanical action
                    generates physiologically accurate flow patterns around the
                    mechanical heart valve being tested.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Components
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Valve Housing:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Polished inner bore with opposing ports for
                          simultaneous blood and protamine infusion
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Tygon® Tubing:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Ensures hemocompatibility and allows flow measurement
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          3D-printed Hub:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Mounted on the motor shaft to securely grip the
                          fluid-filled torus throughout testing
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Stepper Motor:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Produces fast clockwise rotation (systole) and a
                          slower counterclockwise return stroke (diastole)
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Vertical Positioning:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Considers gravitational effects on MHV closure and
                          mirrors physiological valve orientation
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="flex justify-center">
                  <img
                    src="/assets/projects/pulsatile-flow/TGT-Analog.JPG"
                    alt="TGT Analog Device"
                    className="rounded-lg shadow-md h-64 w-full object-contain cursor-pointer"
                    onClick={() =>
                      handleImageClick(
                        "/assets/projects/pulsatile-flow/TGT-Analog.JPG"
                      )
                    }
                  />
                </div>
                <div className="flex justify-center">
                  <video
                    className="rounded-lg shadow-md h-56 w-full object-contain"
                    controls
                    muted
                  >
                    <source
                      src="/assets/projects/pulsatile-flow/TGT demo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Verification Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Verification & Results
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                The ThromboGenicity Tester (TGT 2.0) has undergone verification
                to ensure it effectively replicates physiological flow
                conditions around mechanical heart valves. For testing the
                pulsatile nature of the flow, a literature-cited blood analog
                was used in place of actual blood, allowing for transparent
                visualization and consistent testing conditions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Testing Methodology
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Blood Analog Fluid:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          A transparent solution containing 0.69 g/L Xanthan gum
                          in water with 0.5% glycerol
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Flow Measurement:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Ultrasonic flow meter for precise quantification of
                          flow dynamics
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Key Findings
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-600">
                          Successful replication of physiological flow rates
                          comparable to cardiac output
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-600">
                          The blood analog fluid demonstrated rheological
                          properties similar to human blood
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-600">
                          Consistent and repeatable pulsatile flow generation
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Verification Outcomes
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  The TGT 2.0 successfully demonstrated its ability to generate
                  pulsatile flow that mimics physiological conditions. The
                  specially formulated blood analog fluid allowed for testing
                  while maintaining rheological properties similar to human
                  blood. The ultrasonic flow meter provided measurements of flow
                  velocity and volume, confirming the system's ability to
                  replicate physiological pulsatile flow conditions.
                </p>
                <p className="text-gray-600 leading-relaxed mt-3">
                  These verification tests establish a foundation for future
                  experiments with actual blood samples, where thrombogenic
                  potential can be assessed under controlled and repeatable
                  conditions. The use of the blood analog fluid was crucial for
                  initial testing and system validation before proceeding to
                  tests with biological samples.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  Flow Measurement Demo
                </h3>
                <div className="flex justify-center">
                  <video
                    className="rounded-lg shadow-md max-w-lg w-full h-auto"
                    controls
                    muted
                  >
                    <source
                      src="/assets/projects/pulsatile-flow/flowdemo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-gray-600 text-center mt-3 text-sm">
                  Video demonstration of the pulsatile flow measurements using
                  the blood analog fluid and ultrasonic flow meter
                </p>
              </div>
            </div>
          </div>

          {/* Validation with Blood Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Validation with Blood
            </h2>
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                Following verification with the blood analog fluid, the TGT
                system underwent validation using actual blood samples to assess
                its capability to reproduce thrombogenicity conditions under
                controlled settings.
              </p>

              <div className="grid grid-cols-1 gap-8 mt-6 items-start">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    Validation Methods
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Blood Sample:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Porcine whole blood with NA heparin was utilized.
                          Protamine was added at the beginning of each trial
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Flow Measurement:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Ultrasonic flow meter to record continuous pulsatile
                          flow profiles during 45-minute test inside an
                          incubator at 37°C
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Acoustic Monitoring:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Microphone positioned adjacent to MHV to detect valve
                          operation
                        </span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight
                        size={16}
                        className="mr-2 mt-1 text-blue-500"
                      />
                      <div>
                        <span className="text-gray-800 font-medium">
                          Blood Analysis:
                        </span>
                        <span className="text-gray-600">
                          {" "}
                          Heska Element HT5 hematology analyzer used to assess
                          blood cell count before and after each trial
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-800 mb-5">
                  Results
                </h3>

                <div className="space-y-10">
                  {/* Visual/Hematological Marker Data */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 mb-4">
                      Visual/Hematological Marker Data
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Left side - Description */}
                      <div className="space-y-4">
                        <p className="text-gray-600 leading-relaxed">
                          Visual inspection and hematological analysis provided
                          strong evidence of thrombus formation during testing.
                          Mechanical heart valves showed significant clot
                          accumulation after the 45-minute test period compared
                          to their clean pre-test state.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          Blood samples analyzed before and after testing
                          revealed considerable platelet consumption, a key
                          indicator of thrombogenic activity. Across 181
                          samples, platelet counts consistently dropped from
                          baseline levels, with a mean reduction illustrated by
                          the red line in the graph.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                          This dual verification through both visual observation
                          and quantitative platelet analysis confirms the TGT
                          system's ability to effectively reproduce thrombogenic
                          conditions around mechanical heart valves.
                        </p>
                      </div>

                      {/* Right side - Images */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col items-center">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">
                              Before Clotting
                            </h5>
                            <div className="h-32 w-full flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden">
                              <img
                                src="/assets/projects/pulsatile-flow/preclotvalve.png"
                                alt="Mechanical Heart Valve Before Clotting"
                                className="max-h-full max-w-full object-contain cursor-pointer"
                                onClick={() =>
                                  handleImageClick(
                                    "/assets/projects/pulsatile-flow/preclotvalve.png"
                                  )
                                }
                              />
                            </div>
                            <p className="text-gray-600 text-xs mt-2 text-center">
                              Clean valve surface
                            </p>
                          </div>
                          <div className="flex flex-col items-center">
                            <h5 className="text-sm font-medium text-gray-700 mb-2">
                              After Clotting
                            </h5>
                            <div className="h-32 w-full flex items-center justify-center bg-white rounded-lg shadow-md overflow-hidden">
                              <img
                                src="/assets/projects/pulsatile-flow/postclotvalve.png"
                                alt="Mechanical Heart Valve After Clotting"
                                className="max-h-full max-w-full object-contain cursor-pointer"
                                onClick={() =>
                                  handleImageClick(
                                    "/assets/projects/pulsatile-flow/postclotvalve.png"
                                  )
                                }
                              />
                            </div>
                            <p className="text-gray-600 text-xs mt-2 text-center">
                              Thrombus formation visible
                            </p>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2 text-center">
                            Platelet Count Analysis
                          </h5>
                          <div className="flex justify-center">
                            <img
                              src="/assets/projects/pulsatile-flow/platelet-drop.png"
                              alt="Graph showing platelet count drop between baseline and post-clot samples"
                              className="rounded-lg shadow-md w-full max-w-xs h-auto object-contain cursor-pointer"
                              onClick={() =>
                                handleImageClick(
                                  "/assets/projects/pulsatile-flow/platelet-drop.png"
                                )
                              }
                            />
                          </div>
                          <p className="text-gray-600 text-xs mt-2 text-center">
                            Mean platelet drop (red line) across 181 samples
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Flow Parameters */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-md font-semibold text-gray-800 mb-4">
                      Flow Parameters
                    </h4>
                    <div className="space-y-6">
                      {/* Description */}
                      <div className="text-gray-600 leading-relaxed">
                        <p className="mb-3">
                          The TGT system successfully generated physiologically
                          accurate pulsatile flow patterns mimicking cardiac
                          output. Continuous flow measurements captured using
                          the ultrasonic flow meter revealed consistent cyclic
                          patterns with well-defined systolic and diastolic
                          phases.
                        </p>
                        <p className="mb-3">
                          Reynolds numbers and Womersley numbers were calculated
                          at different phases of the cardiac cycle, with all
                          values falling within physiological ranges. The peak
                          systolic flow achieved Reynolds numbers over 7,000,
                          correctly simulating the turbulent flow conditions
                          found near mechanical heart valves in vivo.
                        </p>
                      </div>

                      {/* First row - Flow pattern and table */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            Pulsatile Flow Pattern
                          </h5>
                          <div className="bg-white rounded-lg shadow-md p-2 h-44 flex items-center justify-center">
                            <img
                              src="/assets/projects/pulsatile-flow/pulsatileflow.png"
                              alt="Graph showing narrowed flow rate over time with repeating pulsatile pattern"
                              className="max-h-full max-w-full object-contain cursor-pointer"
                              onClick={() =>
                                handleImageClick(
                                  "/assets/projects/pulsatile-flow/pulsatileflow.png"
                                )
                              }
                            />
                          </div>
                          <p className="text-gray-600 text-xs mt-1 text-center">
                            Multiple cardiac cycles showing consistent flow
                            patterns
                          </p>
                        </div>

                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            Flow Parameter Analysis
                          </h5>
                          <div className="bg-white rounded-lg shadow-md p-2 h-44 flex items-center justify-center">
                            <img
                              src="/assets/projects/pulsatile-flow/reynoldandwormersley-table.png"
                              alt="Table showing Reynolds numbers and flow parameters at different cardiac phases"
                              className="max-h-full max-w-full object-contain cursor-pointer"
                              onClick={() =>
                                handleImageClick(
                                  "/assets/projects/pulsatile-flow/reynoldandwormersley-table.png"
                                )
                              }
                            />
                          </div>
                          <p className="text-gray-600 text-xs mt-1 text-center">
                            Reynolds and Womersley numbers throughout the
                            cardiac cycle
                          </p>
                        </div>
                      </div>

                      {/* Second row - Single cycle and description */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <div>
                          <h5 className="text-sm font-medium text-gray-700 mb-2">
                            Single Cardiac Cycle Analysis
                          </h5>
                          <div className="bg-white rounded-lg shadow-md p-2 h-44 flex items-center justify-center">
                            <img
                              src="/assets/projects/pulsatile-flow/strokevolume.png"
                              alt="Graph showing blood flow over one cardiac cycle with stroke volume measurement"
                              className="max-h-full max-w-full object-contain cursor-pointer"
                              onClick={() =>
                                handleImageClick(
                                  "/assets/projects/pulsatile-flow/strokevolume.png"
                                )
                              }
                            />
                          </div>
                          <p className="text-gray-600 text-xs mt-1 text-center">
                            Stroke volume of 100.76 mL with positive and
                            negative flow regions
                          </p>
                        </div>

                        <div className="text-gray-600 leading-relaxed">
                          <p>
                            A stroke volume of approximately 100 mL was
                            maintained throughout testing, with positive flow
                            during systole and brief negative flow during valve
                            closure, accurately representing the hemodynamics of
                            the native heart.
                          </p>
                          <p className="mt-2">
                            These flow parameters create the necessary
                            conditions for studying thrombogenicity under
                            realistic cardiovascular conditions, allowing for
                            accurate reproduction of shear stresses encountered
                            in vivo.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion and Future Work Section */}
                  <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Conclusion & Future Work
                    </h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Conclusion */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Summary of Achievements
                          </h3>
                          <div className="space-y-3">
                            <p className="text-gray-600 leading-relaxed">
                              The TGT 2.0 system has been successfully developed
                              and validated as an effective platform for
                              studying thrombogenicity in mechanical heart
                              valves. The system's compact, modular design
                              allows for precise control of flow conditions
                              while providing a physiologically relevant
                              environment for blood testing.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                              Key accomplishments include:
                            </p>
                            <ul className="space-y-2 pl-5 list-disc text-gray-600">
                              <li>
                                Design and fabrication of a torus-shaped test
                                chamber with optimized valve housing
                              </li>
                              <li>
                                Integration of a stepper motor system that
                                accurately reproduces cardiac pulsatile flow
                              </li>
                              <li>
                                Validation with both blood analog fluid and
                                porcine whole blood samples
                              </li>
                              <li>
                                Demonstration of thrombus formation under
                                controlled conditions
                              </li>
                              <li>
                                Quantification of flow parameters that match
                                physiological conditions
                              </li>
                            </ul>
                          </div>
                        </div>

                        {/* Future Work */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Future Research Directions
                          </h3>
                          <div className="space-y-3">
                            <p className="text-gray-600 leading-relaxed">
                              Building on the current success of the TGT system,
                              several specific improvements and future work have
                              been identified:
                            </p>
                            <ul className="space-y-2 pl-5 list-disc text-gray-600">
                              <li>
                                Manufacture a hardtube blood circulation loop
                                using PMMA to avoid kinks and further enhance
                                hemocompatibility
                              </li>
                              <li>
                                Adapt supply through blood bags and stopcocks to
                                minimize O₂ exposure in the filling compartment
                              </li>
                              <li>
                                Improve motor acceleration profile to bring the
                                stroke volume closer to 70ml and heart rate to
                                60 BPM, better matching physiological conditions
                              </li>
                              <li>
                                Conduct trials with bioprosthetic heart valves
                                to assess thrombogenicity and ensure that clot
                                formation is specifically related to the
                                mechanical heart valve rather than the loop
                                itself
                              </li>
                              <li>
                                Integration of additional sensing modalities for
                                real-time monitoring of clot formation
                              </li>
                              <li>
                                Development of computational fluid dynamics
                                models calibrated with experimental data from
                                the improved system
                              </li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed mt-4">
                              These targeted improvements will enhance the TGT
                              system's accuracy and reliability, making it an
                              even more valuable research tool for investigating
                              thrombogenic mechanisms in cardiovascular devices
                              and potentially contributing to safer heart valve
                              designs.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

          {/* Image Lightbox */}
          {selectedImage && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
              onClick={() => setSelectedImage(null)}
            >
              <div className="max-w-6xl w-full mx-auto p-4 relative">
                <button
                  className="absolute top-4 right-4 text-white bg-gray-800 rounded-full p-2 hover:bg-gray-700"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(null);
                  }}
                >
                  <X size={24} />
                </button>
                <img
                  src={selectedImage}
                  alt="Enlarged view"
                  className="max-h-[85vh] max-w-full mx-auto object-contain"
                />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PulsatileFlow;
