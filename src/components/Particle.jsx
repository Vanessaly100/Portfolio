
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
         console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
background: {
        color: {
            value: "#0C3C37",
        },
    },
     fpsLimit: 120,
    particles: {
        color: {
            value: "#ffffff",
        },
        move: {
            enable: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 200,
        },
        opacity: {
            value: { min: 0.1, max: 1 },
            animation: {
                enable: true,
                speed: 1,
                sync: false,
            },
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 1 },
        },
    },
    detectRetina: true,
            }}
        />
    );
};

export default ParticlesBackground;
