import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  Container,
  Engine,
  ISourceOptions,
  IMouseData,
} from "tsparticles-engine";

import eth from "../assets/particles/8th.png";
import sxth from "../assets/particles/16th.png";
import qt from "../assets/particles/quarter.png";
import rest from "../assets/particles/rest.png";
import flat from "../assets/particles/flat.png";
import sharp from "../assets/particles/sharp.png";
import { KeyPreset } from "./tmp/reactpiano_fix";
const musicalNoteImages = [eth, sharp, qt, flat, rest, sxth];

const ParticleBackground = () => {
  const options: ISourceOptions = useMemo(() => {
    return {
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      particles: {
        move: {
          enable: true,
          speed: { min: 0.2, max: 1 },
          direction: "top",
          random: false,
          straight: false,
          outModes: {
            default: "out",
            bottom: "none",
            top: "destroy",
          },
        },
        number: {
          value: 20,
          limit: 300,
        },
        opacity: {
          value: 0.5,
          animation: {
            enable: true,
            speed: 0.1, // Speed at which opacity changes
            minimumValue: 0,
            sync: false,
            destroy: "min",
          },
        },
        size: {
          value: 25, // Size of the notes
          random: true, // Randomize size of notes within a range
          animation: {
            enable: true,
            speed: 5, // Speed of size animation (bigger or smaller)
            minimumValue: 10,
            sync: false,
          },
        },
        shape: {
          type: ["image", "circle"],
          image: musicalNoteImages.map((src) => ({
            src,
            width: 100,
            height: 100,
          })),
        },
        color: {
          value: ["#FF5733", "#33FF57", "#3357FF", "#F3FF33", "#FF33A6"],
        },
        emitters: {
          life: {
            count: 0,
            duration: 0,
          },
          rate: {
            delay: 0,
            quantity: 0,
          },
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
            duration: 0.5,
          },
        },
      },
    };
  }, []);
  const particlesInit = useCallback((engine: Engine) => {
    return loadSlim(engine);
  }, []);

  const containerRef = useRef<Container | undefined>(undefined);

  const particlesLoaded = useCallback(
    async (container: Container | undefined): Promise<void> => {
      containerRef.current = container;
    },
    []
  );

  const pressedKeys = useRef(new Set<string>());
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (!containerRef.current) return;
      if (event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      if (pressedKeys.current.has(event.key)) {
        return;
      }
      if (
        KeyPreset.some(
          (item) =>
            item.natural == event.key ||
            item.flat == event.key ||
            item.sharp == event.key
        )
      ) {
        pressedKeys.current.add(event.key);
        const container = containerRef.current;
        const canvasHeight = container.canvas.size.height;
        const imouse_data: IMouseData = {
          clicking: false,
          inside: true,
          position: {
            x: Math.random() * container.canvas.size.width,
            y: canvasHeight * 1.05,
          },
        };
        containerRef.current.particles.push(
          Math.random() < 0.9 ? 1 : 0,
          imouse_data
        );
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      pressedKeys.current.delete(event.key);
    };

    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.addEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
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
