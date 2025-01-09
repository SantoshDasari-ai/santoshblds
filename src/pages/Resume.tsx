import { motion } from "framer-motion";
import { Download } from "lucide-react";

export default function Resume() {
  const skills = [
    "SOLIDWORKS (CSWA)",
    "PDM",
    "On-shape",
    "COMSOL",
    "GD&T",
    "Machine Shop Training",
    "Lathe",
    "Mill",
    "3D Printing",
    "Laser Cutting",
    "Water Jet",
    "Soldering",
    "Wiring",
    "2D Drawings",
    "Microcontrollers",
    "FEA",
    "DFMA",
    "Project Management",
    "Process Development",
    "Python",
    "MATLAB",
    "Arduino",
    "LabVIEW",
    "HTML",
    "JavaScript",
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  Statics & Biomechanics of Solids and Visco-elastic Materials,
                  CAD Design, Mechanics of Materials, Engineering Probability &
                  Statistics, Fluid Dynamics, Mass Transport, Med Device Product
                  Development, FDA Regulations, Python for Hardware, Mass
                  Balance Manufacturing, Polymers, Design of Society
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
                  Stealth Factory Automation Start-up • Oct 2023 - Dec 2023
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Developed product requirements and system design to tailor
                    the MVP to customer needs
                  </li>
                  <li>
                    Created job descriptions and recruitment guidelines for
                    engineering staff
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  R&D Intern
                </h3>
                <p className="text-gray-600">
                  Silk Road Medical • May 2022 - Aug 2022
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Created process for characterizing particulate counts in
                    final assembly
                  </li>
                  <li>
                    Designed and manufactured fixtures for implant cleaning
                  </li>
                  <li>Reduced process time by 15% through experimentation</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  President and Mechanical Subsystem Lead
                </h3>
                <p className="text-gray-600">
                  SJSU Robotics • March 2021 - May 2023
                </p>
                <ul className="mt-2 list-disc list-inside text-gray-700">
                  <li>
                    Directed cross-functional teams in Mars rover development
                  </li>
                  <li>
                    Oversaw mechanical design process for robot components
                  </li>
                  <li>Managed fundraising and budget allocation</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Technical Skills
            </h2>
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
          </section>
        </motion.div>
      </div>
    </div>
  );
}
