import React from "react";
import { Delete } from "@mui/icons-material";
import { remove } from "../redux/Slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();


  const removeItemFromCart = () => {
    dispatch(remove(item.id));
  };

  return (
    <>
      <div className="flex items-center p-5 justify-between border-rose-700 border-2 text-black mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.image} className="h-28 rounded-lg" alt="" />
          <div className="ml-10  self-start space-y-5">
            <h1 className="text-xl font-semibold">
              {item.title}
            </h1>
            <p>${item.price}</p>
          </div>
        </div>
        <div
          onClick={removeItemFromCart}
          className="bg-purple-300 hover:bg-purple-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
        >
          <Delete className="text-red-800" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
