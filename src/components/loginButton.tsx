import React, { useState } from 'react';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";

const LoginButton = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesConfig = {
    particles: {
      number: {
        value: 40,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#bea2ff", "#F4EDFF", "#5B21B6"]
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.7,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.5,
          sync: false
        }
      },
      line_linked: {
        enable: false
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        out_mode: "bounce",
        bounce: false
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true
      }
    },
    retina_detect: true
  };

  return (
    <div className="relative group">
      <button 
        className="relative z-10 custom-get-started-button flex justify-center items-center 
                   bg-purple-600 py-3 w-44 text-sm text-center border border-white rounded-full 
                   transition-all duration-300 group-hover:scale-105"
      >
        Login
      </button>
      {init && (
        <Particles
          id="tsparticles"
          options={particlesConfig}
          className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0',
            left: '0',
            pointerEvents: 'none'
          }}
        />
      )}
    </div>
  );
};

export default LoginButton;