import React from "react";
import banner from "./maskexp/banner.png";
import method from "./maskexp/method.png";
import raw from "./maskexp/raw.png";
import contextual from "./maskexp/contextual.png";

import metrics from "./maskexp/metrics.png";

import og from "./maskexp/og.png";
import og_wav from "./maskexp/og.m4a";
import rawRaw from "./maskexp/raw_raw.png";
import rawRaw_wav from "./maskexp/raw_raw.m4a";
import craw from "./maskexp/ctx_raw.png"; // Contextual prediction mode - raw
import craw_wav from "./maskexp/ctx_raw.m4a";

import chint from "./maskexp/ctx_hint.png";
import chint_wav from "./maskexp/ctx_hint.m4a";

import bmog from "./maskexp/bm_og.png";
import bmcraw from "./maskexp/bm_ctxraw.png";
import bmcctx from "./maskexp/bm_ctxctx.png";
import bmog_wav from "./maskexp/bmog.m4a";
import bmcraw_wav from "./maskexp/bmcraw.m4a";
import bmcctx_wav from "./maskexp/bmcctx.m4a";

import schu_gt from "./maskexp/schu_gt.png";
import schu_gt_wav from "./maskexp/schu_gt.m4a";
import schu_aligned from "./maskexp/schu_aligned.png";
import schu_aligned_wav from "./maskexp/schu_aligned.m4a";
import schu_pred from "./maskexp/schu_pred.png";
import schu_pred_wav from "./maskexp/schu_pred.m4a";

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
    imageSrc: og,
    audioSrc: og_wav,
    title: "Ground Truth",
    brief:
      "This audio file is synthesized from a MIDI conversion of Vladimir Ashkenazy's performance using Logic Pro's Steinway Grand Piano. The MIDI file is obtained from the ATEPP dataset. The velocity information will be either completely removed or partially masked for model prediction.",
  },
  {
    imageSrc: rawRaw,
    audioSrc: rawRaw_wav,
    title: "Naive generation strategy",
    brief:
      "In this case, the model predicts the key striking velocity using timing and pitch information only. Due to disconnections between chunks and the lack of multi-trial predictions, the generated MIDI performance lacks musical coherance. Several sudden loud notes interrupt the flow.",
  },
  {
    imageSrc: craw,
    audioSrc: craw_wav,
    title: "Multi-trial prediction w/ overlapping",
    brief:
      "By using only the timing and pitch information, this mode of prediction demonstrates much more dynamic coherence compared to the previous example, even just by observing the distribution of color in the two pictures. ",
  },
];

const demo2: DemoProps[] = [
  {
    imageSrc: og,
    audioSrc: og_wav,
    title: "Ground Truth",
    brief: "This is the same as the previous ground truth example.",
  },
  {
    imageSrc: craw,
    audioSrc: craw_wav,
    title: "Prediction without hints",
    brief:
      "This is the same as the previous 'multi-trial prediction w/ overlapping' example. This example mirrors the use of several common piano performance strategies, such as voicing the top melody line and tone color change. However, there are occasional sudden loud notes, and the performance does not strictly follow the dynamic markings in the score due to lack of further information.",
  },
  {
    imageSrc: chint,
    audioSrc: chint_wav,
    title: "Prediction with hints (90% masked)",
    brief:
      "Compared to the previous generation, this performance follows the ground truth dynamic significantly better with only ~10% randomly hinted velocity information (15/198 velocity tokens), while also demonstrating the application of common piano performance strategies. However, there are still occasional out-of-context velocity choices.",
  },
];

const demo3: DemoProps[] = [
  {
    imageSrc: bmog,
    audioSrc: bmog_wav,
    title: "Ground Truth",
    brief:
      "This performance is by András Schiff from the ATEPP dataset. This piece is chosen to demonstrate the model's capability for rendering countrapuntal Baroque compositions. There are occasional transcription errors in the MIDI file.",
  },
  {
    imageSrc: bmcraw,
    audioSrc: bmcraw_wav,
    title: "Prediction without hints",
    brief:
      "Although the generated performance constantly voices the top main melody line, the left hand part largely remains unobtrusive. There are also signs of common piano performance strategies, such as the diminuendo at the final cadence.",
  },
  {
    imageSrc: bmcctx,
    audioSrc: bmcctx_wav,
    title: "Prediction with hints (90% masked)",
    brief:
      "Despite the 10% velocity hint, the performance does not consistently emphasize important motifs or keep the balance between voices. However, the model seems to be picking up voicing patterns in the original performance. For example, starting from 0:56, the echoes and responses between left and right are illustrated through similar voicings and dynamics. This is not observed in the previous example. Other examples include: 0:02 (GF#G), 0:36 (AG#A) 1:19 (EC#A#B)",
  },
];

