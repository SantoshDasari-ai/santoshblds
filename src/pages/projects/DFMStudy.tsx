import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

const DFMStudy: React.FC = () => {
  const projectData = projects.find((p) => p.id === "dfm-study");

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
          <p className="mb-4">
            This study is part of another larger class project at SJSU:{" "}
            <Link
              to="/projects/surgical-drapes"
              className="text-blue-600 hover:text-blue-800"
            >
              Surgical Robot Drapes
            </Link>
          </p>
          <p className="mb-4">
            This project involved conducting a comprehensive Design for
            Manufacturing (DFM) study for an injection-molded component. The
            study focused on analyzing and optimizing the part design to ensure
            manufacturability, reduce costs, and maintain product quality.
          </p>
          <p className="mb-4">
            Key aspects of the study included material selection, wall thickness
            analysis, draft angle considerations, and design recommendations to
            prevent common injection molding defects such as sink marks, weld
            lines, warpage, shrinkage, and other defects.
          </p>
          <p className="mb-4">
            We also have conducted plastic flow analysis to predicts how plastic
            material will flow within a mold cavity during the injection molding
            process.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Initial Design</h2>
            <div className="sketchfab-embed-wrapper">
              <iframe
                title="Bottom Tool Site V1"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                className="w-full h-[400px]"
                src="https://sketchfab.com/models/20ba8949b9a24f67bc0203793fb0c409/embed"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Click play and use mouse to rotate and zoom.
            </p>
          </section>

          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Design Description</h2>
            <p className="mb-4">
              This part snaps into the larger robot arm to hold the drapes
              together.
            </p>

            <h3 className="text-xl font-semibold mb-2">Design Properties</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Overall Dimensions: 20 x 35 x 35 (mm)</li>
              <li>Material: Generic ABS</li>
              <li>Wall thickness: 0.80 mm</li>
              <li>Draft angle: 3 deg</li>
              <li>Minimal undercuts</li>
              <li>Even curvature</li>
              <li>Plastic snap fits</li>
            </ul>
          </section>
        </div>

        <section className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">DFM Analysis</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="dfm-image">
              <img
                src="/assets/projects/dfm-study/dfm-analysis.png"
                alt="DFM Analysis Results"
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2">
                Figure 1: DFM Analysis Results showing critical areas
              </p>
            </div>

            <div className="dfm-findings">
              <h3 className="text-xl font-semibold mb-4">Key Findings</h3>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Finding 1: [Insert key finding about wall thickness]</li>
                <li>Finding 2: [Insert key finding about draft angles]</li>
                <li>Finding 3: [Insert key finding about material flow]</li>
                <li>Finding 4: [Insert key finding about potential defects]</li>
                <li>
                  Finding 5: [Insert key finding about improvements needed]
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4">
                Analysis Explanation
              </h3>
              <p className="mb-6">
                [Insert detailed explanation of the DFM analysis results and
                their implications for manufacturability]
              </p>

              <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Recommendation 1: [Insert specific design improvement]</li>
                <li>Recommendation 2: [Insert specific process parameter]</li>
                <li>
                  Recommendation 3: [Insert specific material consideration]
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DFMStudy;
