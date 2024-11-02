import "./PianoRim.css";
import React, { useState, useEffect } from "react";
import PianoSection from "./PianoSections";
import PianoHolder from "./PianoHolder";
// import lg from "../logger";

// piano shape: `
//         M 0 42
//         Q 0 0 93 0
//         Q 218 0 232 46
//         L 276 346
//         C 299 478 421 408 426 538
//         `,

// interface Particle {
//   x: number;
//   y: number;
//   vx: number;
//   vy: number;
//   life: number;
// }

interface PianoCurveProps {
  glowIntensity?: number;
  animationSpeed?: number;
  primaryColor?: string;
  maxScrollThres?: number;
}

// const maxPianoLen = window.screen.height / 2;
const maxPianoLen = window.screen.width;

export interface LinePos {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

function calCenterXCalibrate(width: number) {
  return 0;
  return window.innerWidth / 2 - width / 2 - 10;
}
function calCenterYCalibrate() {
  return 0;
  return window.innerHeight / 4;
}

export const useRimPosition = (threshold: number) => {
  const [linePos, setLineEnd] = useState<LinePos>({
    x1: calCenterXCalibrate(Math.min(window.innerWidth, maxPianoLen)),
    y1: 0,
    x2:
      calCenterXCalibrate(Math.min(window.innerWidth, maxPianoLen)) +
      Math.min(window.innerWidth, maxPianoLen),
    y2: window.innerHeight,
  });

  useEffect(() => {
    const handleWindowChange = () => {
      const pianoWidth = Math.min(window.innerWidth, maxPianoLen);
      const scrollY = window.scrollY;
      const newY = Math.min(window.innerHeight, window.innerHeight + threshold);
      const newX = pianoWidth;
      setLineEnd({
        x1: calCenterXCalibrate(pianoWidth),
        y1: 0 - scrollY,
        x2: calCenterXCalibrate(pianoWidth) + newX,
        y2: newY,
      });
    };

    window.addEventListener("scroll", handleWindowChange);
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("scroll", handleWindowChange);
      window.removeEventListener("resize", handleWindowChange);
    };
  }, [threshold]);

  return linePos;
};

function getNamePosX(linePos: LinePos) {
  return linePos.x2 / 3.2 + calCenterXCalibrate(linePos.x2);
  //   return linePos.x2 / 1.25 + CalCenterXCalibrate(linePos.x2);
}

function getPadTop(linePos: LinePos) {
  return 18 * Math.sqrt(linePos.x2);
}

function calScrollThres(linePos: LinePos, maxScrollThres: number) {
  const yend = calEndY(linePos, maxScrollThres);
  return yend - maxScrollThres - window.innerHeight;

  return 0.6 * linePos.x2 + maxScrollThres;
  //    linePos.x2 ** 1.3 * 0.01;
}

