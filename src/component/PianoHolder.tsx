import Piano from "../lib/react-piano/Piano.jsx";
import { useEffect } from "react";
import { playNote, stopNote } from "./tones/PianoSampler.js";
import { createKeyboardShortcuts, HOME_ROW } from "./tmp/reactpiano_fix.js";
// import lg from "../logger.js";

interface PianoHolderProps {
  width?: number;
  visibleThres?: number;
  isVisible?: boolean;
}

const PianoHolder: React.FC<PianoHolderProps> = ({
  width = window.innerWidth,
  visibleThres = window.innerWidth * 0.5,
  isVisible = true,
}) => {
  useEffect(() => {
    const handleChange = () => {
      // setIsVisible(!scrollable);
    };
    handleChange();
    window.addEventListener("scroll", handleChange);
    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, [visibleThres]);

  const config = {
    instrumentName: "acoustic_grand_piano",
    noteRange: {
      first: 48,
      last: 83,
    },
    keyboardShortcutOffset: 10,
  };
  const keyboardShortcuts = createKeyboardShortcuts(
    config.noteRange.first + config.keyboardShortcutOffset,
    config.noteRange.last + config.keyboardShortcutOffset,
    HOME_ROW
  );

  return (
    <div
      className={`piano-holder`}
      style={{ height: 0.15 * width, textAlign: "center", color: "black" }}
    >
      {isVisible && (
        <Piano
          noteRange={config.noteRange}
          width={width}
          keyboardShortcuts={keyboardShortcuts}
          keyboardShortcutOffset={config.keyboardShortcutOffset}
          playNote={playNote}
          stopNote={stopNote}
        />
      )}

      <span style={{ fontSize: 0.009 * width }}>
        Powered by{" "}
        <a
          href="https://github.com/kevinsqi/react-piano/tree/master"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-piano
        </a>
      </span>
    </div>
  );
};

export default PianoHolder;
