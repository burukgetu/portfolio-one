import ScrollItems from "./ScrollItems"


function Skillset() {
  return (
    <div className="mb-20 md:mb-64 relative w-[95%] md:w-full flex flex-col items-center 
    justify-center mt-8 sm:mt-40 h-32 ">
        <div className="border-t-2 w-[99%] md:w-[95%] mb-1 -translate-y-4 translate-x-3 
        md:-translate-x-3"></div>
        <h1 className="absolute bg-black px-4 top-0 lg:-translate-y-12 text-4xl lg:text-[80px] 
        font-[400] -translate-y-2">
          My Skill set
        </h1>
        <div className="relative gap-20 lg:gap-32 overflow-hidden border-b-2 lg:h-40 w-[99%] 
        md:w-[95%] flex justify-start items-center translate-x-3 md:-translate-x-3">
          <ScrollItems />
        </div>
    </div>
  )
}

export default Skillset
