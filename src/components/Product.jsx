import React, { useState } from 'react'
import Headings from './heading/Headings'
import Card from './card/Card.jsx';
import ProductList from "../components/productList/ProductList.js"
import Button from './button/Button.jsx';

const Product = () => {

    const [activeTab, setActiveTab] = useState("All")

    const filteredItems = activeTab === "All" ? ProductList : ProductList.filter((item) => item.category === activeTab)



    const renderCardLists = filteredItems.slice(0,8).map((product) =>{

        return(
            <Card image={product.image} title={product.title} price={product.price} id={product.id} key={product.id}/>
        )
    })

    return (
        <section>
            {/* Heading Line  */}
            <Headings highLight="Our" normalWord="Products" />


            <div className='max-w-[1400px] py-20 px-10 mx-auto'>

                {/* Products Tabs */}
                <div className='flex flex-wrap justify-center gap-2 py-20'>{tabs.map((tab) => (
                    <button key={tab} onClick={() => setActiveTab(tab)} className={`text-lg font-medium  px-6 py-2 rounded-lg cursor-pointer ${activeTab === tab ? "text-white bg-gradient-to-b from-green-600 to-green-900" : "bg-zinc-200"} transition-all duration-300`}  >
                        {tab}
                    </button>

                ))}</div>


                {/* Product Listings */}
                <div className='grid md:grid-cols-4 grid-cols-1 gap-9'>{renderCardLists}</div>
                <div className='w-fit mx-auto p-10'> <Button content="View All"/></div>
               
                
            </div>

        </section>
    )
}

export default Product;

const tabs = [
    "All",
    "Fruits",
    "Vagetables",
    "Dairy",
    "Sea Food"
];