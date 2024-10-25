import { useEffect, useRef, useState } from "react"
import Projects from "../components/Projects"
import Sidebar from "../components/Sidebar"

const AdventureHub = 
  {
    title: "Adventure Hub",
    description: "A dynamic tour and travel web app that lets users explore destinations with an embedded map, book tours, and pay online via Stripe. Features personalized tour suggestions, detailed tour info, and secure user authentication with email verification and password recovery. Built with React, Next.js, Express, and MongoDB.",
    link: "https://adventurehub.vercel.app/",
    images: ["/p1.png", "/project-images/Ah-2.png", "/project-images/Ah-3.png"]
  }

  const Coursednet = 
  {
    title: "Coursednet",
    description: "a dynamic e-learning platform where instructors effortlessly create and manage courses, monitor student engagement, and track revenue. Students can explore a wide range of courses with advanced category filtering, preview content through engaging video snippets, and easily purchase their favorites. With seamless PayPal integration for online payments and automatic progress tracking, Coursednet transforms the learning experience into an intuitive journey!",
    link: "",
    images: ["/project-images/Cr-1.png", "/project-images/Cr-2.png", "/project-images/Cr-3.png"]
  }

  const ShopSavvy = 
  {
    title: "ShopSavvy",
    description: "your ultimate price tracking companion for Amazon products! Simply input any product link, and ShopSavvy continuously monitors its price, calculating the average over time. When prices drop or discounts are detected, you'll receive timely email alerts, making it easier than ever to snag the best deals. Built with HTML, CSS, JavaScript, React, Next.js, and Cheerio, ShopSavvy revolutionizes your shopping experience by ensuring you never miss a price drop!",
    link: "https://shop-savvy-b.vercel.app/",
    images: ["/project-images/Ss-1.png", "/project-images/Ss-2.png", "/project-images/Ss-2.png"]
  }
  
  const AppleClone = 
  {
    title: "Iphone clone",
    description: "a stunning clone inspired by Apple’s sleek design! This project features an impressive UI that captures the essence of modern minimalism, utilizing 3D elements built with React and Three.js for a captivating user experience. With HTML, CSS, JavaScript, and GSAP for smooth animations, every detail is meticulously crafted to draw users into the world of the iPhone 15 Pro. This clone not only showcases the product beautifully but also reflects my passion for creating engaging, high-quality web experiences!",
    link: "https://apple-website-clone-mu.vercel.app",
    images: ["/project-images/Ic-1.png", "/project-images/Ic-2.png", "/project-images/Ic-3.png"]
  }
  
  const Landvibe = 
  {
    title: "Landvibe",
    description: "a sleek and user-friendly real estate landing page designed to connect buyers with their dream properties! Built with just HTML, CSS, and JavaScript, this responsive site features an inviting layout, showcasing stunning property images and essential details in a clean, modern format. Users can easily navigate through listings, access property information, and get in touch with agents seamlessly. With a focus on aesthetics and functionality, Landvibe is the perfect starting point for anyone looking to dive into the world of real estate!",
    link: "https://land-vibe.vercel.app/",
    images: ["/project-images/Lv-1.png", "/project-images/Lv-2.png", "/project-images/Lv-3.png"]
  }

  


const Work = () => {

  const [activeProject, setActiveProject] = useState('');
  const projectRefs = useRef([]);

  const scrollToProject = (projectId) => {
    const project = projectRefs.current.find(ref => ref && ref.id === projectId);
    if (project) {
      project.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveProject(entry.target.id);
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);


  return (
    // <div>
    //   <div className="flex justify-center items-center flex-col font-[300] h-[400px]">
    //     <h1 className="text-[128px] leading-none">Selected works</h1>
    //     <p className="text-[40px] leading-none tracking-[2vw] opacity-60">A Glimpse Into My Craft</p>
    //   </div>
    //   <div className="flex relative">
    //     <Sidebar />
    //     <div className="h-[1000px] bg-red-600 w-[75vw]"></div>
    //   </div>
    // </div>
    <div>
      <div className="flex justify-center items-center flex-col font-[300] 
      pt-24 sm:py-40 md:h-[400px]">
        <h1 className="text-[90px] md:text-[128px] leading-none">
          Selected works
        </h1>
        <p className="text-[25px] md:text-[40px] leading-none tracking-[2vw] opacity-60">
          A Glimpse Into My Craft
        </p>
      </div>
      <div className="flex w-full">
        <div className="hidden sticky top-0 h-screen w-[25vw] md:flex">
          <Sidebar scrollToProject={scrollToProject} activeProject={activeProject} />
        </div>
        <div className="w-full md:overflow-y-auto overflow-x-hidden md:w-[73vw] md:h-screen scroll
        scrollbar-thin scrollbar-thumb-rounded scrollbar-track-black scrollbar-thumb-gray-500">
          <div className="h-[2500px]">
          <div id="AdventureHub" ref={(el) => (projectRefs.current[0] = el)}>
              <Projects project={AdventureHub} images={AdventureHub.images} />
            </div>
            <div id="Coursednet" ref={(el) => (projectRefs.current[1] = el)}>
              <Projects project={Coursednet} images={Coursednet.images} />
            </div>
            <div id="ShopSavvy" ref={(el) => (projectRefs.current[2] = el)}>
              <Projects project={ShopSavvy} images={ShopSavvy.images} />
            </div>
            <div id="AppleClone" ref={(el) => (projectRefs.current[3] = el)}>
              <Projects project={AppleClone} images={AppleClone.images} />
            </div>
            <div id="Landvibe" ref={(el) => (projectRefs.current[4] = el)}>
              <Projects project={Landvibe} mb="42" images={Landvibe.images} />
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default Work
