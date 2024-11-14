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

interface DemoProps {
  imageSrc: string;
  audioSrc: string;
  title: string;
  brief: React.ReactNode;
}

const Demo: React.FC<DemoProps> = ({ imageSrc, audioSrc, title, brief }) => {
  return (
    <div className="flex flex-col items-center">
      <p>{title}</p>
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <audio controls src={audioSrc} className="w-full">
        Your browser does not support the audio element.
      </audio>
      <br></br>
      <p className="text-sm font-semibold mb-2">{brief}</p>
      <br />
    </div>
  );
};

const demo1: DemoProps[] = [
  {
    imageSrc: "",
    audioSrc: "",
    title: "Lorem Ipsum",
    brief: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    imageSrc: "",
    audioSrc: "",
    title: "Lorem Ipsum",
    brief: "Lorem Ipsum Lorem Ipsum Lorem Ipsum",
  },
  {
    imageSrc: "",
    audioSrc: "",
    title: "Lorem Ipsum",
    brief: "Lorem Ipsum Lorem IpsumLorem Ipsum",
  },
];

export default function Template() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">Title title</h1>
            <span
              className="text-4xl md:text-3xl tracking-tight"
              style={{ color: "black" }}
            >
              Lorem Ipsum
            </span>

            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg text-blue-600">
                <a href="#" className="hover:underline">
                  First Author
                </a>
                <sup>*</sup>,{" "}
                <a href="#" className="hover:underline">
                  Second Author
                </a>
                <sup>*</sup>,{" "}
                <a href="#" className="hover:underline">
                  Third Author
                </a>
              </p>
              <p className="text-lg" style={{ color: "black" }}>
                University of Rochester
              </p>
              <p className="text-lg font-medium">
                <a href="http://icamcce.org/">AMCCE</a> 2024
              </p>
              <p className="text-sm text-gray-500">
                <sup>*</sup>Indicates Equal Contribution
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button disabled={true}>
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
                Paper coming soon
              </Button>
              <a
                href="https://github.com/lynnzYe/MaskedExpressiveness"
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
            <h2 className="text-2xl font-bold pb-1">Abstract</h2>
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
          {/* Method Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-3">Method</h2>
            <h3 className="text-1xl font-bold pb-1">Model Architecture</h3>
            <img src="" alt="Method" className="w-full h-full object-cover" />
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </section>
          {/* Metric */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-3">Metrics</h2>
            <img src="" alt="Metrics" className="object-cover p-4" />
            <p>Please refer to the paper for more details.</p>
          </section>
          {/* Demo Section */}
          <h2 className="text-2xl font-bold mb-4">Demo</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section>
            <h3 className="text-2lg font-bold mb-4">
              Generation Without Velocity Information: Rachnmaninoff -
              Variations on a Theme of Chopin - Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demo1.map((demo, index) => (
                <div key={index} className="min-w-[300px]">
                  <Demo {...demo} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
