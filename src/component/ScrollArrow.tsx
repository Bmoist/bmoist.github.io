import lg from "../logger";
import "./ScrollArrow.css";
import DownArr from "../assets/down.svg";
import React, { useState, useEffect } from "react";

function ScrollArrow() {
  const [isScrollable, setIsScrollable] = useState(
    window.innerHeight < document.body.scrollHeight
  );
  const [isVisible, setIsVisible] = useState(true);
  const checkScrollability = () => {
    setIsScrollable(window.innerHeight < document.body.scrollHeight);
  };
  const handleScroll = () => {
    setIsVisible(window.scrollY <= 0);
    lg.info("Set visible:", window.scrollY <= 0);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", checkScrollability);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`scroll-arrow ${!isVisible ? "hidden" : ""}`}>
      {isScrollable && <img src={DownArr} style={{ width: "100%" }} />}
    </div>
  );
}

export default ScrollArrow;
