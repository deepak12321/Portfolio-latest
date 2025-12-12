import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import project from "/assets/projects/project.png";
import projectData from "../../data/projectData";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-heading",
        // markers: true,
        start: "top center",
        end: "20% center",
        scrub: 1,
      },
    });
    tl.from(".project-heading-text", {
      scale: 4,
      autoAlpha: 0,
    }).from(".projects", {
      xPercent: 200,
    });
  });
  return (
    <>
      <div className="project-main-section  overflow-x-hidden overflow-y-visible py-4">
        <div className="project-sub-section">
          <div className="project-heading text-center ">
            <p className="project-heading-text uppercase text-[4rem] sm:text-[7rem] md:text-[10rem] mb-10 pt-10">
              PROjects
            </p>
            <div className="projects sm:w-[80%] m-auto flex flex-wrap gap-[5px] sm:gap-3 items-stretch justify-center ">
              {projectData.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <>
      <div className="project-card-container w-45 h-full pb-3 md:w-[20rem] border-2 rounded-3xl relative overflow-hidden flex flex-col">
        <div className="project-img  ">
          <img
            src={project.image}
            alt=""
            srcset=""
            className="w-full object-cover"
          />
        </div>
        <div className="project-desc mt-2 px-5">
          <div className="project-heading text-[1rem]  dm:text-3xl">
            {project.name}
          </div>
          <div className="project-about text-[0.7rem] pt-4 sm:text-xl text-left mt-1">
            <ul className="list-disc list-inside ">
              {project.about.map((about, index) => (
                <li className="py-1" key={index}>
                  {about}
                </li>
              ))}
            </ul>
          </div>
          <div className="project-link"></div>
        </div>
        <div className="project-tools w-45 h-full md:w-[20rem]  border-2  opacity-0 hover:opacity-95 transition-all absolute  rounded-3xl top-0 bg-violet-900 flex justify-center items-center flex-wrap">
          <div className="flex justify-center items-center flex-wrap  gap-2 sm:gap-3">
            {project.tools.map((tool, index) => {
              return (
                <span
                  key={index}
                  className="border-2 rounded-full px-3 text-[0.8rem] sm:text-2xl"
                >
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
