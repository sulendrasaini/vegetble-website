import React, { useState } from 'react'
import Button from "../button/Button.jsx"
import { BsHeartFill } from 'react-icons/bs'

import ProductList from "../productList/ProductList.js"
import { FaPlus } from 'react-icons/fa'



const Card = () => {


    const [likedItems, setLikedItems] = useState([])


    const toggleLike = (id) => {

        if (likedItems.includes(id)) {
            setLikedItems(likedItems.filter((item) => item !== id))
        } else {
            setLikedItems([...likedItems, id])
        }
    };



    const renderLists = ProductList.map((product) => {

        return (

            <div className='w-[30vh] bg-zinc-200 rounded-lg ' key={product.id}>

                {/* Heart & Plus Icon  */}
                <div className='flex justify-between px-4 py-3'>
                    <button className={`text-2xl cursor-pointer ${likedItems.includes(product.id) ? "text-red-600" : "bg-zinc-200"}`} onClick={() => toggleLike(product.id)} ><BsHeartFill /></button>
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
        <div className='flex gap-5 flex-wrap justify-around'>{renderLists}</div>
    )



}

export default Card;