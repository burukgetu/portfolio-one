import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const SplashScreen = () => {
  const [show, setShow] = useState(true);
  const textRef = useRef(null);
  const splashRef = useRef(null);

  // Array of "Hello" in different languages
  const languages = [
    'Hello', // English
    'ሰላም', // Amharic
    'Bonjour', // French
    'Hallo', // German
    'Ciao', // Italian
    'こんにちは', // Japanese
    '你好', // Chinese
    '안녕하세요', // Korean
    'Olá', // Portuguese
    'Привет', // Russian
    'Merhaba', // Turkish
    'שלום', // Hebrew
    'नमस्ते', // Hindi
    'Asalaam alaikum', // Arabic
    'ሰላም', // Amharic
  ];

  useEffect(() => {
    let index = 0;

    // Function to change the displayed text
    const changeText = () => {
      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        onComplete: () => {
          // Change to the next language
          if (index < languages.length) {
            textRef.current.textContent = languages[index];
            index++;
            
            // Fade-in animation
            gsap.fromTo(textRef.current, 
              { opacity: 0 }, 
              { opacity: 1, duration: 0.3 }
            );
          } else {
            index = 0; // Reset index if you want to loop through the languages
          }

          // If all languages have been displayed, start the outro animation
          if (index === languages.length) {
            // Delay slightly to let the last word display before animating out
            gsap.to(splashRef.current, {
              y: '200%',
              scaleY: 1.5,
              duration: 1,
              delay: 0.1,
              
              onComplete: () => setShow(false)
            });
          }
        }
      });
    };

    // Set an interval to change the text every 133ms
    const interval = setInterval(() => {
      changeText();
    }, 133);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  if (!show) {
    return null;
  }

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
    >
      <div className="cssanimation text-6xl opacity-40 font-[inter] font-[700] text-white text-center" ref={textRef}>
        Hello
      </div>
    </div>
  );
};

export default SplashScreen;
