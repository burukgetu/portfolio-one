import gsap from "gsap";
import { useEffect, useRef } from "react"


function ScrollItems() {
    const containerRef = useRef(null);

    useEffect(() => {
        let animationDistance;

        // Determine animation distance based on screen width
        if (window.innerWidth < 768) {
          animationDistance = -1075; // Small screen
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
          animationDistance = -1297; // Medium screen
        } else {
          animationDistance = -1965; // Large screen
        }

        gsap.to(containerRef.current, {
            x: animationDistance,
            ease: 'none',
            duration: 20,
            repeat: -1
        })
    },[])

  return (
    <div ref={containerRef} className="flex gap-20 md:gap-28 w-auto lg:gap-32 lg:h-40 
          justify-start items-center">
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/html.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">HTML5</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/CSS3.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">CSS3</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/JavaScript.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">JavaScript</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/React.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">React</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24 bg-white rounded-full" src="/tech-icons/Next.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">Next</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/Tailwind.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">Tailwind</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/Redux.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">Redux</p>
            <img src="/reddot.svg" alt="" />
          </div>
          
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/html.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">HTML5</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/CSS3.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">CSS3</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/JavaScript.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">JavaScript</p>
            <img src="/reddot.svg" alt="" />
          </div>
          <div className="flex justify-start items-center gap-3 lg:gap-6 z-10 mb-3">
            <img className="w-12 lg:w-24" src="/tech-icons/React.svg" alt="" />
            <p className="text-3xl lg:text-[64px] ">React</p>
            <img src="/reddot.svg" alt="" />
          </div>
    </div>
  )
}

export default ScrollItems
