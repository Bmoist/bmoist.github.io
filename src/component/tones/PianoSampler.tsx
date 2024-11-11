import * as Tone from "tone";
import c3 from "../../assets/pianosample/48.mp3";
import cs3 from "../../assets/pianosample/49.mp3";
import d3 from "../../assets/pianosample/50.mp3";
import ds3 from "../../assets/pianosample/51.mp3";
import e3 from "../../assets/pianosample/52.mp3";
import f3 from "../../assets/pianosample/53.mp3";
import fs3 from "../../assets/pianosample/54.mp3";
import g3 from "../../assets/pianosample/55.mp3";
import gs3 from "../../assets/pianosample/56.mp3";
import a3 from "../../assets/pianosample/57.mp3";
import as3 from "../../assets/pianosample/58.mp3";
import b3 from "../../assets/pianosample/59.mp3";
import c4 from "../../assets/pianosample/60.mp3";
import cs4 from "../../assets/pianosample/61.mp3";
import d4 from "../../assets/pianosample/62.mp3";
import ds4 from "../../assets/pianosample/63.mp3";
import e4 from "../../assets/pianosample/64.mp3";
import f4 from "../../assets/pianosample/65.mp3";
import fs4 from "../../assets/pianosample/66.mp3";
import g4 from "../../assets/pianosample/67.mp3";
import gs4 from "../../assets/pianosample/68.mp3";
import a4 from "../../assets/pianosample/69.mp3";
import as4 from "../../assets/pianosample/70.mp3";
import b4 from "../../assets/pianosample/71.mp3";
import c5 from "../../assets/pianosample/72.mp3";
import cs5 from "../../assets/pianosample/73.mp3";
import d5 from "../../assets/pianosample/74.mp3";
import ds5 from "../../assets/pianosample/75.mp3";
import e5 from "../../assets/pianosample/76.mp3";
import f5 from "../../assets/pianosample/77.mp3";
import fs5 from "../../assets/pianosample/78.mp3";
import g5 from "../../assets/pianosample/79.mp3";
import gs5 from "../../assets/pianosample/80.mp3";
import a5 from "../../assets/pianosample/81.mp3";
import as5 from "../../assets/pianosample/82.mp3";
import b5 from "../../assets/pianosample/83.mp3";
import lg from "../../logger";

// This did not work and I did not spend more time fixing this.
// const sampleImports = import.meta.glob("../../assets/pianosample/*.mp3");
// const sampleUrls: { [key: number]: string } = {};
// Object.entries(sampleImports).forEach(async ([path, importFn]) => {
//   const filename = path.split("/").pop() as string;
//   const midiNumber = parseInt(filename.split(".")[0], 10);
//   const module = (await importFn()) as { default: string } | string;
//   const sampleUrl = typeof module === "string" ? module : module.default;
//   sampleUrls[midiNumber] = sampleUrl;
// });

const sampleUrls: { [key: number]: string } = {
  48: c3,
  49: cs3,
  50: d3,
  51: ds3,
  52: e3,
  53: f3,
  54: fs3,
  55: g3,
  56: gs3,
  57: a3,
  58: as3,
  59: b3,
  60: c4,
  61: cs4,
  62: d4,
  63: ds4,
  64: e4,
  65: f4,
  66: fs4,
  67: g4,
  68: gs4,
  69: a4,
  70: as4,
  71: b4,
  72: c5,
  73: cs5,
  74: d5,
  75: ds5,
  76: e5,
  77: f5,
  78: fs5,
  79: g5,
  80: gs5,
  81: a5,
  82: as5,
  83: b5,
};

const reverb = new Tone.Reverb({
  decay: 5,
  preDelay: 0.01,
  wet: 1,
}).toDestination();

const sampler = new Tone.Sampler({
  urls: sampleUrls,
  release: 0.5,
  onload: () => {
    lg.debug("All samples loaded successfully");
  },
  onerror: (error) => {
    lg.warn("Error loading sample:", error);
  },
}).connect(reverb);

sampler.volume.value = 16;

const startAudioContext = async () => {
  if (Tone.context.state !== "running") {
    await Tone.start();
  }
};

export const playNote = async (midi: number) => {
  await startAudioContext();
  const note = Tone.Frequency(midi, "midi").toNote();
  sampler.triggerAttack(note); // Play the note
};

// stopNote function
export const stopNote = (midi: number) => {
  const note = Tone.Frequency(midi, "midi").toNote();
  sampler.triggerRelease(note); // Stop the note
};
