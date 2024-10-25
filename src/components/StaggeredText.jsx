import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';


const StaggeredText = ({ text, from }) => {
  const textRef = useRef(null); // Create a ref to access the text element

  useEffect(() => {
    const textElement = textRef.current; // Use the ref to get the text element

    // Split the text into characters using SplitType
    const splitText = new SplitType(textElement, { types: 'chars' });

    const chars = splitText.chars; // Get the split characters

    // GSAP animation
    const timer = setTimeout(() => {
    gsap.from(chars, {
      y: 30,
      opacity: 0, // Start invisible
      duration: 0.4,
      rotateY: 90,
      rotateX: 10,
      stagger: {
        amount: 0.3, // Total staggering time
        from: from || 'end' , // Stagger from the start
        // each: (i) => Math.random() * 10, // Random stagger delay
        each: .9
      },
    });

   }, [2800])

   return () => clearTimeout(timer);

  }, []);

  return (
    <div>
      <p ref={textRef} className="overflow-hidden">
        {text}
      </p>
    </div>
  );
};

export default StaggeredText;
