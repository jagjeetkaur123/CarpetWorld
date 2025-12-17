import React from 'react'

function Services() {
  return (
    <>
     <div className="h-1 bg-blue-700 mt-2"></div>
  <div className="h-2 bg-yellow-400 mt-1"></div>
   <section className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6">
          Professional Services We Provide
        </h2>

        {/* GRID SETTINGS */}
        {/* Mobile = 2 columns | Desktop = 2 columns but last item full width */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-gray-800">

          {/* Residential */}
          <div className="md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Residential Cleaning Services
            </h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Regular house cleaning</li>
              <li>• Deep / spring cleaning</li>
              <li>• End-of-lease cleaning</li>
              <li>• Kitchen & bathroom detailing</li>
              <li>• Carpet steam cleaning</li>
              <li>• Window cleaning (internal & external)</li>
              <li>• Oven & rangehood cleaning</li>
              <li>• Upholstery cleaning</li>
            </ul>
          </div>

          {/* Commercial */}
          <div className="md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Commercial & Office Cleaning
            </h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Routine office cleaning</li>
              <li>• Workplace sanitisation</li>
              <li>• Restroom cleaning & restocking</li>
              <li>• Floor vacuuming and mopping</li>
              <li>• Rubbish removal</li>
              <li>• Meeting room & reception cleaning</li>
            </ul>
          </div>

          {/* Lawn – FULL WIDTH ON DESKTOP */}
          <div className="col-span-2 md:col-span-2 md:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              Lawn & Outdoor Maintenance
            </h3>
            <ul className="space-y-1 text-sm md:text-base">
              <li>• Lawn mowing & edging</li>
            </ul>
          </div>

        </div>
      </div>
    </section>


    </>
  )
}

export default Services