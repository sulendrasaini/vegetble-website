import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Value from './Value'
import Product from './Product'


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Value/>
      <Product/>
    </div>
  )
}

export default Home