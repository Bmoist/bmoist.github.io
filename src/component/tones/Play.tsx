import * as Tone from "tone";
import { CMScale } from "./Def";

const reverb = new Tone.Reverb({
  decay: 5, // The decay time of the reverb
  preDelay: 0.01, // Delay before the reverb starts
  wet: 1, // Wet signal (how much reverb you want)
}).toDestination();
const synth = new Tone.Synth().connect(reverb);

// const sampler = new Tone.Sampler({
//   urls: {
//     C4: "path/to/piano_samples/C4.mp3", // Make sure to replace with actual paths to piano samples
//     D4: "path/to/piano_samples/D4.mp3",
//     E4: "path/to/piano_samples/E4.mp3",
//     F4: "path/to/piano_samples/F4.mp3",
//     G4: "path/to/piano_samples/G4.mp3",
//     A4: "path/to/piano_samples/A4.mp3",
//     B4: "path/to/piano_samples/B4.mp3",
//     C5: "path/to/piano_samples/C5.mp3",
//   },
//   release: 1, // Time the note takes to fade out after release
// }).connect(reverb);

export const playRandomNote = () => {
  const randomNote = CMScale[Math.floor(Math.random() * CMScale.length)];

  const envelope = synth.envelope;
  envelope.attack = 0.01;
  envelope.decay = 0.1;
  envelope.sustain = 0.2;
  envelope.release = 0.1;

  synth.triggerAttackRelease(randomNote, "8n");
};
