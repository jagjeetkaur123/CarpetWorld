import React from 'react'
import img1 from '../assets/image copy 2.png'
import img2 from '../assets/image copy 3.png'

function Hero() {
  return (
    <>
    <div>
    
    <div className="w-full mt-4">
  <div className="h-1 bg-blue-700"></div>
  <div className="h-2 bg-yellow-400 mt-1"></div>
</div>
<div className="flex flex-col md:flex-row mt-4 gap-2 px-4 md:px-6">
  <img src={img1} alt="Image 1" className="w-full  md:w-1/2 object-cover rounded md:pr-2"/>
  <img src={img2} alt="Image 2" className="w-full md:w-1/2 object-cover rounded md:pr-2"/>
</div>

</div>



</>

    
  )
}

export default Hero