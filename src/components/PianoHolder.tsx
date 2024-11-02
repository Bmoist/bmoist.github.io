import Piano from "../lib/react-piano/Piano.jsx";
import { useState, useEffect } from "react";
import lg from "../logger.js";
// import "./PianoRim.css";

interface PianoHolderProps {
  width?: number;
  visibleThres?: number;
}

const PianoHolder: React.FC<PianoHolderProps> = ({
  width = window.innerWidth,
  visibleThres = window.innerWidth * 0.5,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(visibleThres <= 0); // State to control visibility
  useEffect(() => {
    lg.info("visiThres", visibleThres, "scrolly", scrollY);
    const handleChange = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY >= visibleThres);
      lg.info("set visible: ", scrollY >= visibleThres);
    };
    handleChange();
    window.addEventListener("scroll", handleChange);
    return () => {
      window.removeEventListener("scroll", handleChange);
    };
  }, [visibleThres]);

  return (
    <div
      className={`piano-holder ${isVisible ? "" : "hidden"}`}
      style={{ height: 0.15 * width, textAlign: "center", color: "black" }}
    >
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
      <span>
        Powered by{" "}
        <a href="https://github.com/kevinsqi/react-piano/tree/master">
          react-piano
        </a>
      </span>
    </div>
  );
};

export default PianoHolder;
