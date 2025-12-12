import React, { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { skills as techStack } from "../../data/techStack";
import * as Icons from "react-icons/di";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  DiJava,
  DiJavascript1,
  DiPython,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiCss3,
  DiGit,
  DiHtml5,
  DiBootstrap,
  DiCode,
} from "react-icons/di";

const Skills = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 700px)" });
  const skillHeadingRef = useRef();
  const skillsRef = useRef();

  useGSAP(() => {
    gsap.set(skillHeadingRef.current.children, { opacity: 0 });

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 500px)",
        // isTablet:"(max-width: 1024px)",
        isDesktop: "(min-width: 1025px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        const skillsTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: skillHeadingRef.current,
            // markers: true,
            scrub: 2,
            pin: true,
            start: isDesktop ? "top top" : "top 10%",
            fastScrollEnd: true,
          },
        });
        skillsTimeline
          .to(skillHeadingRef.current.children, {
            // y: "7.5rem",
            opacity: 1,
            stagger: 1,
          })
          .to(skillHeadingRef.current, {
            // yPercent: 10,
          })
          .to(skillHeadingRef.current, {
            scale: isDesktop ? 0.5 : 0.8,
            ease: "power1.out",
          })
          .to(skillHeadingRef.current.children, {
            translateY: isDesktop ? "100%" : "200%",
            ease: "power3.out",
          });

        gsap.from(skillsRef.current.children, {
          opacity: 0,
          stagger: {
            amount: 1,
          },
          scrollTrigger: {
            trigger: skillsRef.current,
            // markers: true,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    );

    // skills card animation
  });

  return (
    <>
      <div className="skills relative -top-50 bg-transparent overflow-x-hidden">
        <div
          className="skills-heading flex h-screen font-white text-[7.5rem] sm:text-[15rem] md:text-[20rem] items-center justify-center  uppercase  "
          ref={skillHeadingRef}
        >
          <p>s</p>
          <p>k</p>
          <p>i</p>
          <p>l</p>
          <p>l</p>
          <p>s</p>
        </div>

        <div className=" ">
          <div className="  h-fit w-[90%] m-auto">
            <div
              className="skills-text flex flex-wrap gap-3 justify-center  w-full h-full uppercase"
              ref={skillsRef}
            >
              {techStack.map((skill, index) => {
                const Icon = Icons[skill.icon];
                return (
                  <div class="holographic-container">
                    <div class="holographic-card">
                      <div
                        key={index}
                        className="skills-card  h-25 w-25 sm:h-40 sm:w-40  my-3 p-2 flex justify-between flex-col text-center border-2 rounded-2xl "
                      >
                        {Icon && (
                          <Icon
                            size={isDesktop ? 100 : 50} // ✅ correct way to size react-icons
                            color={skill.color} // ✅ actual color from your array
                            className="mx-auto mb-2"
                          />
                        )}
                        <p className=" text-[0.8rem] sm:text-xl">
                          {skill.name}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
