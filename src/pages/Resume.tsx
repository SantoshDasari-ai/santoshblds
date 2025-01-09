import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  const skillCategories = {
    "CAD & Design": [
      "SOLIDWORKS (CSWA)",
      "GD&T (ASME Y14.5 Certificate)",
      "On-shape",
      "PDM",
      "2D Drawings",
      "DFMA"
    ],
    "Simulation and Analysis": [
      "SolidWorks FEA",
      "COMSOL",
      "Minitab",
      "Excel"
    ],
    "Manufacturing": [
      "Machine Shop Training (Lathe, Mill)",
      "3D Printing",
      "Laser Cutting",
      "Water Jet",
      "Rapid Prototyping"
    ],
    "Electronics & Software": [
      "Soldering",
      "Wiring",
      "Microcontrollers",
      "Arduino",
      "LabVIEW",
      "Python",
      "MATLAB",
      "HTML",
      "C++"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-lg rounded-lg p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
            <a
              href="/assets/resume/Santosh Resume Master 2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </a>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Education
            </h2>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-semibold text-gray-900">
                San Jose State University
              </h3>
              <p className="text-gray-600">B.S. Bio-medical Engineering</p>
              <p className="text-gray-600">
                Graduating in May 2025 | San Jose, CA
              </p>
              <div className="mt-2">
                <h4 className="font-medium text-gray-800">Relevant Courses:</h4>
                <p className="text-gray-700">
                  Statics & Biomechanics of Solids and Visco-elastic Materials, CAD Design, Mechanics of Materials,
                  Engineering Probability & Statistics, Fluid Dynamics, Med Device Product Development, FDA Regulation,
                  Python for Hardware, Med Device Manufacturing, Biomedical Polymers, Design of Society
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Experience
            </h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  System Design Contractor
                </h3>
                <p className="text-gray-600">
                  Stealth Factory Automation Start-up • Oct 2023 - Dec 2023 • Fremont, CA
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Developed product requirements and system design for a remote-controlled factory vehicle to meet customer needs and demonstrated its value to investors
                  </li>
                  <li>
                    Created job descriptions and recruitment guidelines to enable non-technical founder to hire high value engineering staff
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  R&D Intern
                </h3>
                <p className="text-gray-600">
                  Silk Road Medical • May 2022 - Aug 2022 • Sunnyvale, CA
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Reduced process time by 15% through running a process experiment and writing a particulate qualification standard
                  </li>
                  <li>
                    Created detailed & repeatable cleaning process for laser-cut NITINOL tubing, meeting assembly and sterilization particulate spec
                  </li>
                  <li>
                    CAD designed and manufactured a fixture for securing implants during cleaning, with press-fit tolerance and mill/lathe DFM
                  </li>
                  <li>
                    Aligned efforts among vendors, suppliers, and internal teams to improve compatibility within final assembly line
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Mechanical Engineering Intern
                </h3>
                <p className="text-gray-600">
                  Carl Zeiss Meditec • May 2021 - Aug 2021 • Dublin, CA
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Assessed cantilever failure in an optometry device under 25G freight loads, implemented design changes to redistribute stress, and switched to a high-strength steel alloy, increasing FoS by 25%
                  </li>
                  <li>
                    Analyzed failure patterns in returned optometry devices subjected to freight loads, identifying stress concentration zones and deflection paths
                  </li>
                  <li>
                    Conducted a two-stage assembly-level FEA informed by failure analysis to pinpoint stress concentration regions further, providing critical insights into part failure
                  </li>
                  <li>
                    Designed and built a custom test fixture for bench-top load testing, achieving validation of FEA predictions and ensuring design reliability
                  </li>
                  <li>
                    Supported unit ingress and G-force testing, confirming product robustness under diverse operational environments
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  In-Vitro Pulsatile Blood Flow Thrombogenicity Tester
                </h3>
                <p className="text-gray-600">
                  Capstone Project (Team Lead) • Aug 2024 - Present • San Jose, CA
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Redesigned an electromechanical and biocompatible testing rig to replicate human heart flow patterns in a closed blood loop
                  </li>
                  <li>
                    Coordinated stakeholder feedback to identify shortcomings in previous design, aiming to reduce setup time by 50% via DFA optimization
                  </li>
                  <li>
                    Used Python and C++ to develop a precise motor control algorithm and user interface for accurate flow patterns and ease of use
                  </li>
                  <li>
                    Collected and analyzed flow rate data against physiological data using statistical tests to validate tester efficacy
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  President and Mechanical Subsystem Lead
                </h3>
                <p className="text-gray-600">
                  SJSU Robotics • March 2021 - May 2023 • San Jose, CA
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Directed cross-functional teams to develop a Mars rover robot, overseeing Mechanical, Controls, Electrical, Biology/Geology, and Autonomy
                  </li>
                  <li>
                    Designed and manufactured a field-deployable Raman spectroscopy system for real-time geological mineral detection
                  </li>
                  <li>
                    Oversaw mechanical design reviews for clearance, electrical controls compatibility, mechanical performance, and user needs
                  </li>
                  <li>
                    Supported overall robot development by performing soldering, wiring, mechanical assembly, system testing, and validation
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Skills
            </h2>
            {Object.entries(skillCategories).map(([category, skills]) => (
              <div key={category} className="mb-4">
                <h3 className="text-lg font-medium text-gray-800 mb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </section>
        </motion.div>
      </div>
    </div>
  );
}
