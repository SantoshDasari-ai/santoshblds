import React from "react";

const DebugApp: React.FC = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-6">Debug Page</h1>

      <p className="mb-4">
        This is a simplified debug page to troubleshoot the blank screen issue.
        If you can see this content, then the basic React setup is working.
      </p>

      <div className="grid grid-cols-1 gap-4 mb-8">
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-xl font-semibold mb-2">Standard Image Test</h2>
          <img
            src="/assets/optimized/logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain bg-gray-200 p-2 rounded"
          />
        </div>
      </div>

      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => alert("Button clicked!")}
      >
        Test Button
      </button>
    </div>
  );
};

export default DebugApp;
