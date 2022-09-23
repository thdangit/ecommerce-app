/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsBagCheck } from "react-icons/bs";
import { RiUser3Line } from "react-icons/ri";
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineDelete,
} from "react-icons/ai";
import { connect, useDispatch, useSelector } from "react-redux";

import logo from "../assets/images/logo2.png";
import cartimg from "../assets/images/cart.png";
import { navlist } from "../assets/data/data";
import { DELETE } from "../redux/action";
import { toast } from "react-toastify";

export const Header = () => {
  // navbar
  const [mobile, setMobile] = useState(false);
  // cartopen and close
  const [cartList, setCartList] = useState(false);
  const dispatch = useDispatch();

  const handleCloses = () => {
    setCartList(null);
  };
  // scroll navbar
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // cart add in shop
  const getDataCart = useSelector((state) => state.cartReducer.carts);

  // delete cart
  const removeCart = (id) => {
    dispatch(DELETE(id));
    toast("Delete Cart Successful!");
  };

  // total prcie
  const [price, setPrice] = useState(0);

  const totals = () => {
    let price = 0;
    getDataCart.map((e) => {
      price = parseFloat(e.price) * e.qty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    totals();
  }, [totals]);

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button onClick={() => setMobile(!mobile)}>
                {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )}
              </button>
            </div>
            <div className="left">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="center">
              <ul className={mobile ? "mobile-nav" : "menu"}>
                {navlist.map((nav, i) => (
                  <li key={i}>
                    <Link to={nav.path}>{nav.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="right">
            <div className="right_search">
              <input type="text" placeholder="Search Products..." />
              <BiSearch className="serachIcon heIcon" />
            </div>
            <div className="right_user">
              <RiUser3Line className="userIcon heIcon" />
              <AiOutlineHeart className="userIcon heIcon" />
            </div>
            <div className="right_card">
              <button className="button" onClick={() => setCartList(!cartList)}>
                <BsBagCheck className="shop heIcon" />
                MY CART ({getDataCart.length})
              </button>
              <div className={cartList ? "showCart" : "hideCart"}>
                {getDataCart.length ? (
                  <section className="details">
                    <div className="details_title">
                      <h3>Photo</h3>
                      <p>Product Name</p>
                    </div>
                    <div className="details_cart">
                      {getDataCart.map((e, i) => (
                        <div key={i} className="details_content">
                          <div className="details_content_img">
                            <Link to={`/cart/${e.id}`} onClick={handleCloses}>
                              <img src={e.cover} alt="" />
                            </Link>
                          </div>
                          <div className="details_content_detail">
                            <div className="details_content_detail_price">
                              <p>{e.title.slice(0, 20)}...</p>
                              <p>Price : ${e.price}</p>
                              <p>Quantity : {e.qty}</p>
                            </div>
                          </div>
                          <div className="details_content_detail_icon">
                            <i>
                              <AiOutlineDelete
                                onClick={() => removeCart(e.id)}
                              />
                            </i>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="details_total">
                      <h4>Total : ${price}</h4>
                      <button className="button">BUY</button>
                    </div>
                  </section>
                ) : (
                  <div className="empty">
                    <p>Your cart is empty</p>
                    <img src={cartimg} alt="" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};
connect(mapStateToProps)(Header);
