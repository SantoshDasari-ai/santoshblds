import { motion } from "framer-motion";
import { Download } from "lucide-react";
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Resume() {
  const skillCategories = {
    Design: [
      "SolidWorks",
      "PDM/PLM",
      "2D Drawings",
      "GD&T",
      "Tolerance Stack-up",
    ],
    "Simulation & Analysis": ["SolidWorks FEA", "COMSOL", "Minitab", "Excel"],
    Manufacturing: [
      "Machine Shop (Lathe, Mill)",
      "3D Printing",
      "Laser Cutting",
      "Water Jet",
      "Rapid Prototyping",
    ],
    "Electronics & Software": [
      "Soldering",
      "Wiring",
      "Arduino",
      "ESP32",
      "LabVIEW",
      "Python",
      "MATLAB",
      "C++",
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <SEO
        title="Resume"
        description="Santosh Dasari's professional resume - Biomedical Engineer with expertise in CAD, DFMA, and product development."
        keywords={[
          "Resume",
          "CV",
          "Biomedical Engineer",
          "CAD",
          "DFMA",
          "Product Development",
        ]}
      />

      <div className="max-w-5xl mx-auto">
        <ErrorBoundary>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white shadow-lg rounded-lg p-8"
          >
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900">Resume</h1>
              <a
                href="/assets/resume/Dasari.pdf"
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
                <p className="text-gray-600">B.S. Biomedical Engineering</p>
                <p className="text-gray-600">May 2025 | San Jose, CA</p>
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
                    ATONOMIC • Oct 2023 - Dec 2023 • Remote
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>
                      Translated business requirements into technical
                      specifications by developing product requirements and
                      system design documentation for a remote-controlled
                      factory vehicle
                    </li>
                    <li>
                      Created job descriptions and recruitment guidelines to
                      enable the non-technical founder to hire high-value
                      engineering staff
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
                      Created detailed & repeatable cleaning process for
                      laser-cut Nitinol implants, meeting assembly and
                      sterilization particulate specification
                    </li>
                    <li>
                      CAD designed and manufactured a fixture for securing
                      implants during cleaning, with press-fit tolerances and
                      mill/lathe DFM
                    </li>
                    <li>
                      Reduced process time by 15% through running a process
                      experiment and writing a particulate quantification
                      standard
                    </li>
                    <li>
                      Aligned efforts among vendors, suppliers, and contract
                      manufacturers to ensure compatibility within final
                      assembly line
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
                      Performed two-stage FEA on an optometry device,
                      identifying 25G cantilever failure and leading design and
                      material changes that improved mechanical performance and
                      increased FoS
                    </li>
                    <li>
                      Analyzed failure patterns in returned optometry devices
                      subjected to freight loads, identifying stress
                      concentration zones and deflection in parts
                    </li>
                    <li>
                      Designed and built a custom test fixture for bench-top
                      load testing, achieving validation of FEA predictions and
                      ensuring design reliability
                    </li>
                    <li>
                      Supported dust ingress and shipping G-force testing to
                      assess product reliability across diverse commercial
                      environments
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Projects
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    In-Vitro Mechanical Heart Valve Thrombogenicity Tester
                  </h3>
                  <p className="text-gray-600">
                    Senior Project • Aug 2025 - Present • San Jose, CA
                  </p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    <li>
                      Designed and manufactured an electromechanical ISO 10993
                      compliant testing rig to replicate human heart flow
                      patterns in a closed loop system
                    </li>
                    <li>
                      Programmed Python and C++ to develop a precise motor
                      control algorithm and user interface for accurate flow
                      patterns and ease of use
                    </li>
                    <li>
                      Validated design with flow rate measurements against
                      physiological data
                    </li>
                    <li>
                      Coordinated stakeholder feedback to identify shortcomings
                      in previous design, aiming to reduce setup time by 50% via
                      DFA
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
                      Directed cross-functional teams to develop a Mars rover
                      robot, overseeing Mechanical, Controls, Electrical, and
                      Autonomy
                    </li>
                    <li>
                      Designed and manufactured a field-deployable Raman
                      spectroscopy system for real-time geological mineral
                      detection
                    </li>
                    <li>
                      Oversaw mechanical design reviews for clearance,
                      electrical/controls compatibility, mechanical performance,
                      and user needs
                    </li>
                    <li>
                      Supported overall robot development by performing
                      soldering, wiring, mechanical assembly, system testing,
                      and validation
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Technical Skills
              </h2>
              {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">
                    {category}
                  </h3>
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

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Certifications
              </h2>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Certified SolidWorks Associate (CSWA)
                  </h3>
                  <p className="text-gray-600">Certificate ID: C-6K7JVCXN2D</p>
                </div>
                <div className="border-l-4 border-blue-600 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    GD&T Fundamentals Based on ASME Y14.5 – 2018
                  </h3>
                </div>
              </div>
            </section>
          </motion.div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
