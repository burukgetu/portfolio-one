import Footer from "../components/Footer"


function About() {
  return (
    <div className="lg:mt-20 about w-full">
      <div className="lg:h-screen flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-[40%] w-full flex flex-col items-center :lg:items-start
        gap-4">
          <h1 className="text-5xl sm:text-8xl sm:mt-16 lg:text-[120px] font-[300] self-center">About Me</h1>
          <div className="flex flex-col-reverse gap-4 justify-center items-center">
          <p className="text-3xl sm:text-3xl max-w-[90%] lg:text-[40px] font-[300] leading-none
           text-center lg:text-start">
            Hi, I&lsquo;m Biruk – a passionate Front-End Developer 
            and Computer Science graduate who loves bringing ideas to life on the web. I blend clean code with creative design to craft engaging digital experiences. Always eager to 
            learn, innovate, and push the boundaries of web development.
          </p>
          <img
            src="/undraw_programming_re_kg9v.svg" 
            alt="" 
            className="lg:hidden w-[45%]" 
          />
          </div>
          <div className="flex justify-center items-center gap-4 lg:my-10">
            <svg className="avail" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
             <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="rgba(0, 255, 40, 0.8)" />
            </svg>
            <p className="more lg:text-[20px] font-[300]">Available for a full time position</p>
          </div>
        </div>
        <img
          src="/undraw_programming_re_kg9v.svg" 
          alt="" 
          className="hidden lg:block w-[45%]" />
      </div>

      <div className="max-h-screen p-4 lg:p-20 flex flex-col lg:gap-5 
      items-center">
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="md:text-2xl text-gray-500">about</h1>
          <p className="w-[92%] h-[0.1px] md:h-0.5 bg-gray-500"></p>
        </div>
        <h1 className="text-4xl md:text-6xl self-start lg:mt-4">Skills</h1>
        <div className="flex justify-end gap-4 
        md:gap-4 ml-6 sm:ml-0">
          <div>
            <h1 className="text-[7vw] md:text-6xl font-[300] tracking-widest 
            lg:mb-6">Technical skills</h1>
            <div className="text-[3.7vw] pl-3 md:pl-12 md:text-4xl font-[300] 
            tracking-widest flex flex-col lg:gap-2">
              <p>Structuring and styling web pages</p>
              <p>creating user-friendly interfaces</p>
              <p>Adding interactivity and dynamic content</p>
              <p>Responsive Website</p>
            </div>
          </div>
          
          <div>
            <h1 className="text-[7vw] md:text-6xl font-[300] tracking-widest lg:mb-6">Soft skills</h1>
            <div className="text-[4vw] pl-3 md:pl-12 md:text-4xl lg:gap-2 font-[300] tracking-widest flex flex-col">
              <p>Problem-solving</p>
              <p>Collaboration and teamwork</p>
              <p>Attention to detail</p>
              <p>Adaptability</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-4 gap-8 lg:p-20">
        <div className="w-full flex justify-between items-center">
           <h1 className="md:text-2xl text-gray-500">about</h1>
           <p className="w-[92%] h-[0.1px] md:h-0.5 bg-gray-500"></p>
        </div>

        <div className="w-full lg:max-h-[400px] flex gap-8 sm:gap-12 lg:gap-20 lg:p-5 
        justify-start mb-32 lg:mb-0">
          <h1 className="text-2xl sm:text-5xl lg:text-[440%] tracking-wider">ToolBox</h1>
          <div className="flex flex-wrap text-xl gap-2 lg:gap-8 tracking-widest lg:mt-2
          lg:text-[440%] font-[400] w-[70%] sm:text-4xl sm:w-[70%] lg:w-[70%] 
          max-h-32 items-center lg:gap-y-12">
            <p>HTML</p>
            <img src="/reddot.svg" alt="" />
            <p>CSS</p>
            <img src="/reddot.svg" alt="" />
            <p>Javascript</p>
            <img src="/reddot.svg" alt="" />
            <p>React</p>
            <img src="/reddot.svg" alt="" />
            <p>Tailwind</p>
            <img src="/reddot.svg" alt="" />
            <p>Next</p>
            <img src="/reddot.svg" alt="" />
            <p>Redux</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About
