import React from "react";
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ADD } from "../../redux/action";
import { connect, useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

function ProductItems({ cartItems }) {
  const dispatch = useDispatch();

  const addToCart = (items) => {
    dispatch(ADD(items));
    toast("Add Cart Successful!");
  };

  return (
    <>
      <div className="product_items">
        {cartItems.map((items) => (
          <div className="box" key={items.id}>
            <div className="img">
              <Link to={`/product/${items.id}`}>
                <img src={items.cover} alt="" />
              </Link>
              {/* <img src={items.cover} alt="" /> */}
              <div className="overlay">
                <button className="button">
                  <FiShoppingBag onClick={() => addToCart(items)} />
                </button>
                <button className="button">
                  <AiOutlineHeart />
                </button>
                {/* <button className="button">
                  <FiSearch />
                </button> */}
              </div>
            </div>
            <div className="details">
              <h3>{items.title}</h3>
              <p>{items.author}</p>
              <h4>${items.price}</h4>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductItems;
