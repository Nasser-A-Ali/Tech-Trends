import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { MdAddShoppingCart } from "react-icons/md";

const ProductDetails = ({ onAddItemToCart }) => {
  const [product, setProduct] = useState({});

  const params = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:5000/products/${params.id}`);
      const data = await res.json();
      setProduct(data);
      //   setLoading(false);
    };
    fetchProduct();
  });

  const starRating = () => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (product.rating >= i + 1) {
        stars.push(<IoIosStar key={i} />);
      } else if (product.rating >= i + 0.5) {
        stars.push(<IoIosStarHalf key={i} />);
      } else {
        stars.push(<IoIosStarOutline key={i} />);
      }
    }
    return stars;
  };

  return (
    <div className="product-details-container">
      <h1>Product Details</h1>
      <div className="black-line"></div>
      <div className="product-details">
        <div
          className="product-details-image"
          style={{ backgroundImage: `url(.${product.image_path})` }}
        ></div>
        <aside className="product-details-aside">
          <h2 className="product-title">{product.name}</h2>
          <div className="product-prices">
            <div className="product-details-regular-price">
              ${product.price}
            </div>
            <div className="product-details-discount-price">
              ${product.price - product.discount_amount}
            </div>
          </div>
          <div className="product-details-rating">
            {starRating(product.rating)}
          </div>
          <div className="product-details-description">
            {product.description}
          </div>
          <button
            className="product-details-add-to-cart-btn"
            onClick={() => onAddItemToCart(product)}
          >
            <p>Add to Cart</p>
            <MdAddShoppingCart style={{ fontSize: 28 }} />
          </button>
        </aside>
      </div>
    </div>
  );
};

export default ProductDetails;
