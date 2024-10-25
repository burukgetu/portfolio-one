import { Link, useLocation } from "react-router-dom"


const Navbar = () => {
  const location = useLocation();

  return (
    <div className="fixed top-0 px-6 w-full pt-3 pb-6 nav  [background:linear-gradient(to_bottom,rgba(2,1,10,0.9)_70%,transparent_100%)] 
     sm:pr-12 flex justify-between lg:px-8 lg:pt-3 z-20">
      <div id="logo" className="text-3xl tracking-wide">
        BIRUK G.
      </div>
      <div id="links" className="text-2xl md:text-xl flex gap-3 lg:gap-6 tracking-widest">
        {/* <Link to='/' className="relative after:content-['*'] after:text-red-500 after:ml-1">Home</Link> */}
        <Link
           to='/'
           className={`link relative ${
             location.pathname === '/'
               ? "after:content-[''] after:block after:w-1.5 after:h-1.5 after:bg-red-400 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 lg:after:translate-y-2 pb-1"
               : ''
           }`}
        >
          <b className="link font-[300]">Home</b>
        </Link>
        
        <Link
           to='/work'
           className={`relative ${
             location.pathname === '/work'
               ? "after:content-[''] after:block after:w-1.5 after:h-1.5 after:bg-red-400 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-4"
               : ''
           }`}
        >
          <b className="link font-[300]">Work</b>
        </Link>
        
        <Link
           to='/about'
           className={`relative ${
             location.pathname === '/about'
               ? "after:content-[''] after:block after:w-1.5 after:h-1.5 after:bg-red-400 after:rounded-full after:absolute after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:translate-y-4"
               : ''
           }`}
        >
          <b className="link font-[300]">About</b>
        </Link>
        
      </div>
        
    </div>
  )
}

export default Navbar
