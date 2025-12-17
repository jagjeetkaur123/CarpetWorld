import React from 'react'
import image from '../assets/logo-img2.png'

function Aboutus() {
  return (
    <>
        
    <div className="w-full mt-2">
  <div className="h-1 bg-blue-700"></div>
  <div className="h-2 bg-yellow-400 mt-1"></div>
</div>
<section className="bg-gray-100 py-4 px-4 md:px-8">
  <div className="flex flex-col md:flex-row gap-6 min-h-[420px]">

    {/* LEFT COLUMN – Yellow Background */}
    <div className="flex-1 bg-yellow-300 p-4 md:p-6 rounded">
      <h2 className="font-bold text-lg md:text-xl mb-3 text-blue-900 ">
        Our Services
      </h2>

      {/* 6 lines */}
      <ul className="space-y-1 text-sm md:text-base text-gray-800 font-bold">
        <li>• Residential Cleaning</li>
        <li>• Office Cleaning</li>
        <li>• Deep Cleaning</li>
        <li>• Move-in/Move-out Cleaning</li>
        <li>• Construction cleaning</li>
        <li>• Air bnb Cleaning</li>
      </ul>

      {/* small paragraph */}
      <p className="mt-4 text-sm md:text-base text-gray-700 font-bold">
      20% OFF your first clean Start your experience with All Purpose Pty Ltd and enjoy a spotless home or office at a Welcome price.
      </p>
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex-1 text-gray-800">
      <h2 className="font-bold text-lg md:text-xl mb-3 text-blue-900">
        About Us
      </h2>

      <p className="text-sm md:text-base text-gray-600 leading-relaxed">
      At All Purpose Pty Ltd, we believe a clean space creates a better life. We are a trusted, locally operated cleaning service dedicated to providing high-quality, reliable, and affordable cleaning solutions for homes and businesses.
      </p>

      {/* small logo */}
      <img
        src={image}
        alt="Logo"
        className="w-24 mt-4 object-contain"
      />
       <a href="https://allpurposebrisbane@gmail.com" className='text-sm md:text-base lg:text-lg mt-2 text-blue-900'>
      allpurposebrisbane@gmail.com
      </a>
       <h3 class="mt-5 font-bold">Tony 0423317745</h3>
     
    </div>
     

  </div>
</section>

    
    </>
  )
}

export default Aboutus