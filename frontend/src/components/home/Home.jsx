import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HeroSection from "./HeroSection";
import { ScrollTrigger } from "gsap/all";
import About from "./About";
import "../../stylings/home.css";

import Skills from "./Skills";
import Education from "./Education";
import Certifications from "./Certifications";
import Projects from "./Projects";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger);
  const [alertShown, setAlertShown] = useState(true);

  useEffect(() => {
    if (!alertShown) {
      window.alert(
        "This Website is still Under Development and may have inconsistent formatting or incomplete features."
      );
      setAlertShown(true);
    }
  }, [alertShown]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".herosection-main",
        markers: false,
        start: "10%",
        end: "100%",
        scrub: 2,
      },
    });
    tl.from(".cards", {
      xPercent: 120,
      ease: "power2.inOut",
    })
      .to(".cards", {
        xPercent: 0, // Same position → no visual change
      })
      .to(".cards", {
        xPercent: -120,
        ease: "power2.inOut",
      });
  });

  const skills = [
    "Java",
    "javascript",
    "python",
    "mongo db",
    "node js",
    "react js",
    "tailwind css",
    "git",
  ];

  return (
    <>
      <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 min-h-fit">
        <div className="herosection-main overflow-x-hidden">
          <HeroSection />
        </div>
        <div className="tech-cards flex justify-center overflow-x-hidden sm:px-6">
          <div
            className={` cards w-screen flex gap-2 sm:gap-4 border-2 flex-wrap justify-center`}
          >
            {skills.map((element, index) => {
              return (
                <div
                  key={index}
                  className="h-10 sm:text-3xl text-center  sm:px-5 flex items-center  uppercase  rounded"
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>

        <div className="home-content pt-10  m-auto z-10">
          <About />
        </div>

        <div className="skills-content">
          <Skills />
        </div>

        <div className="projects-content">
          <Projects />
        </div>

        <div className="education-content">
          <Education />
        </div>

        <div className="certification-content ">
          <Certifications />
        </div>
      </div>
    </>
  );
};

export default Home;
