import React from 'react'

const Headings = (props) => {
  return (
    // <h1 className='max-w-[1400px] mx-auto flex justify-center text-5xl font-bold'><span>Shop <br/></span> by Category</h1>
    <div className='max-w-[1400px] mx-auto w-fit'>
      <h1 className='md:text-5xl text-[2.3rem] font-bold md:py-6 py-2 '><span className='text-green-900'>{props.highLight}</span> {props.normalWord}</h1>
      <div className='w-34 h-1 bg-green-700  ml-auto'></div>
    </div>

  )
}

export default Headings;