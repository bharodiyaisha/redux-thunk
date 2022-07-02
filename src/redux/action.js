import {
  ADD_TO_CART,
  REMOVE_TO_CART,
  EMPTY_CART,
  PRODUCT_LIST,
} from "./constant";
import { getProduct } from "./service";

export const addToCart = (data) => {
  console.log("action addCart:", data);
  return {
    type: ADD_TO_CART,
    data,
  };
};

export const removeToCart = (data) => {
  console.log("action removeCard:", data);
  return {
    type: REMOVE_TO_CART,
    data,
  };
};

export const emptyCart = () => {
  console.log("action emptyCard:");
  return {
    type: EMPTY_CART,
  };
};

export const fetchProductList = () => {
  return async (dispatch) => {
    const data = await getProduct();
    console.log("data:", data);
    dispatch(productList(data));
  };
};

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