const demo4: DemoProps[] = [
  {
    imageSrc: schu_gt,
    audioSrc: schu_gt_wav,
    title: "Ground Truth",
    brief: (
      <>
        This is a performance excerpt from Schubert's Impromptu in Gb Major
        created by the author. The MIDI file contains only the main melody line.
        The model is then expected to reconstruct the full expressive
        performance with the help of an{" "}
        <a
          href="https://midialignment.github.io/demo.html"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#7e83f8" }}
        >
          offline symbolic music alignment tool
        </a>
        .
      </>
    ),
  },
  {
    imageSrc: schu_aligned,
    audioSrc: schu_aligned_wav,
    title: "Aligned Performance",
    brief:
      "By extending the alignment algorithm, one can create an aligned MIDI performance, where all missing notes are filled up with dummy velocity choices. It is worth noting that the onsets of the aligned MIDI events are calculated using simple linear interpolation, which is not the optimal strategy.",
  },
  {
    imageSrc: schu_pred,
    audioSrc: schu_pred_wav,
    title: "Predicted Performance",
    brief:
      "With the aligned performance, the model replaces the dummy velocity tokens to create a fully expressive rendition. Despite occasional inconsistencies, signs of common performance strategies can be found, such as balancing between the melody and 'filling passages', emphasizing bass line, and adding crescendos and diminuendos according to the melody line. ",
  },
];

export default function MaskExp() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
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
            <img
              src={method}
              alt="Method"
              className="w-full h-full object-cover"
            />
            <p className="text-gray-600">
              The project uses a vanilla BERT model for masked language
              modeling. Although the primary task is to predict velocity tokens,
              masking all types of tokens prevents significant mode collapse.
            </p>
            <br />
            <h3 className="text-1xl font-bold pb-1">Generation</h3>
            <p className="text-gray-600">
              To generate a complete expressive performance, the model needs to
              be adapted due to the limited input size. A naïve approach
              involves breaking an input sequence into non-overlapping chunks
              and ask the model to replace velocity mask tokens with predicted
              tokens.
            </p>
            <img
              src={raw}
              alt="Raw"
              className="w-full h-full object-cover p-3"
            />
            <p className="text-gray-600">
              However, because the information from other chunks is not
              available, nor does the surrounding velocity information (they get
              predicted all at once), the model can hardly reconstruct a
              musically coherent performances. A solution to this is by
              "multi-trial prediction with overlapping chunks", meaning that the
              input sequence is divided into overlapping segments, and the model
              only replaces a small proportion of the velocity mask tokens at a
              time. After multiple rounds of predictions, all velocity mask
              tokens will be eventually replaced.
            </p>
            <img
              src={contextual}
              alt="Contextual"
              className="w-full h-full object-cover p-3"
            />
            <p className="text-gray-600">
              The demo section below provides an example to illustrate the
              difference between the two modes of generation.
            </p>
          </section>
          {/* Metric */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-3">Metrics</h2>
            <img src={metrics} alt="Metrics" className="object-cover p-4" />
            <p>Please refer to the paper for more details.</p>
          </section>
          {/* Demo Section */}
          <h2 className="text-2xl font-bold mb-4">Demo</h2>
          <p className="text-gray-600">
            The demos below will contain a screenshot of the MIDI events (small
            colored rectangles) and a synthesized audio file using Logic Pro's
            Steinway Grand Piano sound. The color of the rectangles illustrates
            the intensity of key striking velocity for each MIDI event (brighter
            the harder).
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
            <p>
              [Notice]: Due to the poor performance using the naive generation
              strategy, the following demo will only contain pieces generated
              through multi-trial prediction with overlapping chunks.
            </p>
          </section>
          <section>
            <h3 className="text-2lg font-bold mb-4">
              Hinted Reconstruction: Rachnmaninoff - Variations on a Theme of
              Chopin - Theme
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demo2.map((demo, index) => (
                <div key={index} className="min-w-[300px]">
                  <Demo {...demo} />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-2lg font-bold mb-4">
              Hinted Reconstruction: Bach - French Suite No.3 - Allemande
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demo3.map((demo, index) => (
                <div key={index} className="min-w-[300px]">
                  <Demo {...demo} />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3 className="text-2xl font-bold mb-4">Interactive Demo</h3>
            <h3 className="text-2lg font-bold mb-4">
              Schubert Op.90 No.3 - Impromptu in Gb Major
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {demo4.map((demo, index) => (
                <div key={index} className="min-w-[300px]">
                  <Demo {...demo} />
                </div>
              ))}
            </div>
          </section>
          <p>
            For interested readers, the code for interactive demo is available
            in the{"  "}
            <a
              href="https://github.com/Bmoist/MaskedExpressiveness"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#7e83f8" }}
            >
              github repository
            </a>
            . <br />
            <br />
            Users are expected to provide a partial MIDI performance and the
            corresponding musical score (in xml format). If the score is too
            complex to be aligned, you may instead provide a MIDI version of the
            score, which usually results in more accurate alignment result given
            that the performed MIDI is an incomplete fraction of the score.
          </p>
        </div>
      </main>
    </div>
  );
}
