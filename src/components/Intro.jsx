import { FaGithub } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"
import myimage from "/my-img.png";
import StaggeredText from "./StaggeredText";
import { useEffect } from "react";
import gsap from "gsap";


function Intro() {

  useEffect(() => {
    const timer = setTimeout(() => {
    gsap.fromTo("#my-image", {
      y: 150,
      ease: "bounce.inOut",
    },
  {
    y: 0,
    duration: 1.8,
    ease: "circ.out"
  })

  gsap.fromTo("#circle", 
    {
      scale: 0, // Start scaled down
      opacity: 0, // Start invisible
    },
    {
      scale: 1, // Scale to original size
      opacity: 1, // Fade in
      duration: 1, // Animation duration
    })

    gsap.fromTo("#textFromRight", 
      {
        xPercent: 120,
      },
      {
        delay: 2,
        xPercent: 0,
      })

      gsap.fromTo("#icons", {
        rotateX: 270,
        width: 0
      }, { delay: 1, width: 32, rotateX: 0})

    }, 2700);

    return () => clearTimeout(timer);

  },[])





  return (
    <div className="relative w-full mt-20 lg:h-screen flex flex-col justify-center items-center gap-8
      lg:flex-row lg:gap-12">
      <div className="w-[284px] flex flex-col items-center gap-0 
        justify-center lg:pt-8 font-[300] z-10 overflow-hidden">
        <h1 className="text-[100px] lg:text-[110px] lg:self-end lg:tracking-none leading-[1] tracking-wide">
          {/* Biruk Getu */}
          <StaggeredText text={"Biruk Getu"} from={"end"}/>
        </h1>
        <h4 id="textFromRight" className="text-[32px] lg:text-end 
        text-center pr-1.5 w-full leading-[0.6]">
          Based in Addis Abeba, Ethiopia
        </h4>
        <div id="textFromRight" className="hidden self-end lg:flex justify-center sm:w-64 items-center">
          <svg className="avail" width="12" height="11" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
           <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="rgba(0, 255, 13, 0.8)" />
          </svg>
          <p className="more text-sm text-center w-56 sm:w-60 mt-1 sm:text-[16px] font-[300]">
            Available for a full time position
          </p>
        </div>
        <div className="flex justify-end gap-4 mt-2 lg:self-end">
          <a href={"https://github.com/burukgetu/"} target="_blank" rel="noopener noreferrer">
            <FaGithub id="icons" className="w-8 h-8"/>
          </a>
          <a href={"https://www.linkedin.com/in/biruk-getu-786048320/"} target="_blank" rel="noopener noreferrer">
            <GrLinkedin id="icons" className="w-8 h-8"/>
          </a>
        </div>
      </div>
      <div className="w-[320px] h-[320px] relative lg:w-[40vw] lg:h-[40vw] z-10">
        <div id="circle" className="absolute overflow-hidden w-[95%] h-[95%] bg-gradient-to-t 
        from-slate-400 to-red-400 rounded-full ">
          {/* <video
           className="w-full" 
           src="/Gradient.mp4"
           autoPlay loop muted
           ></video>
          <video
           className="w-full" 
           src="/Gradient.mp4"
           autoPlay loop muted
           ></video>
          <video
           className="w-full" 
           src="/Gradient.mp4"
           autoPlay loop muted
           ></video> */}
           <video src="/anim2.mp4"
            autoPlay loop muted
            className="w-full scale-[1.3]"
            ></video>
        </div>
        <div className="absolute w-full h-full rounded-full border-2
         border-red-400"></div>
        <img
           id="my-image"
           className="absolute w-full h-full rounded-full" 
           src={myimage} alt="" 
        />
      </div>
      <div className="lg:w-[280px] lg:h-[208px]">
        <h1 className="text-[60px] md:text-[80px] lg:text-[110px] font-[300] 
        leading-[.8] pt-3">
          {/* Front-End Developer */}
          <StaggeredText text={"Fullstack"} from={"start"} />
          <StaggeredText text={"Developer"} from={"end"} />
        </h1>
      </div>
  
  <img src="/anim-1.gif" className="absolute w-full h-screen opacity-20
  top-0 right-[30%] blur-lg z-0 grad-anim" />
  <img src="/anim-1.gif" className="absolute w-full h-screen opacity-20
  top-0 left-[30%] blur-lg z-0 grad-anim2" />
    </div>
  )
}

export default Intro
