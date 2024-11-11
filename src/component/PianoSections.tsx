import React, { useEffect, useState } from "react";
import "./PianoSections.css"; // Ensure this file has the appropriate styles
import { Link } from "react-router-dom";
// import lg from "../logger";

interface PianoSectionProps {
  width?: number; // Accept a width prop
  visibleThres?: number;
  scrollThres?: number;
}

const PianoSection: React.FC<PianoSectionProps> = ({
  width = window.innerWidth,
  visibleThres = 0,
  scrollThres = window.innerWidth,
}) => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false); // State to control visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY < scrollThres);
      setIsVisible(
        visibleThres <= scrollY && scrollY < Math.max(1, scrollThres)
      );
      // lg.info(
      //   "visibleThres:",
      //   visibleThres,
      //   "scrollY",
      //   scrollY,
      //   "scrollThres:",
      //   scrollThres
      // );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [visibleThres, scrollThres]);

  return (
    <div
      className={`sticky-section ${isSticky ? "sticky" : ""} ${
        isVisible ? "" : "hidden"
      }`}
      style={{
        width,
        height: Math.min(window.innerHeight * 0.15, window.innerWidth * 0.16),
        fontSize:
          Math.min(window.innerHeight * 0.15, window.innerWidth * 0.16) * 0.2,
      }}
    >
      <Link
        to="/projects"
        className="section-item"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Projects
      </Link>
      <Link
        to="/music"
        className="section-item"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        Music
      </Link>
      <Link
        className="section-item"
        to="/about"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        More About Me
      </Link>
    </div>
  );
};

export default PianoSection;
