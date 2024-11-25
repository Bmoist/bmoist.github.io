import React from "react";
import { Link } from "react-router-dom";

export const UnderDevelopment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      <div className="max-w-md text-center space-y-6">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-2">Linzan Ye</h1>

        {/* Notice */}
        <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            📱 Mobile Version in Development
          </h2>
          <p className="text-gray-600">
            The mobile version is currently being optimized for the best
            experience. Please visit on a desktop device for the full
            experience.
          </p>

          {/* Quick Links */}
          <div className="pt-4 space-y-3">
            <p className="text-sm text-gray-500">Quick Links:</p>
            <div className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                About
              </Link>
              <Link
                to="/projects"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Projects
              </Link>
              <Link
                to="/music"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Music
              </Link>
              <a
                href="mailto:kurono_s@outlook.com"
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-6 text-gray-600">
          <i>"Music as moments of transcendence"</i>
        </div>
      </div>
    </div>
  );
};
