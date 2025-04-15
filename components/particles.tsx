'use client';

import { JSX, useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useColorMode } from "@/components/ui/color-mode"

function ParticleBackground(): JSX.Element {
    const { colorMode } = useColorMode()
    const [lineColor, setLineColor] = useState("#7db0f4");

    useEffect(() => {
        setLineColor(colorMode === "dark" ? "#ffffff" : "#7db0f4");
    }, [colorMode]);

    const particlesInit = useCallback(async (main: any) => {
        await loadSlim(main);
    }, []);

    return (
        <Particles
            className="-z-10"
            id="tsparticles"
            init={particlesInit}
            options={{
                particles: {
                    number: {
                        value: 80,
                        density: {
                            enable: true,
                            area: 1000,
                        },
                    },
                    color: {
                        value: "#000000", // har holda ko'rinmaydi
                    },
                    opacity: {
                        value: 0, // Nuqtalarni yashiramiz
                    },
                    size: {
                        value: 0, // Hattoki ularga o‘lcham bermaymiz
                    },
                    links: {
                        enable: true,
                        distance: 120,
                        color: lineColor,
                        opacity: 0.5,
                        width: 1.2,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: "none",
                        outModes: {
                            default: "out",
                        },
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: false,
                            mode: [],
                        },
                        onClick: {
                            enable: false,
                            mode: [],
                        },
                        resize: true,
                    },
                },
                detectRetina: true,
            }}
        />
    );
}

export default ParticleBackground;
