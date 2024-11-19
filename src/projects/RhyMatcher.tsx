import React from "react";
import rhymatcher from "./rhymatcher/rhymatcher.jpg";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...props
}) => (
  <button
    {...props}
    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 flex items-center gap-2"
  >
    {children}
  </button>
);

export default function RhyMatcher() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              Rhythmic Matcher
            </h1>
            <span
              className="text-4xl md:text-3xl tracking-tight pb-5"
              style={{ color: "black" }}
            >
              ...is an <i>intuitive transcriber</i>...
              <br /> (in progress)
            </span>

            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg ">
                by{" "}
                <a
                  href="https://github.com/lynnzYe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-blue-600"
                >
                  Linzan Ye
                </a>
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/lynnzYe/RhythmicMatch"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Code
                </Button>
              </a>
            </div>
          </div>
          {/* Banner Image */}
          <div className="flex justify-center items-center rounded-lg">
            <img
              src={rhymatcher}
              alt="Project banner"
              className=" h-[300px] object-cover"
            />
          </div>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">
              Matching touch signals to a musical score
            </h2>
            <p className="text-gray-600">
              I once thought this rhythmic matcher was unnecessary--until I
              struggled with adding musical scores to my Piano Conductor system,
              and I realized that this highlighted a common challenge in music
              creation: capturing and sharing abstract music ideas. <br />
              <br />
              Many of us may be familiar with a song's melody or rhythm, but
              writing it down usually requires the use of abstract symbols (like
              key/time signatures, quarter notes, etc.). This process can be
              slow and unintuitive, compared to how naturally these rhythms and
              melodies feel when we think of them or hum along. <br />
              <br />
              ..wait, there's a natural way to feel or show them? You got it.
              That's the idea behind this project, but here instead of singing
              it out, we tap it out. This project aligns tap signals to elements
              in a musical score. <br />
              <br />
              Offline alignment are usually more accurate than online tracking.{" "}
              <br />
              <br />
              But there are also benefits doing online tracking! Take a guess if
              you wish.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
