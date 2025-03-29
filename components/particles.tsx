'use client';

import { JSX, useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Slim versiyasini yuklaymiz
import { useColorMode } from "@/components/ui/color-mode"

function ParticleBackground():JSX.Element {
    const{colorMode} = useColorMode()
    const [particleColor, setParticleColor] = useState("#122fe3");
    const [lineColor, setLineColor] = useState("#7db0f4");

    useEffect(() => {
        if (colorMode === "dark") {
            setParticleColor("#fff");
            setLineColor("#fff");
        } else {
            setParticleColor("#122fe3");
            setLineColor("#7db0f4");
        }
    }, [colorMode]);
    const particlesInit = useCallback(async (main: any) => {
        console.log("Particles Engine Loaded");
        await loadSlim(main); // engine o'rniga main ni ishlatamiz
    }, []);

    return (
        <Particles
            className="-z-10"
            id="tsparticles"
            init={particlesInit}
            options={{
                // background: {
                //   color: "#000",
                // },
                particles: {
                    number: {
                        value: 100,
                    },
                    shape: {
                        type: "triangle",
                    },
                    color: {
                        value: particleColor,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: 3,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                    },
                },
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",

                        },
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            line_linked: {
                                opacity: 0.8,
                                color: lineColor, // Hover chiziqlarining rangi qora
                            },
                        },
                    },
                },
            }}
        />
    );
}

export default ParticleBackground;