import React, { useEffect, useState, useSelector } from "react";
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

import logo from "../assets/images/logo.svg";
import { navlist } from "../assets/data/data";
function Header() {
  // navbar
  const [mobile, setMobile] = useState(false);
  // cartopen and close
  const [cartList, setCartList] = useState(false);

  const handleClose = () => {
    setCartList(null);
  };
  // scroll navbar
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  // cart add in shop

  // delete cart

  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <div className="toggle">
              <button>
                menu
                {/* {mobile ? (
                  <AiOutlineClose className="close heIcon" />
                ) : (
                  <AiOutlineMenu className="open heIcon" />
                )} */}
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
                SHOP
                <span> (0)</span>
              </button>
              <div className={cartList ? "showCart" : "hideCart"}></div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
