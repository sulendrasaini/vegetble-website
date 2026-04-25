import React from 'react'
import Button from './button/Button';
import Discount_image from '../assets/image/discount-bannerr.png'

const Discount = () => {
    return (
        <section className='bg-zinc-200 bg-blend-color-burn bg-cover bg-no-repeat bg-right ' style={{backgroundImage: `url(${Discount_image})`}}>
            <div className=' md:flex max-w-[1400px] mx-auto '>
                <div className=' md:text-9xl text-6xl md:text-start text-center font-bold md:rotate-270 md:h-fit self-center text-green-900'>20%</div>

                <div className='flex justify-between md:text-start text-center'>
                    <div className='my-auto flex flex-col gap-3 max-w-[700px] '>
                        <h1 className='md:text-7xl text-5xl text-zinc-900 font-bold '>First Order <br /> Discount!</h1>
                        <p className='text-zinc-800 font-semibold'>Enjoy an exclusive first order discount on our Grociry website Shop fresh essentials and save big on you first purchase. Fast Delivery and Quality guaranteed</p>
                        <div className=''><Button content="Get a Discount" /></div>
                        
                    </div>

                    {/* <div className='h-full w-[500px]'>
                        <img src={Discount_image} alt="image" className='w-[30vw] h-[35vh] object-cover object-contain' />
                    </div> */}
                </div>


            </div>
        </section>
    )
}

export default Discount;