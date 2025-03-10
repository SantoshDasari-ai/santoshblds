import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const cardContent = (
    <motion.div
      whileHover={{ y: -4 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 h-full"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col h-[calc(100%-aspect-[4/3])]">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {project.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 sm:px-3 py-1 bg-primary-50 dark:bg-gray-700 text-primary-700 dark:text-primary-300 rounded-full text-xs sm:text-sm font-medium transition-colors group-hover:bg-primary-100 dark:group-hover:bg-gray-600"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 sm:px-3 py-1 bg-gray-50 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-xs sm:text-sm font-medium">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  if (project.demoUrl) {
    return (
      <Link
        to={project.demoUrl}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
        aria-label={`View ${project.title} project`}
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="block h-full">{cardContent}</div>;
}
