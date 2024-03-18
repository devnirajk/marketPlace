import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const recentlyViewedList = useSelector((state) => state.viewproduct.recentlyViewed); 
  const [moreProducts, setMoreProducts] = useState(1);

  //Fetching products from Fake API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=8')
      .then(res => res.json())
      .then(json => {
        setProductList(prevState=>[...prevState, ...json]);
        setFilteredProducts(prevState=>[...prevState, ...json]);
      });
  }, [moreProducts]);

  console.log(productList)

  // function to search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const filtered = productList.filter(item =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  // Handle sort order change
  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (e.target.value === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center py-5">
        <select
          id="sortOrder"
          className="px-4 py-2 mx-4 border border-slate-700 rounded-md focus:outline-none focus:border-blue-500"
          value={sortOrder}
          onChange={handleSortChange}
        >
          <option>Sort by Price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

        <input
          className="px-4 py-2 border border-slate-700 rounded-md focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Search Product"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {filteredProducts.length === 0 ? (
          <h1 className="text-blue-700 text-2xl text-center font-bold">
            {(productList.length)===0?"Product Loading....":"No Products Found!!!"}
          </h1>
        ) : (
          filteredProducts.map((item) => (
            <Product key={item.id} item={item} />
          ))
        )}

        <button
          className="text-lg font-bold bg-blue-600 w-40 h-16 text-white rounded-md py-3 shadow-lg"
          onClick={() => setMoreProducts((prevState) => prevState + 1)}
        >
          More Products
        </button>

      </div>
      {
      (recentlyViewedList.length > 0)&&<h1 className="text-rose-700 text-2xl font-bold text-center my-6">Recently Viewed Products</h1>
      }
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 ">
        {recentlyViewedList.length === 0 ? null: (
          recentlyViewedList.map((item) => (
            <Product key={item.id} item={item} />
          ))
          )}
      </div>
    </>
  );
};

export default Home;