import { useState, useEffect } from "react";

export interface LinePos {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export const useWindowSize = () => {
  const [linePos, setLineEnd] = useState<LinePos>({
    x1: 0,
    y1: 0,
    x2: Math.min(window.innerWidth, window.screen.width),
    y2: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowChange = () => {
      const pianoWidth = Math.min(window.innerWidth, window.screen.width);
      const scrollY = window.scrollY;
      const newX = pianoWidth;
      setLineEnd({
        x1: 0,
        y1: 0 - scrollY,
        x2: newX,
        y2: window.innerHeight,
      });
    };

    window.addEventListener("scroll", handleWindowChange);
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("scroll", handleWindowChange);
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  return linePos;
};

export const useScrollable = (): boolean => {
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const checkIfScrollable = () => {
      const scrollable =
        document.documentElement.scrollHeight > window.innerHeight;
      setIsScrollable(scrollable);
    };

    // Initial check
    checkIfScrollable();

    // Optional: Re-check when window resizes
    window.addEventListener("resize", checkIfScrollable);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", checkIfScrollable);
    };
  }, []);

  return isScrollable;
};
