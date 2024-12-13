/* eslint-disable react/prop-types */
import { useState, useRef, useEffect } from "react";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
import { MdOutlineArrowOutward } from "react-icons/md";
import { gsap } from "gsap";

const Projects = ({ project, images = [] }) => {
  // const images = ["/p1.png", "/p1.png", "/p1.png"]; // Array of image sources
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);

  useEffect(() => {
    // Position images initially
    positionImages();
  }, [currentIndex]);

  // Function to position the images for the carousel effect
  const positionImages = () => {
    imageRefs.current.forEach((img, index) => {
      const diffIndex = (index - currentIndex + images.length) % images.length;
      let xPos = 0;
      let scale = 1;
      let opacity = 1;
      let blur = 0;
      let zIndex = 1;

      if (diffIndex === 0) {
        // Center image
        xPos = 0;
        if (window.innerWidth < 600) {
        scale = 2.8;
        } else if (window.innerWidth < 400) {
          scale = 1;
        } else {
          scale = 1.7;
        }
         
        opacity = 1;
        blur = 0;
        zIndex = 2; // Higher z-index for the center image
      } else if (diffIndex === 1 || diffIndex === -2) {
        // Right image
        xPos = 200;
        scale = 0.8;
        opacity = 0.6;
        blur = 5;
        zIndex = 1;
      } else {
        // Left image
        xPos = -200;
        scale = 0.8;
        opacity = 0.6;
        blur = 5;
        zIndex = 1;
      }

      gsap.to(img, {
        x: xPos,
        scale: scale,
        opacity: opacity,
        filter: `blur(${blur}px)`,
        zIndex: zIndex,
        duration: 0.5,
        ease: "power2.inOut",
      });
    });
  };

  // Function to change the image index
  const changeImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % images.length
        : (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div
        className={`w-full lg:max-h-[500px] mt-20 md:max-h-[340px] 
      flex justify-around lg:justify-center lg:gap-40`} 
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl">
          {project.title}
        </h1>
        <div
          className="max-w-[55vw] md:max-w-[48vw] sm:max-w-80 lg:max-w-[50%] flex flex-col 
        gap-1 lg:gap-3"
        >
          <p
            className="leading-[4vw] pt-2 text-[3vw] sm:text-2xl 
           lg:text-2xl font-[300] font-[inter]"
          >
            {project?.description}
          </p>
          <a href={`${project?.link}`} target="_blank" rel="noopener noreferrer">
          <MdOutlineArrowOutward className="sm:text-5xl md:text-5xl mb-12" />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-center
       w-full lg:h-[20vw] h-[200px] relative ">
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            className="absolute left-[50%] w-[30%] lg:w-[30%]"
            style={{  transform: "translateX(-50%)" }}
            alt={`Slide ${index}`}
          />
        ))}
      </div>
      <div className="flex justify-between md:gap-4 lg:w-[10%] mt-4">
        <IoIosArrowDropleftCircle
          className="text-[50px] md:text-5xl cursor-pointer"
          onClick={() => changeImage("prev")}
        />
        <IoIosArrowDroprightCircle
          className="text-[50px] md:text-5xl cursor-pointer"
          onClick={() => changeImage("next")}
        />
      </div>
      <p className="bg-gray-600 h-0.5 w-[90%] lg:mt-12"></p>
    </div>
  );
};

export default Projects;
