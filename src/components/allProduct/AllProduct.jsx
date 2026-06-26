import React from 'react'
import Navbar from '../Navbar'
import CategoryPage from '../categoryPage/CategoryPage'

const AllProduct = () => {
  return (
      <div>
        <Navbar/>
       <div className='mt-30'>
        <CategoryPage/>
        </div> 
    </div>
  )
}

export default AllProduct