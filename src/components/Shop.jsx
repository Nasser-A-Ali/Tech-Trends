import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";

const Shop = ({ products, onAddItemToCart }) => {
  //   console.log(products);
  return (
    <div className="shop-container">
      <section className="shop-banner"></section>
      <section className="shop-categories-container">
        <div className="shop-category">Phones</div>
        <div className="shop-category">Laptops</div>
        <div className="shop-category">Tablets</div>
      </section>
      <section className="shop-items-container">
        {products.map((product) => (
          <div key={product.id} className="shop-item">
            <div
              className="shop-item-image"
              style={{ backgroundImage: `url(${product.image_path})` }}
            >
              <MdAddShoppingCart
                onClick={() => onAddItemToCart(product)}
                style={{ fontSize: 32, color: "white", cursor: "pointer" }}
              />
              {/* <img src={product.image_path} /> */}
            </div>

            <div className="shop-item-text">
              <Link to={`/products/${product.id}`}>
                <div className="shop-item-name">{product.name}</div>
              </Link>
              <div className="shop-item-prices">
                <div className="shop-item-regular-price">${product.price}</div>
                <div className="shop-item-discount-price">
                  ${product.price - product.discount_amount}
                </div>
              </div>
            </div>

            {/* <button onClick={() => onAddItemToCart(product)}>
              Add to Cart
            </button> */}
          </div>
        ))}
      </section>
    </div>
  );
};

export default Shop;
