import { useState } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import ErrorBoundary from "./ErrorBoundary";
import { Project } from "../types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const cardContent = (
    <ErrorBoundary>
      <div
        className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full bg-white dark:bg-gray-800 flex flex-col hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-[4/3]">
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10 opacity-60 transition-opacity duration-300 ${
              isHovered ? "opacity-80" : ""
            }`}
          ></div>
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-full object-cover transition-transform duration-500 ${
              isHovered ? "scale-110" : "scale-100"
            }`}
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 3).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-medium bg-primary/80 text-white rounded-full"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-2 py-1 text-xs font-medium bg-gray-700/80 text-white rounded-full">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="p-5 flex flex-col flex-grow">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="mt-auto">
            {project.demoUrl ? (
              <Link
                to={project.demoUrl}
                className="inline-flex items-center text-primary hover:text-primary-600 font-medium text-sm"
              >
                View Project <ExternalLink size={16} className="ml-1" />
              </Link>
            ) : (
              <Link
                to={project.path || "#"}
                className="inline-flex items-center text-primary hover:text-primary-600 font-medium text-sm"
              >
                View Details <ExternalLink size={16} className="ml-1" />
              </Link>
            )}
          </div>
        </div>

        <div
          className={`absolute inset-0 bg-primary/5 dark:bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
        ></div>
      </div>
    </ErrorBoundary>
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

  if (project.path) {
    return (
      <Link
        to={project.path}
        className="block h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-xl"
        aria-label={`View ${project.title} project details`}
      >
        {cardContent}
      </Link>
    );
  }

  return <div className="block h-full">{cardContent}</div>;
}
