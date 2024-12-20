function isAccidental(midiNumber: number): boolean {
  const noteNames = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B",
  ];
  const noteName = noteNames[midiNumber % 12];
  return noteName.includes("#");
}

export function createKeyboardShortcuts(
  firstNote: number,
  lastNote: number,
  keyboardConfig: any[]
) {
  let currentMidiNumber = firstNote;
  let naturalKeyIndex = 0;
  let keyboardShortcuts = [];

  while (
    // There are still keys to be assigned
    naturalKeyIndex < keyboardConfig.length &&
    // Note to be assigned does not surpass range
    currentMidiNumber <= lastNote
  ) {
    const key = keyboardConfig[naturalKeyIndex];
    const isAcc = isAccidental(currentMidiNumber);
    if (isAcc) {
      keyboardShortcuts.push({
        key: key.flat,
        midiNumber: currentMidiNumber,
      });
    } else {
      keyboardShortcuts.push({
        key: key.natural,
        midiNumber: currentMidiNumber,
      });
      naturalKeyIndex += 1;
    }
    currentMidiNumber += 1;
  }
  return keyboardShortcuts;
}

// Preset configurations
// const BOTTOM_ROW = [
//   { natural: "z", flat: "a", sharp: "s" },
//   { natural: "x", flat: "s", sharp: "d" },
//   { natural: "c", flat: "d", sharp: "f" },
//   { natural: "v", flat: "f", sharp: "g" },
//   { natural: "b", flat: "g", sharp: "h" },
//   { natural: "n", flat: "h", sharp: "j" },
//   { natural: "m", flat: "j", sharp: "k" },
//   { natural: ",", flat: "k", sharp: "l" },
//   { natural: ".", flat: "l", sharp: ";" },
//   { natural: "/", flat: ";", sharp: "'" },
// ];
// const HOME_ROW = [
//   { natural: "a", flat: "q", sharp: "w" },
//   { natural: "s", flat: "w", sharp: "e" },
//   { natural: "d", flat: "e", sharp: "r" },
//   { natural: "f", flat: "r", sharp: "t" },
//   { natural: "g", flat: "t", sharp: "y" },
//   { natural: "h", flat: "y", sharp: "u" },
//   { natural: "j", flat: "u", sharp: "i" },
//   { natural: "k", flat: "i", sharp: "o" },
//   { natural: "l", flat: "o", sharp: "p" },
//   { natural: ";", flat: "p", sharp: "[" },
//   { natural: "'", flat: "[", sharp: "]" },
// ];
const QWERTY_ROW = [
  { natural: "z", flat: "a", sharp: "s" },
  { natural: "x", flat: "s", sharp: "d" },
  { natural: "c", flat: "d", sharp: "v" },
  { natural: "v", flat: "c", sharp: "1" },
  { natural: "q", flat: "1", sharp: "2" },
  { natural: "w", flat: "2", sharp: "3" },
  { natural: "e", flat: "3", sharp: "4" },
  { natural: "r", flat: "4", sharp: "5" },
  { natural: "t", flat: "5", sharp: "6" },
  { natural: "y", flat: "6", sharp: "7" },
  { natural: "u", flat: "7", sharp: "8" },
  { natural: "i", flat: "8", sharp: "9" },
  { natural: "o", flat: "9", sharp: "0" },
  { natural: "p", flat: "0", sharp: "-" },
  { natural: "[", flat: "-", sharp: "=" },
  { natural: "]", flat: "=", sharp: "Backspace" },
  { natural: "\\", flat: "Backspace", sharp: "" },
  { natural: "m", flat: "\\", sharp: "k" },
  { natural: ",", flat: "k", sharp: "l" },
  { natural: ".", flat: "l", sharp: ";" },
  { natural: "/", flat: ";", sharp: "'" },
];

const config = {
  instrumentName: "acoustic_grand_piano",
  noteRange: {
    first: 48,
    last: 83,
  },
  keyboardShortcutOffset: 0,
};

// const keyboardShortcuts = createKeyboardShortcuts(
//   config.noteRange.first + config.keyboardShortcutOffset,
//   config.noteRange.last + config.keyboardShortcutOffset,
//   QWERTY_ROW
// );

export function createKeyPreset() {
  return createKeyboardShortcuts(
    config.noteRange.first + config.keyboardShortcutOffset,
    config.noteRange.last + config.keyboardShortcutOffset,
    QWERTY_ROW
  );
}

export { config as KeyConfig };
export { QWERTY_ROW as KeyPreset };
