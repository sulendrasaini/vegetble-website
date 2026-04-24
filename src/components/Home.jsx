import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Value from './Value'
import Product from './Product'
import Discount from './Discount'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Value/>
      <Product/>
      <Discount/>
    </div>
  )
}

export default Home