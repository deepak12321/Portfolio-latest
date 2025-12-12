import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import educationData from "../../data/educationData";
gsap.registerPlugin(ScrollTrigger);
const Education = () => {
  const educationImgRef = useRef();
  const educationInstRef = useRef();
  const [currentImg, setCurrentImg] = useState(educationData[0].image);

  useGSAP(() => {
    const cards = gsap.utils.toArray(educationInstRef.current.children);
    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 768px)",
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        let { isMobile, isDesktop } = context.conditions;

        ScrollTrigger.create({
          trigger: educationData.current,
          // markers: true,
          start: isDesktop ? "top 10%" : "top 30%",
          end: isDesktop ? "bottom " : "200%",
          pin: educationImgRef.current,
        });

        cards.forEach((card, index) => {
          ScrollTrigger.create({
            trigger: card,
            // markers: true,
            start: "top 50%",
            end: "bottom 50%",
            onEnter: () => {
              // Create a timeline for smooth scale + fade animation
              const tl = gsap.timeline();
              tl.to(educationImgRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.25,
                ease: "power2.in",
              })
                .call(() => {
                  setCurrentImg(educationData[index].image);
                })
                .to(educationImgRef.current, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.25,
                  ease: "power2.out",
                });
            },
            onEnterBack: () => {
              // Create a timeline for smooth scale + fade animation
              const tl = gsap.timeline();
              tl.to(educationImgRef.current, {
                opacity: 0,
                scale: 0.95,
                duration: 0.25,
                ease: "power2.in",
              })
                .call(() => {
                  setCurrentImg(educationData[index].image);
                })
                .to(educationImgRef.current, {
                  opacity: 1,
                  scale: 1,
                  duration: 0.25,
                  ease: "power2.out",
                });
            },
          });
        });
      }
    );
  });
  return (
    <>
      <div className="education-main-container mt-15 overflow-x-hidden">
        <div className="education-sub-container">
          <div className="education-headingn text-white text-7xl md:text-[17rem] text-center uppercase">
            Education
          </div>

          <div className="education-cards flex">
            <div
              className="details-section w-2/3  flex flex-col items-center"
              ref={educationInstRef}
            >
              {educationData.map((data, index) => {
                return (
                  <div key={index} className=" w-full mt-40 ">
                    <EducationCard data={data} />
                  </div>
                );
              })}
            </div>
            <div className="image-section w-1/3">
              <img
                className="h-60 flex justify-center md:h-[60%] mr-4 object-cover rounded-lg transform-gpu will-change-transform"
                src={currentImg}
                alt=""
                ref={educationImgRef}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const EducationCard = ({ data }) => {
  return (
    <>
      <div className="pl-3">
        <div className="year text-xl md:text-4xl text-gray-400">
          {data.year}
        </div>
        <div className="pl-3 md:pl-10">
          <div className="course-name uppercase text-2xl md:text-5xl ">
            {data.course}
          </div>
          <div className="institution-name uppercase text-gray-500 text-2xl md:text-5xl font-bold tracking-tighter ">
            {data.institution}
            <span className=" text-xlmd:text-4xl font-medium text-gray-400">
              {data.location}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
