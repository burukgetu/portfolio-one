

function Availability() {
  return (
    <div className="h-screen flex items-center">
      <div className="flex justify-center  sm:w-80 items-center">
          <svg className="avail"
           width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
           <ellipse cx="8" cy="7.5" rx="8" ry="7.5" fill="rgba(0, 255, 40, 0.8)" />
          </svg>
          <p className="more text-sm text-center w-56 sm:w-80 sm:text-[20px] font-[300]">
            Available for a full time position
          </p>
        </div>
    </div>
  )
}

export default Availability