function calEndY(pos: LinePos, scrollThres: number) {
  const midY1 = 0.1 * pos.x2;
  const midYShift = Math.min(
    scrollThres,
    -Math.min(pos.y1 + midY1 + calCenterYCalibrate(), 0)
  ); // Starts shifting once reaching the beginning of the middle section
  const tailY3 = 0.93 * pos.x2 + midYShift;
  const endY = tailY3 + 0.19 * pos.x2;
  return endY;
}
function getExtendedPath(pos: LinePos, scrollThres: number) {
  const pianoWidth = pos.x2;
  const scaleRatio = pianoWidth / 427;
  const midY1 = 0.1 * pianoWidth;
  const midYShift = Math.min(
    scrollThres,
    -Math.min(pos.y1 + midY1 + calCenterYCalibrate(), 0)
  ); // Starts shifting once reaching the beginning of the middle section

  const midY2 = 0.48 * pianoWidth + midYShift;
  const tailY1 = 0.79 * pianoWidth + midYShift;
  const tailY2 = 0.63 * pianoWidth + midYShift;
  const tailY3 = 0.93 * pianoWidth + midYShift;
  const endY = tailY3 + 80 * scaleRatio;
  const xCalibrate = calCenterXCalibrate(pianoWidth);
  return {
    baseCurve: `
            M ${xCalibrate} ${endY}
            L ${xCalibrate} ${midY1}
            Q ${xCalibrate} 1 
              ${0.22 * pianoWidth + xCalibrate} 1
            Q ${0.58 * pianoWidth + xCalibrate} 1 
              ${0.62 * pianoWidth + xCalibrate} ${midY1}

            L ${0.67 * pianoWidth + xCalibrate} ${midY2} 

            C ${0.72 * pianoWidth + xCalibrate} ${tailY1} 
              ${0.98 * pianoWidth + xCalibrate} ${tailY2}
              ${pianoWidth + xCalibrate} ${tailY3}
            
            V ${endY}
            `,
  };
}
const PianoFrame: React.FC<PianoCurveProps> = ({
  // glowIntensity = 0.5,
  // animationSpeed = 10,
  primaryColor = "#333333",
  maxScrollThres = window.innerWidth / 3,
}) => {
  const linePos = useRimPosition(maxScrollThres);
  const paths = getExtendedPath(linePos, maxScrollThres); // TODO @Bmois write the function to convert linePos
  return (
    <>
      <div
        className="piano-frame"
        style={{
          height: calEndY(linePos, maxScrollThres),
          paddingTop: calCenterYCalibrate(),
        }}
      >
        <div
          className="name"
          style={{
            width: (linePos.x2 * 1) / 2,
            left: getNamePosX(linePos),
            textAlign: "center",
          }}
        >
          <p
            style={{
              paddingTop: getPadTop(linePos),
              fontSize: 0.04 * linePos.x2,
            }}
          >
            <span>Linzan</span>&nbsp;
            <span style={{ fontWeight: "lighter" }}>Ye</span>
          </p>
          <p
            style={{
              color: "black",
              paddingTop: linePos.x2 * 0.03,
              paddingLeft: 0.06 * linePos.x2,
              paddingRight: 0.06 * linePos.x2,
              display: "grid",
            }}
          >
            <span style={{ fontSize: 0.012 * linePos.x2 }}>
              Hello! I'm Linzan.
            </span>
            <span style={{ fontSize: 0.013 * linePos.x2 }}>
              I am obsessed about music.
            </span>
            <span style={{ fontSize: 0.015 * linePos.x2 }}>
              I am also an engineer and researcher.
            </span>
            <span style={{ fontSize: 0.017 * linePos.x2 }}>
              <i>"Music as moments of transcendence"</i>
            </span>
          </p>
        </div>

        <svg className="full-size" style={{}}>
          <defs>
            <linearGradient
              id="elegantGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor={primaryColor} stopOpacity="0.4" />
              <stop offset="50%" stopColor={"#248753a4"} stopOpacity="0.8" />
              <stop offset="100%" stopColor={primaryColor} stopOpacity="0.4" />
            </linearGradient>
            <filter id="mainGlow">
              <feGaussianBlur stdDeviation={3} result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            <filter
              id="subtleGlow"
              x="-100%"
              y="-100%"
              width="300%"
              height="300%"
            >
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation={8}
                result="blur"
              />
              <feColorMatrix
                in="blur"
                type="matrix"
                values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 15 -7
              "
              />
            </filter>
          </defs>
          <path
            d={paths.baseCurve}
            fill="none"
            stroke={primaryColor}
            strokeWidth="12"
            strokeOpacity="0.05"
            filter="url(#subtleGlow)"
          />
          <g className="transition-all duration-300 ease-out">
            <path
              d={paths.baseCurve}
              fill="none"
              stroke="url(#elegantGradient)"
              strokeWidth={"3"}
              filter="url(#mainGlow)"
            />
            <path
              d={paths.baseCurve}
              fill="none"
              stroke="url(#shimmerGradient)"
              strokeWidth={"3"}
              opacity="0.3"
            />
          </g>
        </svg>

        <PianoSection
          visibleThres={calCenterYCalibrate() + window.innerHeight * 0.2}
          scrollThres={calScrollThres(linePos, maxScrollThres)}
          width={linePos.x2}
        />
        <PianoHolder
          width={linePos.x2}
          visibleThres={calEndY(linePos, maxScrollThres) - linePos.y2}
        />
      </div>
    </>
  );
};

export default PianoFrame;
