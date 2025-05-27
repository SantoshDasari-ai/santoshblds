import React from "react";
import { Calendar, Users, Clock, ExternalLink } from "lucide-react";
import { ProjectMetadata } from "../../types/project";

interface ProjectHeaderProps {
  title: string;
  metadata: ProjectMetadata;
  iconSrc?: string;
  iconAlt?: string;
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
  title,
  metadata,
  iconSrc,
  iconAlt,
}) => {
  return (
    <div className="project-header">
      <div className="flex items-start justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {title}
          </h1>

          {/* Project Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="flex items-center text-gray-600">
              <Calendar size={18} className="mr-2" />
              <span>{metadata.timeline}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock size={18} className="mr-2" />
              <span>{metadata.status}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Users size={18} className="mr-2" />
              <span>{metadata.team.length} Team Members</span>
            </div>
            {metadata.location && (
              <div className="flex items-center text-gray-600">
                <ExternalLink size={18} className="mr-2" />
                <span>{metadata.location}</span>
              </div>
            )}
          </div>
        </div>
        {iconSrc && (
          <img
            src={iconSrc}
            alt={iconAlt || "Project Icon"}
            className="w-20 h-20 object-cover rounded-full shadow-md flex-shrink-0"
          />
        )}
      </div>
    </div>
  );
};
