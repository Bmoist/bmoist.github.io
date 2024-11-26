import React from "react";
import pico from "./pico/pico.webp";

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

export default function PiCo() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              Piano Conductor
            </h1>

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
                href="https://github.com/lynnzYe/PiCo"
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
              src={pico}
              alt="Project banner"
              className=" h-[300px] object-cover"
            />
          </div>
          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-1">Background</h2>
            <p className="text-gray-600">
              The ideas of "air instruments" (e.g. air guitar) and conducting
              systems are not new. Many projects have explored this idea, such
              as Guitar Hero, Piano Genie, Radio Baton, and others. I want to
              take this further and create an "air piano". I envision a future
              where the technical challenges of piano playing becomes less of a
              barrier for both amateurs and professionals to express their
              interpretations of musical compositions. Instead of having users
              to manipulate all the expressive parameters at once, which can be
              overwhelming, why not have AI infer the appropriate expressive
              parameters from the main contour that users provide?
            </p>
          </section>
          {/* Method Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-5">
              Proof-of-Concept Interactive Demo
            </h2>
            <h2 className="text-1xl font-bold pb-5">
              Demo - Let's perform with Horowitz!
            </h2>
            <div className="flex justify-center items-center rounded-lg pb-5">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  width: "100%",
                }}
              >
                <iframe
                  src="https://youtube.com/embed/Z_S5JFsfhEQ"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            </div>
            <blockquote className="text-gray-600 text-sm pb-5">
              - Opening excerpt from Schubert's Op. 90 No. 3
            </blockquote>
            <p className="text-gray-600 pb-10">
              In the above demo, the Conducting system loads a Horowitz's
              performance of Schubert's Gb Impromptu. The user is then expected
              to tap the main melody line while Horowitz "accompanies" you based
              on your performed tempo.
              <br />
              <br />
              <h3 className="text-1xl font-bold">Features</h3>
              <br />
              <ul className="list-decimal pl-5">
                <li className="pb-2">
                  <u>Play by Tapping</u>: You only need to control the timing
                  and MIDI velocity by tapping any keys on a MIDI keyboard -{" "}
                  <b>
                    {" "}
                    no need to worry about hitting wrong notes or learning a
                    notated score!
                  </b>
                </li>
                <li className="pb-2">
                  <u>Adaptive BPM/velocity Prediction</u>: The system can{" "}
                  <b>automatically adjust</b> the tempo and MIDI velocity
                  according to your performance, <b>in real-time</b>.
                </li>
                <li className="pb-2">
                  <u>Learning from Rehearsal Data</u>: You can use your{" "}
                  <b>past performance as a hint</b> for the system to more
                  accurately predict your tempo.
                </li>
              </ul>
              <br />
              <br />
            </p>
            <h2 className="text-1xl font-bold pb-5">
              Demo - Let's play a melody by tapping!
            </h2>
            <div className="flex justify-center items-center rounded-lg pb-5">
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  width: "100%",
                }}
              >
                <iframe
                  src="https://www.youtube.com/embed/yefvGfXLf6c"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            </div>
            <blockquote className="text-gray-600 text-sm pb-5">
              - Opening melody excerpt from Schubert's Op. 142 No. 3
            </blockquote>
            <p className="text-gray-600 pb-5">
              The code for interactive demo is provided in the github repo.
              Given a predetermined note sequence, the program synthesizes a
              performance based on the onset, offset, and velocity information
              provided by the user through a MIDI device. Users only need to
              know the rhythm, and then tap accordingly to produce the
              performance.
              <br />
              <br />
              The goal is to enable users to expressively perform a piece
              without spending hours learning it. Currently, the demo requires
              users to perform on MIDI keyboards, but designing
              pressure-sensitive desks or gloves to capture touch signals could
              eventually allow users to play anywhere, anytime, with reduced
              risk of accidentally triggering other notes during a performance.
            </p>
            <p className="text-gray-600">
              While the current demo only utilizes simple interpolations for
              velocity and timing decisions, it could be enhanced with an
              automatic expressive accompaniment system to create a full,
              expressive performance.
              <br />
              <br />
              One of my other projects,{" "}
              <a
                href="https://lynnzye.github.io/#/proj/maskexp"
                target="_blank"
                style={{ color: "#7e83f8" }}
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Masked Expressiveness
              </a>
              , worked on adding expressiveness based on user input signals.
              <br />
              <br />
              I envision creating the ultimate version of Piano Conductor,
              allowing users to artfully perform pieces like Chopin's Nocturnes
              with nuanced rubatos and voicings just by tapping, anywhere and
              anytime—and apply performance style transfers from friends or
              legendary pianists.
              <br />
              <br />
              With the fully realized Piano Conductor, users would have the
              freedom to focus deeply on shaping their musical interpretations
              and bringing them to life in real time, instead of bothering about
              the technical hurdles during performance.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
