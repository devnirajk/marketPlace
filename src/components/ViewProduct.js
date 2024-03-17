import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ViewProduct = () => {
  const currentlyView = useSelector(state => state.viewproduct.currentlyView);

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
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
