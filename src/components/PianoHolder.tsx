import Piano from "../lib/react-piano/Piano.jsx";
import { useState, useEffect } from "react";
// import "./PianoRim.css";

interface PianoHolderProps {
  width?: number;
  visibleThres?: number;
}

const PianoHolder: React.FC<PianoHolderProps> = ({
  width = window.innerWidth,
  visibleThres = window.innerWidth * 0.5,
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(visibleThres == 0); // State to control visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY >= visibleThres);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleThres]);

  return (
    <div
      className={`piano-holder ${isVisible ? "" : "hidden"}`}
      style={{ height: 0.2 * width, textAlign: "center" }}
    >
      <Piano
        noteRange={{ first: 48, last: 83 }}
        width={width}
        playNote={(midiNumber: number) => {}}
        stopNote={(midiNumber: number) => {}}
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
