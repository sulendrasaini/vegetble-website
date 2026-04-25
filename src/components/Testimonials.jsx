import React from 'react'
import Headings from './heading/Headings'
import customer1 from "../assets/image/customer1.jpg"
import customer2 from "../assets/image/customer2.jpg"
import customer3 from "../assets/image/customer3.jpg"
import customer4 from "../assets/image/customer4.jpg"
import customer5 from "../assets/image/customer5.jpg"

import { MdOutlineStarPurple500 } from "react-icons/md";

import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";






const Testimonials = () => {

    
    const renderReview = CustomerReviews.map((item) => {
        return (
            <div className='bg-zinc-200 py-10 px-10 rounded-xl' key={item.id}>
                <div className='md:flex gap-5'>
                    {/* Image  */}
                    <div className=''>
                        <img src={item.image} alt="image" className='outline-2 outline-offset-5 outline-green-800 w-15 h-15 rounded-full' />
                    </div>
                    {/* customer Detail  */}
                    <div className='flex flex-col '>
                        <h4 className=' text-2xl font-bold cursor-default'>{item.name}</h4>
                        <span className='text-[12px] text-zinc-600 cursor-default hover:text-black'>{item.pessation}</span>
                        <span className='flex text-lg py-2 cursor-pointer text-yellow-400'>{item.rating}{item.rating}{item.rating}{item.rating}{item.rating}</span>

                    </div>
                </div>

                <div className='text-zinc-600 text-[14px]'>{item.description}</div>

            </div>
        )

    });

    return (
        <section>
            <div className='max-w-[1400px] mx-auto py-20 px-10'>
                <Headings highLight="Customers" normalWord="Saying" />


                    
                <div className='  flex justify-between mt-20 '>
                    <FaArrowCircleLeft className='text-5xl p-2 rounded-lg  bg-zinc-200 hover:scale-110' />
                    <FaArrowCircleRight  className='text-5xl p-2 rounded-lg  bg-zinc-200 hover:scale-110 '/>
                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5'>
                    {renderReview}
                </div>
                
            </div>
        </section>
    )
}

export default Testimonials;

const CustomerReviews = [
    {
        id: 1,
        image: customer1,
        name: "Aligabil",
        pessation: "Food Vlogger",
        rating: <MdOutlineStarPurple500 />,
        description: "Lorem iis enim, placeat sit ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta pedita sint assumenda est ipsa cumque suscipit esse. Placeat minus."
    },
    {
        id: 2,
        image: customer2,
        name: "jeck",
        pessation: "Chef",
        rating: <MdOutlineStarPurple500 />,
        description: "Lorem placeat sit d voluptatibus molestiae, expedita sint assumenda est ipsa cumque suscipit esse. Placeat minus aliquid eos est soluta."
    },
    {
        id: 3,
        image: customer3,
        name: "Alyna shefi",
        pessation: "Foody",
        rating: <MdOutlineStarPurple500 />,
        description: "Lorem  deserunt velit nobis, veritatis facere. Officiis enim, placeat sit ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
    {
        id: 4,
        image: customer4,
        name: "Devid",
        pessation: "Vlogger",
        rating: <MdOutlineStarPurple500 />,
        description: "Lorem udantium quas qui eum tvoluptatibus molestiae, expedita sint ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
    {
        id: 5,
        image: customer5,
        name: "Tavi smith",
        pessation: "Travelar",
        rating: <MdOutlineStarPurple500 />,
        description: "Lorem pellendus quos vel de facere. Officiis enim, placeat sit ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
]