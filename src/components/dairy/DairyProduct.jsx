import React from 'react'
import CategoryPage from '../categoryPage/CategoryPage'
import BannerBg from "../../assets/image/dairy-banner.jpg"

const DairyProduct = () => {
  return (
    <div>
      <CategoryPage BannerTitle="Dairy & Eggs" bannerImage= {BannerBg} category="Dairy"/>
    </div>
  )
}

export default DairyProduct