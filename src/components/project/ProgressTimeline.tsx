import React from "react";
import { ProgressStep } from "../../types/project";

interface ProgressTimelineProps {
  steps: ProgressStep[];
  title?: string;
}

export const ProgressTimeline: React.FC<ProgressTimelineProps> = ({
  steps,
  title = "Project Progress",
}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">{title}</h2>
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step.label} className="flex flex-col items-center flex-1">
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
            {index < steps.length - 1 && (
              <div
                className={`h-1 w-full mt-4 
                ${
                  step.status === "completed" ? "bg-green-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
