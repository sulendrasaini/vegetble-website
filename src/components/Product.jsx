import React, { useState } from 'react'
import Headings from './heading/Headings'

const Product = () => {

    const [isActive, setIsActive] = useState("All")


  return (
    <section>
        <Headings highLight="Our" normalWord="Products"/>
        <div className='max-w-[1400px] py-20 px-10 mx-auto'>

            {/* Products Tabs */}
            <div className='flex justify-center gap-2 '>{tabs.map((tab)=>(
                 <button key={tab}className={`text-lg font-medium  px-6 py-2 rounded-lg  ${isActive === tab ? "text-white bg-gradient-to-b from-green-600 to-green-900" : "bg-zinc-200" } transition-all duration-300`}  onClick={()=>setIsActive(tab)} >
                    {tab}
                 </button>

            ))}</div>
        </div>
    </section>
  )
}

export default Product;

const tabs = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "SeaFood"
];