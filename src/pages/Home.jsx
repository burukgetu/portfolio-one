import Footer from "../components/Footer";
// import Highlights from "../components/Highlights";
import Intro from "../components/Intro";
import IntroScreen from "../components/IntroScreen";
import Skillset from "../components/Skillset";
import Animations from "./Animations";

const Home = () => {
    return ( 
        <div className="relative">
            <IntroScreen/>
            <Intro />
            <div className="w-full pb-16 md:pb-2 flex flex-col justify-center items-center">
               {/* <p id="paragraph" className="text-2xl mt-36 indent-12 break-words hyphens-auto lg:indent-48 leading-none 
               font-light sm:text-[44px] lg:text-[64px] w-[80vw] h-auto lg:break-normal">
                       I am a creative <b>Front-End Developer</b> who crafts immersive digital experiences using <strong>React</strong>, <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. I’m passionate about clean code, user-centric design, and pushing the boundaries of what’s possible on the web.
               </p> */}
               <Animations/>
               <div className="flex justify-center items-center gap-4 my-4 md:my-10">
                 <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#F30E0E" />
                 </svg>
                 <p className="more md:text-[20px] font-[300]">Learn More</p>
               </div>
            </div>
            <Skillset />

            {/* <Highlights /> */}
            {/* <div className="flex justify-center items-center gap-4 my-10">
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
             <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="#F30E0E" />
            </svg>
            <p className="more text-[20px] font-[300]">View All</p>
            </div> */}

            <Footer />
        </div>
     );
}
 
export default Home;