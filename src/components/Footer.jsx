import { FaGithub, FaGoogle } from "react-icons/fa"
import { GrLinkedin } from "react-icons/gr"


function Footer() {
  return (
    <div className="w-full flex flex-col justify-center items-center md:mt-80">
      <div className="flex sm:gap-4 flex-col justify-center items-center border-2 
      border-gray-500 md:w-[90%] py-4 lg:py-6 rounded-3xl">
        <h1 className="opacity-48 w-[95%] text-3xl text-center lg:text-[64px] 
        sm:text-5xl">
          Let&lsquo;s connect and create something great together!
        </h1>
        <p className="text-lg sm:text-[20px] font-[300] opacity-[70%] tracking-widest">
          Open to exciting opportunities – feel free to reach out.
        </p>
        <div className="flex justify-center items-center gap-8">
           <GrLinkedin className="w-10 h-10 my-3"/>
           <FaGoogle className="w-10 h-10 my-3" />
           <FaGithub className="w-10 h-10 my-3 "/>
        </div>
        <div className="flex justify-center  sm:w-80 items-center">
          <svg className="avail" width="16" height="16" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
           <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="rgba(0, 255, 40, 0.8)" />
          </svg>
          <p className="more text-sm text-center w-56 sm:w-80 sm:text-[20px] font-[300]">
            Available for a full time position
          </p>
        </div>
      </div>
      <div className="w-[90%] h-16 flex justify-between items-center">
        <p className="text-[3vw] md:text-[20px] font-[inter] tracking-wider font-light">©2024 Biruk G.</p>
        <p className="text-[4vw] lg:text-3xl tracking-wider font-light">Made by Biruk</p>
      </div>
    </div>
  )
}

export default Footer
