import React from 'react'
import Headings from './heading/Headings'
import FruitsBasket from '../assets/image/fruits-and-Vegiess.png'
import DairyBasket from '../assets/image/dairy-and-eggss.png'
import MeatBasket from '../assets/image/meat-and-seafoodd.png'
import { Link } from 'react-router-dom'

const Category = () => {

  const renderCards = categories.map((card ) => {

    return(
      <div className='flex-1  ' key={card.id}>
        {/* Card Image */}
      <div className=' w-auto h-[40vh]  relative'>
         <img src={card.image} alt="image"  className='absolute -bottom-6   '/>
      </div>

      {/* Card Content */}
       <div className='bg-zinc-100 rounded-xl px-10 py-10  '>
      <h1 className='text-4xl text-zinc-800 font-bold pt-5 '>{card.title}</h1>
      <p className='py-5 text-zinc-600 mb-5 text-lg leading-6 '>{card.description}</p>
      <Link to={card.path} className='text-white bg-gradient-to-b from-green-700 to-green-900 py-3 px-8 rounded-lg md:text-lg text-md   font-semibold hover:shadow-2 xl hover:scale-105 hover:to-green-950 transition-all duration-200 cursor-pointer'>See All</Link>
      </div>
      
      
      </div>

    )
  });


  return (
    <section>
      <div className='max-w-[1400px] mx-auto py-20 px-10 '>

        {/*** Heading  ****/}
        <Headings highLight="Shop" normalWord="by Category" />

        {/* CategoryCards */}
        <div className='flex flex-wrap gap-5 md:py-20 py-1'>
           {renderCards}
           
        </div>
      </div>
    </section>
  )
}

const categories = [
  {
    id: 1,
    title: "Fruits & veggies",
    description: "Fresh and organic produce sourced daily from local farms, Explore a wide range of seasonal fruits and crisp vegetavles.",
    image: FruitsBasket,
    path: "/fruits"
  },
  {
    id:2,
    title:"Dairy & Eggs",
    description:"wholesome dairy products and free-range eggs. from creamy milk and yogury to artisanal cheese.",
    image: DairyBasket,
     path: "/dairyProduct"
  },
  {
    id:3,
    title:"Meat & SeaFood",
    description:"high-Quality, responsblity sourced meat and seafood. choose fro each cuts, marinated options and more.",
    image: MeatBasket,
     path: "/seaFood"
  }

]

export default Category;