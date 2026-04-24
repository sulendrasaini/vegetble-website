import React, { useState } from 'react'
import Headings from './heading/Headings'
import ProductsList from '../components/productList/ProductList.js'
import Button from "../components/button/Button.jsx"
import { BsHeartFill } from 'react-icons/bs'
import { PiPlus } from 'react-icons/pi'

import { FaPlus } from "react-icons/fa";

const Product = () => {

    const [isActive, setIsActive] = useState("All")

   const [likedItems, setLikedItems] = useState([])

   
   
   const renderLists = ProductsList.map((product) => {

        const toggleLike = (id) =>{

            if(likedItems.includes(id)) {
               setLikedItems( likedItems.filter((item) => item !==id))
            } else {
                setLikedItems([...likedItems, id])
            }
        }
               
     
        
    //    const color = ()=>{
    //      return setColorChanged(!colorChanged)
    //    };
     
        return (
            <div className='w-[30vh] bg-zinc-200 rounded-lg ' key={product.id}>

                {/* Heart & Plus Icon  */}
                <div className='flex justify-between px-4 py-3'>
                    <button className={`text-2xl cursor-pointer ${likedItems.includes(product.id) ? "text-red-600": "bg-zinc-200"}`} onClick={()=>toggleLike(product.id)} ><BsHeartFill /></button>
                    <button className='text-white text-lg p-2 py-1 rounded cursor-pointer bg-green-600'><FaPlus /></button>
                </div>
 
                  {/* Card Content  */}
                <div className='flex flex-col gap-2 items-center'>

                    {/* Image  */}
                    <div className='px-3'>
                        <img src={product.image} alt="image" className='w-[40vh] h-[20vh] ' />
                    </div>
                    {/* Content  */}
                    <h3 className='text-lg font-bold text-zinc-700 cursor-default'>{product.title}</h3>
                    <span className='font-bold cursor-default'>{product.price}</span>
                    <div className='p-5 '> <Button content="Shop Now" /></div>
                   
                </div>
            </div>
        )
    });


    return (
        <section>
            <Headings highLight="Our" normalWord="Products" />
            <div className='max-w-[1400px] py-20 px-10 mx-auto'>

                {/* Products Tabs */}
                <div className='flex justify-center gap-2 py-20'>{tabs.map((tab) => (
                    <button key={tab} className={`text-lg font-medium  px-6 py-2 rounded-lg cursor-pointer ${isActive === tab ? "text-white bg-gradient-to-b from-green-600 to-green-900" : "bg-zinc-200"} transition-all duration-300`} onClick={() => setIsActive(tab)} >
                        {tab}
                    </button>

                ))}</div>

                {/* Product List  */}

                <div className='flex gap-5 flex-wrap justify-around'>{renderLists}</div>
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