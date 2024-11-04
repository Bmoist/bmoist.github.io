import "./ScrollArrow.css";
import React, { useState, useEffect } from "react";

function ScrollArrow() {
  const [isScrollable, setIsScrollable] = useState(
    window.innerHeight < document.body.scrollHeight
  );
  const [isVisible, setIsVisible] = useState(isScrollable);
  const checkScrollability = () => {
    setIsScrollable(window.innerHeight < document.body.scrollHeight);
  };
  const handleScroll = () => {
    setIsVisible(window.scrollY <= 0);
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
      {isScrollable && <img src={"/down.svg"} style={{ width: "100%" }} />}
    </div>
  );
}

export default ScrollArrow;
