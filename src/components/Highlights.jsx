

function Highlights() {
  return (
    <div className="highlights relative w-full flex items-center justify-center">
       <h1 className="absolute bg-black px-2 top-0 -translate-y-6 sm:-translate-y-8
       text-4xl lg:text-[80px] font-[400]">
        Highllights of my projects
       </h1>
      <div className=" border-t-2 w-[90%]">
        <div id="highlight" className=" relative w-full h-[500px] bg-slate-400 mt-16">
        </div>
            <img className="w-[600px] absolute " src="/p1.png" alt="" />
            <img className="w-[450px] absolute" src="/p1.png" alt="" />
            <img className="w-[200px] absolute" src="/p1.png" alt="" />
      </div>
    </div>
  )
}

export default Highlights
