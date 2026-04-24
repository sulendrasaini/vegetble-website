import React, { useState } from 'react'
import Button from "../button/Button.jsx"
import { BsHeartFill } from 'react-icons/bs'

// import ProductList from "../productList/ProductList.js"
import { FaPlus } from 'react-icons/fa'



const Card = ({image,title, price,id}) => {


    const [likedItems, setLikedItems] = useState([])


    const toggleLike = (id) => {

        if (likedItems.includes(id)) {
            setLikedItems(likedItems.filter((item) => item !== id))
        } else {
            setLikedItems([...likedItems, id])
        }
    };

        return (

            <div className='bg-zinc-200 p-3 rounded-xl ' key={id}>

                {/* Card Icon=> Heart & Plus  */}
                <div className='flex justify-between px-4 py-3'>
                    <button className={`text-2xl cursor-pointer hover:scale-120  transition duration-200 ${likedItems.includes(id) ? "text-red-600" : "bg-zinc-200"}`} onClick={() => toggleLike(id)} ><BsHeartFill /></button>
                    <button className='text-white text-xl px-4 py-2 rounded cursor-pointer bg-gradient-to-b from-green-700 to-green-900 hover:scale-105  transition duration-200'><FaPlus /></button>
                </div>

                {/* Card Content  */}
                <div className='flex flex-col gap-2 items-center'>

                    {/* Image  */}
                    <div className='px-2'>
                        <img src={image} alt="image" className='w-[40vh] h-[20vh] ' />
                    </div>
                    {/* card Content  */}
                    <h3 className='text-2xl font-bold text-zinc-700 cursor-default'>{title}</h3>
                    <span className='text-xl font-bold cursor-default'>{price}</span>
                    <div className='p-5 '> <Button content="Shop Now" /></div>

                </div>
            </div>

        )
      
};

export default Card;