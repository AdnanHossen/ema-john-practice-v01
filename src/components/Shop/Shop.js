import React, { useEffect, useState } from "react";
import Cart from "../../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    fetch("./products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);

        /* 
          this section is very confusing
          here code means that if addedProduct remains there than add a new value there named quantit that is the vale of the object

          this helps to track data how much we clicked in the btn and saved in the local stoerage
        */
        if (addedProduct) {
          addedProduct.quantity = savedCart[key];
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);

  const addToCartBtn = (product) => {
    const newCart = [...carts, product];
    setCart(newCart);

    // save to local storage
    addToDb(product.key);
  };

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };

  return (
    <>
      {/* search container */}
      <div className="search-container">
        <input
          type="text"
          placeholder="search product"
          onChange={handleSearch}
        />
      </div>
      {/* end of search container */}

      {/* -------------- */}

      {/* shops container */}
      <div className="shops">
        {/* products container */}
        <div className="products-container">
          {displayProducts.map((product) => (
            <Product
              key={product.key}
              product={product}
              addToCartBtn={addToCartBtn}
            ></Product>
          ))}
        </div>
        {/* end of priducts container */}

        {/* cart container */}
        <div className="order-container">{<Cart carts={carts}></Cart>}</div>
        {/* end of cart contaienr */}
      </div>
    </>
  );
};

export default Shop;
