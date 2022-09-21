/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { MdStarRate } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { ADD, DELETE, REMOVE_INT } from "../../redux/action";
import { products } from "../../assets/data/data";
import { toast } from "react-toastify";

const DetailProduct = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const getdata = useSelector((state) => state.cartReducer.carts);

  // id of product in cart
  const arrIdCart = getdata.map((e) => e.id);
  console.log(arrIdCart);

  // id of product in data
  const arrIdPro = products.map((e) => e.id);
  console.log(arrIdPro);

  const compare = () => {
    const idCart = arrIdCart.filter((e) => {
      return e == id;
    });
    const idPro = arrIdPro.filter((e) => {
      return e == id;
    });
    if (id == idCart) {
      let compareData = getdata.filter((e) => {
        return e.id == id;
      });
      setData(compareData);
    } else if (id == idPro) {
      let compareData = products.filter((e) => {
        return e.id == id;
      });
      setData(compareData);
    }
  };

  useEffect(() => {
    compare();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  // delete item
  const history = useHistory();
  const deletes = (id) => {
    dispatch(DELETE(id));
    history.push("/");
  };

  // increment item
  const dispatch = useDispatch();
  const increment = (e) => {
    dispatch(ADD(e));
    toast("Add Cart Successful!");
  };

  // descriment item
  const decrement = (item) => {
    dispatch(REMOVE_INT(item));
  };

  return (
    <>
      <article>
        <section className="details">
          <h2 className="details_title">Product Details Pages</h2>
          {data.map((item, i) => (
            <div className="details_content" key={i}>
              <div className="details_content_img">
                <img src={item.cover} alt="" />
              </div>
              <div className="details_content_detail">
                <h1>{item.title}</h1>
                <div className="rating">
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <MdStarRate />
                  <label htmlFor="">(1 customer review)</label>
                </div>
                <h3> ${item.price * item.qty}</h3>
                <p>{item.author}</p>
                <div className="qty">
                  <div className="count">
                    <button onClick={() => increment(item)}>
                      <AiOutlinePlus />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={
                        item.qty <= 1
                          ? () => deletes(item.id)
                          : () => decrement(item)
                      }
                    >
                      <AiOutlineMinus />
                    </button>
                  </div>
                  <button className="button" onClick={() => increment(item)}>
                    Add To Cart
                  </button>
                </div>
                <div className="desc">
                  <h4>PRODUCTS DESCRIPTION</h4>
                  <p>
                    Designed by Puik in 1949 as one of the first models created
                    especially for Carl Hansen & Son, and produced since 1950.
                    The last of a series of chairs wegner designed based on
                    inspiration from antique chinese armchairs.
                  </p>
                  <h4> PRODUCT DETAILS</h4>
                  <ul>
                    <li>
                      <p> Material: Plastic, Wood</p>
                    </li>
                    <li>
                      <p>Legs: Lacquered oak and black painted oak</p>
                    </li>
                    <li>
                      <p>
                        Dimensions and Weight: Height: 80 cm, Weight: 5.3 kg
                      </p>
                    </li>
                    <li>
                      <p>Length: 48cm</p>
                    </li>
                    <li>
                      <p>Depth: 52 cm</p>
                    </li>
                    <li>
                      <p>Seat Height: 44 cm</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
      </article>
    </>
  );
};
export default DetailProduct;
