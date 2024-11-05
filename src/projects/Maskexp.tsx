import React from "react";
import banner from "./maskexp/banner.png";

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

export default function MaskExp() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold">
              Masked Expressiveness
            </h1>
            <span
              className="text-4xl md:text-3xl tracking-tight"
              style={{ color: "black" }}
            >
              Conditioned Generation of Piano Key Striking Velocity Through
              Masked Language Modeling
            </span>

            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg text-blue-600">
                <a href="#" className="hover:underline">
                  Linzan Ye
                </a>
              </p>

              <p className="text-lg" style={{ color: "black" }}>
                University of Rochester
              </p>
              <p className="text-lg font-medium">
                <a href="http://icamcce.org/">AMCCE</a> 2024
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                    clipRule="evenodd"
                  />
                </svg>
                Paper
              </Button>
              <a
                href="https://github.com/Bmoist/MaskedExpressiveness"
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
          <div className="border rounded-lg overflow-hidden">
            <img
              src={banner}
              alt="Project banner"
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold">Abstract</h2>
            <p className="text-gray-600">
              Creating and listening to expressive renderings of composed
              musical pieces are two fundamental ways of how we express and
              experience music. Many studies delved into building computational
              models of musical expressiveness for a better understanding of its
              nature as well as possible downstream applications. This paper
              seeks to model expressiveness through a novel approach that is
              similar to the way pianists plan and execute their expressive
              intentions: conditionally generating the piano key striking
              velocity, a key parameter contributing to expressiveness, through
              masked language modeling with vanilla BERT. The result reveals
              that the model is capable of predicting velocity events
              conditioned on the surrounding context within an acceptable margin
              of error, as well as generating more musically convincing velocity
              events on unseen MIDIs though sequential masking and prediction.
              Such an approach can be useful for a series of tasks, including
              helping us build more advanced piano conducting or accompaniment
              systems and understand expressiveness through the conditioned
              generation.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
