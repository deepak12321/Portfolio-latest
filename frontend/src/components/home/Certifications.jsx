import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { PDFViewer } from "@react-pdf/renderer";
import PdfViewer from "../global/PdfViewer";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import certificateData from "../../data/certificatesData";

gsap.registerPlugin(ScrollTrigger);

// Worker for Vite / ESM
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Certifications = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".education-heading",
        // markers: true,
        scrub: 1,
        start: "top bottom",
        end: "top center",
      },
    });

    tl.from(".left", {
      xPercent: -200,
      scale: 2,
      rotate: -45,
      delay: 2,
      duration: 2,
    })
      .from(
        ".right",
        {
          xPercent: 200,
          scale: 2,

          rotate: 45,
          delay: 2,
          duration: 2,
        },
        0
      )
      .from(".pdf-section", {
        yPercent: 200,
      });
  });
  return (
    <div className="main-education-container overflow-hidden ">
      <div className="sub-education-container w-screen ">
        <div className="education-heading flex justify-center font-bold text-[3rem] sm:text-[7rem] md:text-[10rem] uppercase my-10 z-1 ">
          <div className="left">Certif</div>
          <div className="right">icates</div>
        </div>

        <div className="pdf-section flex flex-wrap justify-center gap-3 pb-8 w-[80%] m-auto ">
          {certificateData.map((certificate, index) => (
            <PdfViewer
              key={index}
              url={certificate.url}
              name={certificate.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
