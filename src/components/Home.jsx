import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Category from './Category'
import Value from './Value'
import Product from './Product'
import Discount from './Discount'
import Process from './Process'
import Testimonials from './Testimonials'
import Footer from './Footer'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Category/>
      <Value/>
      <Product/>
      <Discount/>
      <Process/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home