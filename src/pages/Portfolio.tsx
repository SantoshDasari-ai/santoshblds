import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import SEO from "../components/SEO";
import ErrorBoundary from "../components/ErrorBoundary";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 sm:pt-24 sm:pb-16">
      <SEO
        title="Medical Device Engineering Portfolio | Projects & Experience"
        description="Comprehensive portfolio showcasing medical device engineering projects including heart valve testing, surgical device design, FDA compliance work, and product development experience. View detailed case studies of biomedical engineering projects completed for medical device companies."
        keywords={[
          "Medical Device Portfolio",
          "Biomedical Engineering Projects",
          "Heart Valve Testing",
          "Surgical Device Design",
          "FDA Compliance Projects",
          "Medical Device Case Studies",
          "Product Development Portfolio",
          "Engineering Project Portfolio",
          "CAD Design Portfolio",
          "SolidWorks Projects",
          "Rapid Prototyping Projects",
          "Device Manufacturing Portfolio",
          "Thrombogenicity Testing",
          "ISO 10993 Projects",
          "Medical Device Internship Projects",
          "Silk Road Medical Projects",
          "Carl Zeiss Meditec Projects",
          "Bay Area Engineer Portfolio",
        ]}
        type="portfolio"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ErrorBoundary>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Featured Projects
              </h1>
              <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl">
                Explore my portfolio of innovative projects in biomedical
                engineering, product design, and robotics.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </ErrorBoundary>
      </div>
    </div>
  );
}
