import React from 'react'
import "./heading/Headings"
import Headings from './heading/Headings'
import { FaHeart } from "react-icons/fa6";
import { GiLindenLeaf } from "react-icons/gi";
import { GiCheckedShield } from "react-icons/gi";
import { GiTreeBranch } from "react-icons/gi";
// import VegiesBasket from "../assets/image/basket-full-vegetabless"
import VegiesBasket from "../assets/image/basket-full-vegetabless.png"





const Value = () => {

  const leftRender = cards.slice(0, 2).map((card) => {

    return (
      <div className='flex md:flex-row-reverse justify-center items-center gap-5' key={card.id}>
       <div className='text-xl text-white bg-gradient-to-b from-green-500 to-green-800 rounded-full '>
         <span className=' w-[50px] h-[50px] flex justify-center items-center '>{card.icon}</span> 
        </div>
        <div className='md:text-right'>
          <h1 className='text-4xl font-bold py-3'>{card.title}</h1>
          <p className='text-zinc-600'>{card.description}</p>
        </div>

      </div>
    )
  });

  const rightRender = cards.slice(2).map((card) => {

    return (
      <div className='flex justify-center items-center gap-5' key={card.id}>
        <div className='text-xl text-white bg-gradient-to-b from-green-500 to-green-800 rounded-full '>
         <span className=' w-[60px] h-[60px] flex justify-center items-center '>{card.icon}</span> 
        </div>
        <div className=''>
          <h1 className='text-4xl font-bold py-3'>{card.title}</h1>
          <p>{card.description}</p>
        </div>

      </div>
    )
  })


  return (
    <section>
      <Headings highLight="Our" normalWord="Values" />

      <div className='max-w-[1400px] py-20 px-10 mx-auto '>


        {/* Cards Section  */}
        <div className='md:flex '>

          {/* Right Values  */}
          <div className='flex flex-col justify-around gap-15'>{leftRender}</div>

          {/* Image*/}
          <div className='md:flex w-1/2  px-10 hidden'>
            <img src={VegiesBasket} alt="image" />
          </div>

          {/* Left Values  */}
          <div className='flex flex-col justify-around gap-15 md:mt-0 mt-15 '  >{rightRender}</div>


        </div>

      </div>
    </section>
  )
}

export default Value;

const cards = [
  {
    id: 1,
    title: "Trust",
    description: "it is a long established fact that a reader will be dustract by the readable.",
    icon: <FaHeart />

  },
  {
    id: 2,
    title: "Always Fresh",
    description: "it is a long established fact that a reader will be dustract by the readable.",
    icon: <GiLindenLeaf />
  },
  {
    id: 3,
    title: "Food Sefety",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore?",
    icon: <GiCheckedShield />
  },
  {
    id: 4,
    title: "100% Organic",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, tempore?",
    icon: <GiTreeBranch />
  }
]



