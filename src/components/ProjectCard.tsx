import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Limit the number of visible technology tags
  const maxVisibleTags = 4;
  const visibleTechnologies = project.technologies.slice(0, maxVisibleTags);
  const remainingCount = project.technologies.length - maxVisibleTags;

  const cardContent = (
    <ErrorBoundary>
      <motion.div
        className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white flex flex-col hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative overflow-hidden aspect-square">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.5 }}
          />

          {project.demoUrl && (
            <motion.div
              className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
            >
              <Link
                to={project.demoUrl}
                className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                aria-label="View demo"
              >
                <ExternalLink size={20} />
              </Link>
            </motion.div>
          )}
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1 mb-3">
            {visibleTechnologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
              >
                {tech}
              </span>
            ))}
            {remainingCount > 0 && (
              <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded-md font-medium">
                +{remainingCount} more
              </span>
            )}
          </div>

          <div className="mt-auto">
            {project.demoUrl ? (
              <Link
                to={project.demoUrl}
                className="inline-flex items-center text-primary hover:text-primary-600 font-medium text-sm transition-colors"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </Link>
            ) : project.path ? (
              <Link
                to={project.path}
                className="inline-flex items-center text-primary hover:text-primary-600 font-medium text-sm transition-colors"
              >
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            ) : (
              <span className="text-gray-400 text-sm">Coming Soon</span>
            )}
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        />
      </motion.div>
    </ErrorBoundary>
  );

  const linkUrl = project.demoUrl || project.path;
  return linkUrl ? (
    <Link
      to={linkUrl}
      className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
    >
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
};

export default ProjectCard;
