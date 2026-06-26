import React from 'react'
import Banner from '../banner/Banner'
import CategoryPage from '../categoryPage/CategoryPage'
import bannerBg from "../../assets/image/Seafood-banner.jpg"

const SeaFood = () => {
  return (
    <div>
        <CategoryPage BannerTitle="Sea Food" bannerImage={bannerBg} category="Sea Food"/>
    </div>
  )
}

export default SeaFood