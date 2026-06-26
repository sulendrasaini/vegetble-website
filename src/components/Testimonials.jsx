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


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';






const Testimonials = () => {


    // const renderReview = CustomerReviews.map((item) => {
    //     return (
    //         <div className='bg-zinc-200 py-10 px-10 rounded-xl' key={item.id}>
    //             <div className='md:flex gap-5'>
    //                 {/* Image  */}
    //                 <div className=''>
    //                     <img src={item.image} alt="image" className='outline-2 outline-offset-5 outline-green-800 w-15 h-15 rounded-full' />
    //                 </div>
    //                 {/* customer Detail  */}
    //                 <div className='flex flex-col '>
    //                     <h4 className=' text-2xl font-bold cursor-default'>{item.name}</h4>
    //                     <span className='text-[12px] text-zinc-600 cursor-default hover:text-black'>{item.pessation}</span>
    //                     <span className='flex text-lg py-2 cursor-pointer text-yellow-400'>{item.rating}{item.rating}{item.rating}{item.rating}{item.rating}</span>

    //                 </div>
    //             </div>

    //             <div className='text-zinc-600 text-[14px]'>{item.description}</div>

    //         </div>
    //     )

    // });

    return (
        <section>
            <div className='max-w-[1400px] mx-auto py-10 px-10'>
                <Headings highLight="Customers" normalWord="Saying" />



                <div className='  flex justify-between mt-8 mb-5'>
                    <FaArrowCircleLeft className='costum-prev text-5xl text-zinc-800 p-2 rounded-lg  bg-zinc-200 hover:scale-110 hover:bg-zinc-300' />
                    <FaArrowCircleRight className='costum-next text-5xl text-zinc-800 p-2 rounded-lg  bg-zinc-200 hover:scale-110 hover:bg-zinc-300' />
                </div>
                {/* <div className='grid md:grid-cols-3 grid-cols-1 gap-5 py-5'>
                    {renderReview}
                </div> */}

                <Swiper navigation={{
                    nextEl: ".costum-next",
                    prevEl: ".costum-prev"
                }}
                    loop={true}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        768: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    modules={[Navigation]} className="mySwiper mb-15">
                    {CustomerReviews.map((item) => {
                        return (
                            <SwiperSlide className='bg-zinc-200 py-10 px-10 rounded-xl pt-15' key={item.id}>
                                <div className='flex gap-5 '>
                                    {/* Image  */}
                                    <div className=''>
                                        <img src={item.image} alt="image" className='outline-2 outline-offset-5 outline-green-800 w-16 h-16 rounded-full' />
                                    </div>
                                    {/* customer Detail  */}
                                    <div className='flex flex-col  '>
                                        <h4 className=' text-2xl font-bold pl-1 cursor-default'>{item.name}</h4>
                                        <span className='text-[12px] text-zinc-600 pl-1 cursor-default hover:text-black'>{item.pessation}</span>
                                        <span className='flex text-2xl py-2  cursor-pointer text-yellow-400'>{Array.from({ length: item.rating }, (_, index) => (<MdOutlineStarPurple500 />))}</span>

                                    </div>
                                </div>

                                <p className='text-zinc-600 text-[14px] min-h-[15vh]'>{item.description}</p>

                            </SwiperSlide>

                        )
                    })}


                </Swiper>

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
        rating: 3,
        description: "Lorem iis enim, obcaecati suscipit esse. Placeat minus aliquid eos est soluta pedita sint assumenda est ipsa cumque suscipit esse.Placeat minus aliquid eos est soluta pedita sint assumenda est ipsa Placeat minus."
    },
    {
        id: 2,
        image: customer2,
        name: "jeck",
        pessation: "Chef",
        rating: 4,
        description: "Lorem placeat sit d voluptatibus molestiae, expedita sint assumenda est ipsa cumque suscipit esse.Lorem placeat sit d voluptatibus molestiae, expedita sint assumenda est ipsa cumque suscipit esse.   Placeat minus aliquid eos est soluta."
    },
    {
        id: 3,
        image: customer3,
        name: "Alyna shefi",
        pessation: "Foody",
        rating: 2,
        description: "Lorem  deserunt velit nobis, veritatis facere. Officiis enim, placeat sit ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
    {
        id: 4,
        image: customer4,
        name: "Devid",
        pessation: "Vlogger",
        rating: 5,
        // rating: <MdOutlineStarPurple500 />,
        description: "Lorem udantium quas qui eum tvoluptatibus molestiae, expedita sint ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
    {
        id: 5,
        image: customer5,
        name: "Tavi smith",
        pessation: "Travelar",
        rating: 1,
        description: "Lorem pellendus quos vel de facere. Officiis enim, placeat sit ducimus sapiente obcaecati suscipit esse. Placeat minus aliquid eos est soluta."
    },
]