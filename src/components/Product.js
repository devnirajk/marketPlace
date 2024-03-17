import React from "react";
import { add, remove } from "../redux/Slices/cartSlice";
import { addcurrentlyView, addrecentlyViewed } from "../redux/Slices/viewProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';


const Product = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.productList); 
  const addToCart = () => {
    dispatch(add(item));
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <>
      <div className="cursor-pointer group hover:shadow-2xl flex flex-col items-center border-2 border-pink-400 gap-3 p-4 h-[350px] mt-10 ml-5  rounded-xl">
        <div 
          onClick={()=>
          {
          dispatch(addcurrentlyView(item));
          dispatch(addrecentlyViewed(item));
          navigate('/viewproduct');}}
          className="h-[180px]">
          <img
            src={item.image}
            alt={item.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="truncate w-40 mt-3 text-gray-700 font-semibold text-lg">
            {item.title}
          </h1>
        </div>
        <div className="flex items-center justify-between w-full mt-5">
          {cart.some((p) => p.id === item.id) ? (
            <button
              className="group-hover:bg-red-700 group-hover:text-white transition duration-300 ease-in text-red-700 border-2 border-gray-700 rounded-lg font-semibold p-3"
              onClick={removeFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="group-hover:bg-pink-700 group-hover:text-white transition duration-300 ease-in text-pink-700 border-2 border-pink-700 rounded-lg font-semibold p-3"
              onClick={addToCart}
            >
              Add to cart
            </button>
          )}
          <p>${item.price}</p>
        </div>
      </div>
    </>
  );
};

export default Product;
