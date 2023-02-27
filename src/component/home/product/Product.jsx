import React, { useState } from 'react'
import { products } from '../../assets/data/data'
import Heading from "../../common/Heading"
import ProductItem from './ProductItem'

export const Product = () => {
  const [data, setdata] = useState(products)
  console.log(setdata)

  return <>
    <section className='product'>
        <div className="container">
            <Heading title='Sprinkle of Freshness' desc='Check the hottest concept of the week. These rising stars are worth your attention.' />

            <ProductItem data={data} />
        </div>

    </section>
  </>
}

export default Product