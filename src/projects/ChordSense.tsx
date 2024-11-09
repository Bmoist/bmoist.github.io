import React from "react";
import banner from "./chordsense/banner.png";

import base from "./chordsense/base.png";
import strat from "./chordsense/strat.png";
import freq from "./chordsense/freq.png";
import demo from "./chordsense/demo.png";

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

export default function ChordSense() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">Chord Sense</h1>
            <span
              className="text-4xl md:text-3xl tracking-tight"
              style={{ color: "black" }}
            >
              Enhancing Stylistic Chord Progression Generation with Fine-tuned
              Transformers
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
                <a href="https://www.confcds.org/">CONF-CDS</a> 2024
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
              className="w-full object-cover"
            />
          </div>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-1">Abstract</h2>
            <p className="text-gray-600">
              Chord Progressions (CP) constitute a fundamental element within
              musical compositions. Skillful application of harmonies can
              captivate audiences through the colors and emotions they elicit.
              While existing research has predominantly focused on generating
              stylistically coherent CPs and accompaniments, relatively few
              studies have delved into the optimization of generating specific
              CPs of interest across diverse harmonic contexts. On this basis,
              this study aims to address this gap by fine-tuning a foundational
              CP model using datasets generated through three distinct
              strategies. Subsequently, the performances of the strategies are
              compared using both existing and novel evaluation metrics.
              According to the analysis, the results reveal that the model
              fine-tuned using the third strategy demonstrates proficiency in
              producing the target CPs across diverse contexts and modes of
              generation in a musically coherent manner. This approach opens up
              avenues for creative learning and sharing of stylistic chord
              progressions through exchanging customized fine-tuned chord
              models.
            </p>
          </section>
          {/* Method Section */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-3">Method</h2>
            <p className="text-gray-600 pb-6">
              This study uses the vanilla Generative Pre-trained
              Transformers(GPT), based on Karpathy's{" "}
              <a
                href="https://github.com/karpathy/nanoGPT"
                rel="noopener noreferrer"
                style={{ color: "#7e83f8" }}
              >
                nanoGPT
              </a>
              . The main purpose of this study is to compare three types of data
              augmentation strategies for fine-tuning decoder-only transformers
              for the task of Harte-style chord generation.
            </p>
            <h3 className="text-2lg font-bold pb-3">
              Data Augmentation Strategies
            </h3>
            <ol className="list-decimal pl-5">
              <li>
                <u>Raw sequence</u>: the given CP is transposed to 18 equivalent
                keys, serving as the baseline approach.
              </li>
              <li>
                <u>Increasing context</u>: Starting from the given CP of
                interest, sequences are created with progressively more chord
                symbols preceding the target CP (A, BA, CBA, …). These sequences
                are then transposed to 18 equivalent keys.
              </li>
              <li>
                <u>Generated context</u>: Leveraging another chord model trained
                on sequences of reversed chord symbols, the study generates the
                fine-tuning dataset by recursively sampling along possible
                generation paths to reach the given CP. The generated chord
                sequences are then transposed to 18 equivalent keys.
              </li>
            </ol>
          </section>
          {/* Metric */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-3">Metrics</h2>
            <img
              src={base}
              alt="Metrics - base"
              className="object-cover pb-4"
            />
            <img
              src={strat}
              alt="Metrics - strats"
              className="object-cover pb-7"
            />
            <p className="text-gray-600 pb-4">
              To evaluate how consistently the fine-tuned model guides user
              towards the target CP, the study designs a mode of prediction
              which simulates how users might interact with the model, named
              "joint generation ". <br />
              <br />
              In this mode, both the foundation model and the fine-tuned model
              will generate tokens simultaneously from an initial [eos] token.
              Kullback-Leibler (KL) divergence is calculated between the two
              output distributions. If the divergence exceeds a predefined
              threshold, the token generated by the fine-tuned model is
              selected. Otherwise, the token from the foundation model is
              appended to the token sequences as context for next-token
              prediction.
              <br />
              <br />
              In figure 4, CP 6, 7, and 8 together represents the target
              stylistic CP.
            </p>
            <img src={freq} alt="Metrics - freq" className="object-cover p-4" />
          </section>
          {/* Demo Section */}
          <h2 className="text-2xl font-bold mb-4">Demo</h2>
          <p className="text-gray-600">
            A text-based interactive demo is provided in the{" "}
            <a style={{ color: "#7e83f8" }}>github repository</a>. The following
            screenshot provides a glimpse of how it operates.
          </p>
          <img src={demo} alt="TUI demo" className="object-cover p-4" />
        </div>
      </main>
    </div>
  );
}
