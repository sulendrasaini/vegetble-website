    import React from 'react'
    import Grociry from '../../src/assets/image/grocirry.png'
    import Button from './button/Button';


    const Hero = () => {
        return (
            <section  >
                <div className='w-full md:max-w-[1400px] min-h-screen  md:mx-auto p-10 flex md:flex-row flex-col md:pt-50 pt-35 '>

                    {/* Hero Comtent */}
                    <div className='md:flex-1 '>
                        <span className='text-green-900 text-lg  px-5 py-2 bg-green-100 rounded-full '>Export best Qaulity...</span>
                        <h1 className='md:text-7xl/20 text-[44px]/14 font-bold pl-0 p-5'>Nature’s Finest <span className='text-green-800'>Fresh Fruits</span> & <span className='text-green-800'> Garden Veggies</span><br/>In Your City
    </h1>
                        <p className='text-zinc-600 p-3 pl-0 mb-8 md:text-lg text-md max-w-[530px]'>Bred for a high content of beneficial substance. Our products are all fresh and healthy. </p>
                        <Button content="Shop Now" />
                    </div>
                    {/* Hero-Image */}
                    <div className='md:flex-1  '>
                        <img src={Grociry}></img>
                    </div>

                </div>

            </section>
        )
    }

    export default Hero;

