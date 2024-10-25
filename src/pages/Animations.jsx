import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Animations() {

    const textRef = useRef(null);

    useEffect(() => {
        // Split the text into spans for each letter
        const textElement = textRef.current;
        const characters = textElement.textContent.split('').map((char) => {
            // Keep spaces as non-breaking spaces
            const displayChar = char === ' ' ? '&nbsp;' : char;
            return `<span style="opacity:0.1;">${displayChar}</span>`;
          });
        textElement.innerHTML = characters.join('');

    gsap.to(textElement.querySelectorAll('span'), {
        x: 0, // Moves characters to their original position
        opacity: 1, // Makes characters visible
        stagger: 0.05, // Delay between each character animation
        scrollTrigger: {
          trigger: textElement,
          start: 'top 80%', // Starts when the top of the text reaches 80% of the viewport
          end: 'top 15`%', // Ends when the bottom of the text reaches 20% of the viewport
          scrub: true, // Sync animation with scrolling
        },
      });
    }, []);


  return (
    <div className="flex items-center justify-center">
      <p ref={textRef} id="paragraph" className="text-2xl mt-36 indent-12 break-words 
      hyphens-auto lg:indent-28 leading-none font-light sm:text-[44px] lg:text-[64px] w-[80vw] h-auto lg:break-normal">
        I am a creative Full Stack Developer who crafts immersive digital experiences using
        React, HTML, CSS, and JavaScript. I’m passionate about clean code, 
        user centric design, and pushing the boundaries of what’s possible on the web.
     </p>
    </div>
  )
}

export default Animations
