import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button className='text-white bg-gradient-to-b from-green-700 to-green-900 py-3 px-8 rounded-lg md:text-lg text-md   font-semibold hover:scale-105 hover:to-green-950 transition-all duration-200 cursor-pointer'>{props.content}</button>
    </div>
  )
}

export default Button