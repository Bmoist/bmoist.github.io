import * as Tone from "tone";
import { CMScale } from "./Def";

const reverb = new Tone.Reverb({
  decay: 5, // The decay time of the reverb
  preDelay: 0.01, // Delay before the reverb starts
  wet: 1, // Wet signal (how much reverb you want)
}).toDestination();
const synth = new Tone.Synth().connect(reverb);
// synth.volume.value = -12;

export const playRandomNote = () => {
  const randomNote = CMScale[Math.floor(Math.random() * CMScale.length)];

  const envelope = synth.envelope;
  envelope.attack = 0.01;
  envelope.decay = 0.1;
  envelope.sustain = 0.1;
  envelope.release = 0.1;

  synth.triggerAttackRelease(randomNote, "8n");
};
