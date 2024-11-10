import banner from "./et/et.png";
import et from "./et/et.m4a";

export default function EtVisitor() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Title Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold pb-3">
              Extraterrestrial Visitor
            </h1>

            {/* Authors */}
            <div className="space-y-2">
              <p className="text-lg text-blue-600">
                <a
                  href="https://github.com/bmoist"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Lynn Ye<sup>*</sup>
                </a>
                <a
                  href="https://github.com/zztitin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  , Tinke Zhang<sup>*</sup>
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <sup>*</sup>Indicates Equal Contribution
              </p>
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
          <audio controls src={et} className="w-full">
            Your browser does not support the audio element.
          </audio>

          {/* Abstract Section - Placeholder */}
          <section className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold pb-1">Rationale</h2>
            <p className="text-gray-600">
              In this project, we experimented with microtonal algorithmic
              composition using {"  "}
              <a
                style={{ color: "blue" }}
                href="https://sourceforge.net/projects/nyquist/"
              >
                Nyquist
              </a>
              . Inspired by the occasional tonal interval produced by two
              ascending and descending frequency sound waves, we wrote
              algorithms to search for these "tonal" moments.
              <br />
              <br />
              In the first half of the spectrogram, two bright lines can be
              observed ascending or descending. When the frequencies of these
              lines form a tonal interval, they are held steady briefly before
              continuing to ascend or descend, resulting in the zigzag-like
              patterns. In this way, we expect that the music will sound like
              gradually alternating between tonal and microtonal intervals. To
              strengthen the consonant feelings during those intervals, we added
              additional frequences that form harmonies together. The latter
              half of the piece is treated similarly, except that the two lines
              cross each other in the middle, and different instrumentations are
              used.
              <br />
              <br />
              The serene middle section contrasts with the chaotic,
              movement-filled section before it. This part is created using a
              different algorithm. It takes in two parameters: a list of pitches
              and the degree of semitone shift. After generating all the chords
              in this section through this algorithm, the chords are connected
              through smooth frequency transitions. This section explores how
              minor semitone shifts affect tradition tonal harmonies. For
              example, it can create a progression similar to "I - ii+++ - ii++
              - ii+ - ii - V - I" (at 1:06), inspired by{" "}
              <a
                style={{ color: "blue" }}
                href="https://www.youtube.com/watch?v=l9wINwlgxRU&t=55s&ab_channel=Sevish&start=55"
              >
                Sevish's Gleam
              </a>
              .
              <br />
              <br />
              As a symbol for the magical quality of this microtonal
              composition, we incorporated the famous <i>
                Hedwig's theme
              </i> from <i>Harry Potter</i> film series. This theme serves as
              the introduction, a recurring motif, and the coda, creating a
              symmetrical structure throughout the piece. This symmetry reflects
              the ordered nature of this algorithmic composition, providing a
              sense of balance amidst its complexities.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
