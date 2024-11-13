import "./PianoFrame.css";
import React, { ReactNode } from "react";
import PianoSection from "./PianoSections";
import PianoHolder from "./PianoHolder";
import { useWindowSize, LinePos } from "../hooks/Window";
import ScrollArrow from "./ScrollArrow";
import { playRandomNote } from "./tones/Play";

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
  children?: ReactNode;
  title?: string;
  id?: string;
  disableSection?: boolean;
  disablePiano?: boolean;
  sectionVisibleThres?: number;
}

export function calEndY(pos: LinePos, scrollThres: number) {
  return pos.x2 * 1.1 + scrollThres;
  // const midY1 = 0.1 * pos.x2;
  // const midYShift = Math.min(scrollThres, -Math.min(pos.y1 + midY1, 0)); // Starts shifting once reaching the beginning of the middle section
  // // const midYShift = scrollThres /12;
  // const tailY3 = 0.93 * pos.x2 + midYShift;
  // const endY = tailY3 + 0.19 * pos.x2;
  // console.log("calendy is bad", endY, scrollThres);
  // return endY;
}

function getExtendedPath(pos: LinePos, scrollThres: number) {
  const pianoWidth = pos.x2;
  const midY1 = 0.1 * pianoWidth;
  const midYShift = scrollThres;
  //  Math.min(scrollThres, -Math.min(pos.y1 + midY1, 0)); // Starts shifting once reaching the beginning of the middle section

  const midY2 = 0.48 * pianoWidth + midYShift;
  const tailY1 = 0.79 * pianoWidth + midYShift;
  const tailY2 = 0.63 * pianoWidth + midYShift;
  const tailY3 = 0.93 * pianoWidth + midYShift;
  const endY = tailY3 + 0.187 * pianoWidth;
  const xCalibrate = 0;
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

export function getTitlePosX(linePos: LinePos) {
  return linePos.x2 / 3.2;
  //   return linePos.x2 / 1.25 + CalCenterXCalibrate(linePos.x2);
}

export function getTitlePosY(linePos: LinePos) {
  return linePos.x2 / 6
  // return 18 * Math.sqrt(linePos.x2);
}

function handleClick() {
  console.log("Test test");
  playRandomNote();
}

const PianoFrame: React.FC<PianoCurveProps> = ({
  // glowIntensity = 0.5,
  // animationSpeed = 10,
  primaryColor = "#333333",
  maxScrollThres = window.innerWidth / 3,
  children,
  title,
  id,
  disableSection = false,
  disablePiano = false,
  sectionVisibleThres = 0 + screen.availHeight * 0.2,
}) => {
  const linePos = useWindowSize();
  const paths = getExtendedPath(linePos, maxScrollThres); // TODO @Bmois write the function to convert linePos
  return (
    <div
      className="piano-frame"
      id={id}
      style={{
        height: calEndY(linePos, maxScrollThres),
        paddingTop: 0,
      }}
    >
      {title && (
        <div className="title">
          <p
            style={{
              paddingTop: getTitlePosY(linePos),
              fontSize: 0.04 * linePos.x2,
              color: "black",
            }}
          >
            <span>{title}</span>
          </p>
          <hr style={{ width: "50%", margin: "0 auto" }} />
        </div>
      )}
      <ScrollArrow />
      <svg className="full-size" onClick={handleClick} style={{}}>
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
            <feGaussianBlur in="SourceGraphic" stdDeviation={8} result="blur" />
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
      {!disableSection && (
        <PianoSection
          visibleThres={sectionVisibleThres}
          scrollThres={maxScrollThres + linePos.x2 * 0.4}
          width={linePos.x2}
        />
      )}

      <PianoHolder
        width={linePos.x2}
        visibleThres={calEndY(linePos, maxScrollThres) - linePos.y2}
        isVisible={!disablePiano}
      />
      {children}
    </div>
  );
};

export default PianoFrame;
