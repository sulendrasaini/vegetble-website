import React from 'react'
import CategoryPage from '../categoryPage/CategoryPage'
import BgFruits from "../../assets/image/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div>
      <CategoryPage BannerTitle="Fruits & vegetable" bannerImage={BgFruits} category="Fruits"/>
    </div>
  )
}

export default Fruits