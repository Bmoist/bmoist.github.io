import React, { ReactNode, useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { Engine } from "tsparticles-engine";
import type { ISourceOptions } from "tsparticles-engine";

// import eth from "../assets/particles/8th.png";
// import sxth from "../assets/particles/16th.png";
import qt from "../assets/particles/quarter.png";
// import rest from "../assets/particles/rest.png";
// import flat from "../assets/particles/flat.png";
// import sharp from "../assets/particles/sharp.png";

const HPParticleBackground = () => {
  const options: ISourceOptions = useMemo(() => {
    return {
      //   fpsLimit: 30,
      particles: {
        groups: {
          default: {
            number: {
              value: 2,
              limit: 4,
            },
            move: {
              enable: true,
              speed: { min: 0.2, max: 2 },
              direction: "top",
              random: true,
              straight: false,
              outModes: {
                default: "destroy",
              },
            },
            opacity: {
              value: { min: 0.1, max: 0.5 },
              random: { enable: true, minimumValue: 0.1 },
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            size: {
              value: 25,
            },
            // life: {
            //   count: 0, // Infinite life for default particles
            //   duration: {
            //     value: 0,
            //   },
            // },
          },
          pushed: {
            number: {
              value: 0, // Start with 0 pushed particles
              limit: 3, // Maximum number of pushed particles
            },
            move: {
              enable: true,
              speed: { min: 0.5, max: 1 },
              direction: "top",
              random: true,
              straight: false,
              outModes: {
                default: "destroy", // Pushed particles will be destroyed when they leave
              },
            },
            opacity: {
              value: { min: 0, max: 0.6 },
              animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0,
                maximumValue: 0.6,
                sync: false,
                destroy: "min",
              },
            },
            size: {
              value: 25,
            },
          },
        },
        number: {
          value: 10, // Initial number of particles
          limit: 20,
        },
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
        opacity: {
          value: { min: 0, max: 0.6 },
          animation: {
            enable: true,
          },
        },
        color: {
          value: "#000000",
        },
        size: {
          value: 20,
          random: {
            enable: true,
            minimumValue: 15,
          },
          animation: {
            enable: true,
            speed: 10,
            minimumValue: 5,
            sync: false, // Makes particles grow and shrink independently
          },
        },

        shape: {
          type: "image",
          options: {
            image: [
              //   {
              //     src: eth,
              //     width: 32,
              //     height: 32,
              //     replaceColor: false,
              //   },
              //   {
              //     src: sxth,
              //     width: 32,
              //     height: 32,
              //     replaceColor: false,
              //   },
              {
                src: qt,
                width: 32,
                height: 32,
                replaceColor: false,
              },
              //   {
              //     src: rest,
              //     width: 32,
              //     height: 32,
              //     replaceColor: false,
              //   },
              //   {
              //     src: flat,
              //     width: 32,
              //     height: 32,
              //     replaceColor: false,
              //   },
              //   {
              //     src: sharp,
              //     width: 32,
              //     height: 32,
              //     replaceColor: false,
              //   },
            ],
          },
        },
      },
      interactivity: {
        events: {
          //   onHover: {
          //     enable: true,
          //     mode: "bubble",
          //   },
          onClick: {
            enable: true,
            mode: "push",
          },
        },
        modes: {
          //   bubble: {
          //     distance: 200,
          //     size: 40,
          //     duration: 0.4,
          //   },
          push: {
            quantity: 2,
            groups: ["pushed"], // Only push group particles are created on click
          },
        },
      },
    };
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

interface HPParticleLayoutProps {
  children?: ReactNode;
}

export const ParticleLayout: React.FC<HPParticleLayoutProps> = ({ children }) => {
  return (
    <>
      <HPParticleBackground />
      {children}
    </>
  );
};

export default HPParticleBackground;
