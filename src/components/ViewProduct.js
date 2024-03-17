import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from "../redux/Slices/cartSlice";

const ViewProduct = () => {
  const cart = useSelector((state) => state.cart.productList); 
  const currentlyView = useSelector(state => state.viewproduct.currentlyView);
  console.log(currentlyView)
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(currentlyView));
  };

  const removeFromCart = () => {
    dispatch(remove(currentlyView.id));
  };


  return (
    <div className="max-w-lg mx-auto mt-10">
      <div className="flex items-center justify-center mb-5">
        <img src={currentlyView.image} alt={currentlyView.title} className="w-80 h-80 object-contain" />
      </div>
      <div className="px-4">
        <h2 className="text-2xl font-semibold mb-2">{currentlyView.title}</h2>
        <p className="text-gray-700 mb-4">{currentlyView.description}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-lg font-bold text-gray-800">${currentlyView.price.toFixed(2)}</p>
          <div>
          {cart.some((p) => p.id === currentlyView.id) ? (
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
