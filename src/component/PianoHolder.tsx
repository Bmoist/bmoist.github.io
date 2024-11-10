import Piano from "../lib/react-piano/Piano.jsx";
import { useEffect } from "react";
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

  return (
    <div
      className={`piano-holder`}
      style={{ height: 0.15 * width, textAlign: "center", color: "black" }}
    >
      {isVisible && (
        <Piano
          noteRange={{ first: 48, last: 83 }}
          width={width}
          playNote={(midiNumber: number) => {
            return midiNumber;
          }}
          stopNote={(midiNumber: number) => {
            return midiNumber;
          }}
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
