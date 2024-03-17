import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  //state for showing products
  const [productList, setProductList] = useState([]);

  //Fetching products from Fake API
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=16')
    .then(res=>res.json())
    .then(json=>setProductList(json))
  }, []);


  return (productList.length === 0)? (<h1 className="text-blue-700 text-2xl text-center font-bold">Loading Products...</h1>):(
    <>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {productList.map((item) => {
          return <Product key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};

export default Home;
