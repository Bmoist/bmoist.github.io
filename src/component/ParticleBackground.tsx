import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine, ISourceOptions } from "tsparticles-engine";

import eth from "../assets/particles/8th.png";
import sxth from "../assets/particles/16th.png";
import qt from "../assets/particles/quarter.png";
import rest from "../assets/particles/rest.png";
import flat from "../assets/particles/flat.png";
import sharp from "../assets/particles/sharp.png";
const musicalNoteImages = [eth, sharp, qt, flat, rest, sxth];

const ParticleBackground = () => {
  const options: ISourceOptions = useMemo(() => {
    return {
      particles: {
        move: {
          enable: true,
          speed: { min: 0.2, max: 1 },
          direction: "top",
          random: true,
          straight: false,
          outModes: {
            default: "out",
          },
        },
        number: {
          value: 12,
          limit: 20,
        },
        opacity: {
          value: 0.4,
          animation: {
            enable: true,
            speed: 1, // Speed at which opacity changes
            minimumValue: 0.1,
          },
        },
        size: {
          value: 25, // Size of the notes
          random: true, // Randomize size of notes within a range
          animation: {
            enable: true,
            speed: 5, // Speed of size animation (bigger or smaller)
            minimumValue: 10,
          },
        },
        shape: {
          type: "image",
          image: musicalNoteImages.map((src) => ({
            src,
            width: 100,
            height: 100,
          })),
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 40,
            duration: 0.4,
          },
          push: {
            quantity: 2,
          },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine: Engine) => {
    return loadSlim(engine);
  }, []);
  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBackground;

interface ParticleLayoutProps {
  children?: ReactNode;
}

export const ParticleLayout: React.FC<ParticleLayoutProps> = ({ children }) => {
  return (
    <>
      <ParticleBackground />
      {children}
    </>
  );
};
