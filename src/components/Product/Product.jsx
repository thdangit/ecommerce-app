import React, {useState} from 'react'

import ProductItems from "../Product/ProductItems"
import { Heading } from "../../common/Heading"
import { products } from "../../assets/data/data"

function Product() {
    const [cartItems, setCartItems] = useState(products)

// console.log(cartItems)
  return (
    <>
        <section className='product'>
        <div className='container'>
          <Heading title='Trendings Products' desc='Check the hottest designs of the week. These rising stars are worth your attention.' />

          <ProductItems cartItems={cartItems} />
        </div>
      </section>
    </>
  )
}

export default Product