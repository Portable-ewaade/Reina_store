import React, { useState } from 'react'
import { topProducts } from '../../assets/data/data'
import Heading from '../../common/Heading'
import ProductItem from '../product/ProductItem'

const TopProduct = () => {
    const [data, setdata] = useState(topProducts)
    const allcategories = ["all", ...new Set(data.map((itme) => itme.category))]
    const [category, setcategory] = useState(allcategories)

    const handleFilter = (category) =>{
        const newItem = topProducts.filter((item) => item.category === category)
        setdata(newItem)

        if(category === "all") {
            setdata(topProducts)
            return
        }
    }


  return <>
    <section className='topproduct'>
        <div className="container">
            <div className="head">
                <Heading title='Top Selling Products' desc='Meet our newbies! The lastest templates uploaded to the marketplace' />
                <div className="category">
                    {category.map((category) => (
                        <button className='button' onClick={() => handleFilter(category)}>{category}</button>
                    ))}
                </div>
            </div>
            <ProductItem data={data} />
        </div>
    </section>
  </>
}

export default TopProduct