import React from 'react'
import image from '../assets/logo-img2.png'

function Header() {
  return (
  <>

<header class="text-blue-900 py-1 px-6 flex items-center justify-between gap-4">

  
  <div>
    <div class="text-3xl font-bold md:text-4xl">
      All PURPOSE PTY LTD
    </div>

    <div class="text-blue-900 text-xs mt-2 font-bold">
      Cleaning Services
    </div>
  </div>

  
  <img src={image} 
       class="w-20 h-24 md:w-23 md:mr-5  object-cover" />
       
</header>


  

  </>
  )
}

export default Header