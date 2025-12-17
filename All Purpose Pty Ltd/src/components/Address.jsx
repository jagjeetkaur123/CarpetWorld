import React from 'react'
import image from '../assets/logo-img2.png'

function Address() {
  return (
<>
 <div className="h-1 bg-blue-700 mt-2"></div>
  <div className="h-2 bg-yellow-400 mt-1"></div>
<section class="bg-gray-100 py-6 px-4 md:px-8">
    
  <div class="flex flex-col md:flex-row items-center gap-4 ">
    
    <div class="text-gray-800 flex-1">
      <h2 class="font-bold text-lg md:text-xl lg:2xl">Our Address</h2>
      <p className='text-sm md:text-base lg:text-lg mt-2'>
      24 borthwick parade, Clyde North
      </p>
       <h3 class="mt-10 font-bold">Tony 0423317745</h3>
      <a href="https://allpurposebrisbane@gmail.com" className='text-sm md:text-base lg:text-lg mt-2 text-blue-900'>
      allpurposebrisbane@gmail.com
      </a>
    
   
    </div>

    
    
      <img src={image} alt="" class="w-100 object-cover rounded"/>

    
    </div>
  
</section>

    </>
  )
}

export default Address