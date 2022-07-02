import React from "react";

import {
  addToCart,
  emptyCart,
  removeToCart,
  productList,
  fetchProductList,
} from "../redux/action.js";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import "./header.css";
import { getProduct } from "../redux/service.js";
// import { productList } from "../redux/productAction.js";

const Main = () => {
  // const selector = useSelector((state) => state.productData);
  // console.log("data", selector);
  const dispatch = useDispatch();
  const product = {
    name: "I-phone",
    type: "mobile",
    price: 10000,
    color: "red",
  };

  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>ADD TO CART</button>
      <button onClick={() => dispatch(removeToCart(product))}>
        REMOVE TO CART
      </button>
      <button onClick={() => dispatch(emptyCart(product))}>EMPTY CART</button>
      <button onClick={() => dispatch(fetchProductList())}>USER LIST</button>
    </div>
  );
};



export default Main;
