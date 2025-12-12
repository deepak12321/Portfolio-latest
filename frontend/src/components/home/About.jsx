// import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { ToastContainer, toast } from "react-toastify";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const screenSize = gsap.matchMedia();
    let mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 500px)",
        // isTablet:"(max-width: 1024px)",
        isDesktop: "(min-width: 1025px)",
      },

      (context) => {
        let { isMobile, isDesktop } = context.conditions;
        const aboutTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".heading-container",
            // markers: true,
            start: isDesktop ? "top 10%" : "top 30%",
            end: "bottom 30%",
            scrub: 1,
            pin: true,
            fastScrollEnd: true,
          },
        });

        aboutTimeline
          .from([".text1", ".text3"], {
            xPercent: -180,
            duration: 3,
          })
          .from(
            ".text2",
            {
              xPercent: 180,
              duration: 3,
            },
            0
          )
          .to([".text1"], {
            yPercent: 100,
          })
          .to(
            ".text3",
            {
              yPercent: -100,
            },
            3
          )
          .to([".text1", ".text2", ".text3"], {
            scale: 0.8,
          })
          .fromTo(
            ".about-text",
            {
              opacity: 0,
            },
            {
              y: isDesktop ? -150 : -120,
              autoAlpha: 1,
              opacity: 1,
            }
          );
      }
    );

    gsap;
  });

  return (
    <>
      <div className="overflow-hidden">
        <div className="heading-container   items-center flex-col">
          <div className="text1 p-0 m-0 bg-transparent ">
            <h1 className="m-0 p-0 text-[6rem] md:text-[13rem] leading-none overflow-hidden uppercase text-center bg-transparent ">
              about
            </h1>
          </div>
          <div className="text2 p-0 m-0 bg-transparent ">
            <h1 className="m-0 p-0 text-[6rem] md:text-[13rem] leading-none overflow-hidden uppercase text-center bg-transparent ">
              about
            </h1>
          </div>
          <div className="text3 p-0 m-0 bg-transparent ">
            <h1 className="m-0 p-0 text-[6rem] md:text-[13rem] leading-none overflow-hidden uppercase text-center bg-transparent ">
              about
            </h1>
          </div>
        </div>
        <div className="about-text w-[85%] m-auto relative ">
          <div className="blob absolute w-60 h-80 md:w-100 md:h-75 left-[15%] top-[10%] md:top-0 md:left-[35%]"></div>
          <p className="md:text-3xl text-justify  pt-10 ">
            I am a versatile software developer skilled in building modern,
            user-focused digital experiences. I specialize in React, Tailwind
            CSS, and GSAP for creating fast, responsive interfaces, and have
            strong experience with full-stack development using Node.js,
            Express, Python Flask, and MongoDB. I've built end-to-end
            applications including billing systems with automation, PDF
            generation, and WhatsApp integration, as well as complete platforms
            with authentication and payments. I focus on clean architecture,
            performance, and continuous learning — turning ideas into efficient,
            scalable, and impactful software.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
