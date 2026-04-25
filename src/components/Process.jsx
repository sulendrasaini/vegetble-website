import React from 'react'
import Headings from './heading/Headings'

import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";

import { FaLeaf } from "react-icons/fa";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaMedal } from "react-icons/fa6";
import { RiTruckLine } from "react-icons/ri";






const Process = () => {

const renderProcess = steps.map((step) =>{

  return(
    <div  className={`md:mt-20 ${step.id % 2 === 1 ? "md:pt-50 pt-20" : " "} ${step.id % 2 === 0 ? "pt-20" : " "}`} key={step.id}>

      <div className='text-7xl w-fit mx-auto ml-27 text-zinc-800 outline-3 outline-dotted rounded-full outline-offset-8'>{step.number}</div>

      <div className='flex justify-betweenm items-center py-8'>
        <span className='text-3xl text-cente p-2 rounded-full text-white bg-gradient-to-b from-green-700 to-green-950'>{step.icon}</span>
        <div className='pl-5'>
          <h3 className='text-2xl font-bold'>{step.title}</h3>
          <p className='text-zinc-600'>{step.description}</p>
        </div>
      </div>
    </div>
  )
})

  return (
    <section> 
      <div className='max-w-[1400px] mx-auto py-20 px-10'>
        {/* Heading  */}
        <div className=' w-fit'>
      <Headings highLight="Our" normalWord="Process"/>
        </div>

        {/* Steps  */}

        <div className='md:flex justify-between'>{renderProcess}</div>


      </div>
     
    

    

   

    </section>
  )
}

export default Process;


const steps = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    icon:   <FaLeaf />,
    title: "Sourcing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sequi!"
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    icon:   <MdOutlineMapsHomeWork />,
    title: "Manufaturing",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sequi!"
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    icon:  <FaMedal />,
    title: "Quality Control",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sequi!"
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    icon:  <RiTruckLine />,
    title: "Logistics",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, sequi!"
  },

]