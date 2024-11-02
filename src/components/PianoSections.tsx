import React, { useEffect, useState } from "react";
import "./PianoSections.css"; // Ensure this file has the appropriate styles

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
  const [isVisible, setIsVisible] = useState<boolean>(visibleThres == 0); // State to control visibility

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY < scrollThres);
      setIsVisible(
        visibleThres <= scrollY && scrollY < Math.max(1, scrollThres)
      );
    };

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
      <div className="section-item">Projects</div>
      <div className="section-item">Music</div>
      <div className="section-item">More About Me</div>
    </div>
  );
};

export default PianoSection;
