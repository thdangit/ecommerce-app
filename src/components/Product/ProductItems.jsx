import React from 'react'
import { FiShoppingBag, FiSearch } from "react-icons/fi"
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai"
import { Link } from "react-router-dom"

function ProductItems({cartItems}) {
  return (
    <>
        <div className='product_items'>
        {cartItems.map((items) => (
          <div className='box' key={items.id}>
            <div className='img'>
              {/* <Link to={`/cart/${items.id}`}>
                <img src={items.cover} alt='' />
              </Link>*/}
              <img src={items.cover} alt='' />
              <div className='overlay'>
                {/* 
                =>yadi button ma click garyo bhane chai items chai add hunxa 
                =>items chai map((items) garrko xa data bata
                */}
                <button className='button'>
                  <FiShoppingBag />
                </button>
                <button className='button'>
                  <AiOutlineHeart />
                </button>
                <button className='button' >
                  <FiSearch />
                </button>
              </div>
            </div>
            <div className='details'>
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>${items.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductItems