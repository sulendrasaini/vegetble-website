import React from 'react'
import Banner from '../banner/Banner'
import { useEffect } from 'react'

import ProductList from '../productList/ProductList'
import Card from '../card/Card'


const CategoryPage = ({ BannerTitle, bannerImage, category }) => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // agar instant chahiye to "auto"
    });
  }, []);


  // const filterProduct =  ProductList.filter((product =>{
  //   return(
  //       product.category === category
  //   )
  // }));

  // *** Alternates !! *** //
  const filterProduct = category ? ProductList.filter(product => product.category === category) : ProductList;





  const renderProduct = filterProduct.map((product) => {
    return (
      <Card image={product.image} title={product.title} price={product.price} id={product.id} key={product.id} />
    )
  });



  return (

    <div>
      {BannerTitle && bannerImage && (<Banner BannerName={BannerTitle} BannerBg={bannerImage}/>)}

      <div className=' grid md:grid-cols-4 grid-cols-1 gap-9 max-w-[1400px] mx-auto py-20 px-10'>
        {renderProduct}
      </div>
    </div>


  )
}

export default CategoryPage;