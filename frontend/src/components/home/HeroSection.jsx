import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroImage from "../../data/heroImage.js";
import { Link } from "react-router-dom";

import socialLinks from "../../data/socialLinks";
import deepak_phulara_resume from "/assets/resume/Deepak_Phulara_Resume.pdf";
gsap.registerPlugin(useGSAP);

const HeroSection = () => {
  const bgColors = ["#e48f3a", "#7c94b5", "#7c94b5", "#e4563a", "#e4bc3a"];
  const [bgIndex, setBgIndex] = useState(0);
  const heroImgRef = useRef();
  const heroTextRef = useRef();

  useGSAP(() => {
    const elements = Array.from(heroTextRef.current.children);
    const duration = 0.5;
    const pause = 2;

    const staggerDuration = duration + pause;
    const repeatDelayDuration = staggerDuration * (elements.length - 1) + pause;

    const imageTimeline = gsap.timeline({ repeat: -1 });
    const textTimeline = gsap.timeline({
      repeat: -1,
    });

    textTimeline
      .from(heroTextRef.current.children, {
        yPercent: 100,
        autoAlpha: 0,
        stagger: {
          each: staggerDuration,
          repeat: -1,
          repeatDelay: repeatDelayDuration,
        },
      })
      .to(
        heroTextRef.current.children,
        {
          yPercent: -100,
          autoAlpha: 0,
          stagger: {
            each: staggerDuration,
            repeat: -1,
            repeatDelay: repeatDelayDuration,
          },
        },
        staggerDuration
      );

    const interval = setInterval(() => {
      setBgIndex((prev) => (prev === bgColors.length - 1 ? 0 : prev + 1));
    }, staggerDuration * 1000);

    imageTimeline
      .from([heroImgRef.current.children], {
        xPercent: 100,
        ease: "power4.out",
        stagger: {
          each: staggerDuration,
          repeat: -1,
          repeatDelay: repeatDelayDuration,
        },
      })
      .to(
        heroImgRef.current.children,
        {
          xPercent: -100,
          ease: "power4.out",
          stagger: {
            each: staggerDuration,
            repeat: -1,
            repeatDelay: repeatDelayDuration,
          },
        },
        staggerDuration
      );
  });

  return (
    <>
      <div className="herosection-main-container  ">
        <div className="herosection-sub-container h-screen width-screen md:flex flex-row-reverse items-center uppercase ">
          <div
            className=" wow md:w-1/2 h-1/2 md:h-full flex  relative  overflow-hidden"
            ref={heroImgRef}
            // style={{ backgroundImage: "url('assets/herosection/coding.png')" }}
          >
            <img
              className="h-full w-full shrink-0  object-cover absolute"
              src={heroImage[0]}
              alt="Herosection Image"
            />
            <img
              className="h-full w-full shrink-0  object-cover absolute"
              src={heroImage[1]}
              alt="Herosection Image"
            />
            <img
              className="h-full w-full shrink-0  object-cover absolute"
              src={heroImage[2]}
              alt="Herosection Image"
            />
            <img
              className="h-full w-full shrink-0  object-cover absolute"
              src={heroImage[3]}
              alt="Herosection Image"
            />
            <img
              className="h-full w-full shrink-0  object-cover absolute"
              src={heroImage[4]}
              alt="Herosection Image"
            />
          </div>
          <div className="text-container pl-9 h-1/2 font-bold md:w-1/2 mt-5 sm:mt-0 md:h-full flex flex-col sm:justify-center z-1 ">
            <div
              class="blob-bg absolute  -z-10 left-10
            bg-linear-to-r from-blue-600 via-pink-500 to-red-500
            opacity-50 blur-3xl rounded-full w-[30%] h-[40%] mx-auto"
            ></div>
            <div className="text-4xl sm:text-5xl md:text-7xl text-white">
              Hi, I am{" "}
            </div>
            <div className="text-4xl sm:text-5xl md:text-7xl text-white ">
              DEEPAK PHULAra
            </div>
            <div
              className="relative h-25 pt-5  text-gray-300"
              ref={heroTextRef}
            >
              <div className="text-xl  sm:text-2xl absolute">
                Software Developer by profession
              </div>
              <div className="text-xl  sm:text-2xl absolute">
                Expert at modern Frontend.
              </div>
              <div className="text-xl  sm:text-2xl absolute">
                Skilled at building Backends.
              </div>
              <div className="text-xl  sm:text-2xl absolute">
                Biker by passion.
              </div>

              <div className="text-xl  sm:text-2xl absolute">
                Gamer at heart.
              </div>
            </div>

            <div className="hero-btn flex gap-2 text-white sm:text-xl">
              <Link
                className="h-10 w-fit px-6 cursor-pointer rounded-full flex items-center bg-yellow-700 text-[0.8rem] sm:text-xl md:text-2xl font-medium"
                to="/contact"
              >
                <p>Get In Touch</p>
              </Link>
              <a
                className="h-10 w-fit px-5 cursor-pointer flex items-center rounded-full border-3 border-yellow-700 text-[0.8rem] sm:text-xl md:text-2xl font-medium"
                href={deepak_phulara_resume}
                download="Deepak_Phulara_Resume.pdf"
              >
                <p>Download Resume</p>
              </a>
            </div>
            <div className="flex flex-wrap mt-5 sm:mt-10 gap-4 sm:gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex items-center justify-center h-10 w-10 sm:w-14  sm:h-14 sm:w-16 sm:h-16 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-gray-300 transition-all duration-300 ${social.bgColor} ${social.color} hover:scale-110 hover:border-transparent active:scale-95`}
                  aria-label={social.name}
                >
                  <social.icon className="text-2xl sm:text-3xl transition-transform duration-300 group-hover:rotate-12" />

                  {/* Tooltip */}
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
        {/* <div className="bg-[#0e0e0e] w-screen  blur-sm -translate-y-7 fade-up h-10"></div> */}
        {/* <div className="bg-[#0e0e0e] w-screen  blur-lg -translate-y-5 fade-up h-5"></div> */}
      </div>
    </>
  );
};

export default HeroSection;
