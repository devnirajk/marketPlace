import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state) => state.cart.productList); 
  const navigate = useNavigate();
  const handleIconClick = () => {
    navigate("/");
  };
  
  return (
    <>
      <nav className="flex items-center justify-between h-20  max-w-6xl mx-auto border-b-4">
        <Link to={"/"}>
          <div 
          onClick={()=>handleIconClick()}
          className="ml-5 border-2 p-2 rounded-md border-rose-700">
            <h1 className="text-rose-800 text-3xl font-bold">
              Market Place
            </h1>
          </div>
        </Link>
        <div className="flex list-none items-center space-x-6 mr-5 text-white-700 -tracking-tighterr font-semibold">
          <Link to={"/cart"}>
            <div className="relative">
              <img className="h-10" src="https://img.freepik.com/premium-vector/basket-cart-icon_118813-10923.jpg"/>
              {cart.length > 0 && (
                <div className="absolute bg-red-600 text-xs w-5 h-5 flex justify-center items-center -top-1 -right-2 rounded-full top- text-white">
                  {cart.length}
                </div>
              )}
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
