import React from 'react'

const Banner = ({BannerName,BannerBg}) => {
  return (
    <div className=' h-[45vh] mt-22 flex justify-center items-center bg-center bg-cover relative' style={{backgroundImage: `url(${BannerBg})`}} >
    <h2 className='text-5xl font-bold  p-5 rounded-2xl bg-gradient-to-b from-green-50 to-green-100 w-fit z-10 '>{BannerName}</h2>
    <div className='bg-black/50 absolute inset-0 '></div>

    </div>
  )
}

export default Banner;