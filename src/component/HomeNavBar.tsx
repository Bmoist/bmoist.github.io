import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./HomeNavBar.css";
import { useWindowSize } from "../hooks/Window";
import { useState, useEffect } from "react";

interface NavProps {
  scrollThres?: number;
}

const HomeNav: React.FC<NavProps> = ({
  scrollThres = window.innerHeight * 0.1,
}) => {
  const linePos = useWindowSize();
  const [isVisible, setIsVisible] = useState<boolean>(true); // State to control visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < Math.max(1, scrollThres));
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollThres]);

  return (
    <aside
      className={`sidebar ${isVisible ? "" : "hidden"}`}
      style={{
        top: 6.2 * Math.sqrt(linePos.x2),
        left: 0.85 * linePos.x2,
        fontSize: linePos.x2 * 0.014,
      }}
    >
      <nav>
        <ul>
          <li className="sidebar-link">
            <Link to="/home">Home</Link>
          </li>
          <hr />
          <li className="sidebar-link">
            <Link to="/about">About</Link>
          </li>
          <hr />
          <li className="sidebar-link">
            <Link to="/projects">Projects</Link>
          </li>
          <hr />
          <li className="sidebar-link">
            <Link to="/music">Music</Link>
          </li>
          <hr />
          <li className="sidebar-link">
            <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
          <hr />
        </ul>
      </nav>
    </aside>
  );
};

export default HomeNav;
