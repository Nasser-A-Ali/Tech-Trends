import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const Cart = (cart) => {
  console.log("cart", cart);
  console.log("cart.cart", cart.cart);

  const starRating = (number_of_stars) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (number_of_stars >= i + 1) {
        stars.push(<IoIosStar key={i} />);
      } else if (number_of_stars >= i + 0.5) {
        stars.push(<IoIosStarHalf key={i} />);
      } else {
        stars.push(<IoIosStarOutline key={i} />);
      }
    }
    return stars;
  };

  const calculateSubtotal = () => {
    let subtotal = 0;
    cart.cart.forEach((item) => {
      subtotal += item.price;
    });
    return subtotal;
  };

  const calculateSavings = () => {
    let savings = 0;
    cart.cart.forEach((item) => {
      savings += item.discount_amount;
    });
    return savings;
  };

  const calculateShipping = () => {
    let shipping = 0;
    let cart_subtotal = calculateSubtotal();
    let shipping_cost = "FREE";

    if (cart_subtotal > 500) {
      shipping_cost = "FREE";
    } else {
      cart.cart.forEach(() => {
        shipping += 10;
      });
      shipping_cost = `$${shipping.toFixed(2)}`;
    }
    return shipping_cost;
  };

  const calculateTaxes = () => {
    let taxes = 0;
    let cart_subtotal = calculateSubtotal();
    let tax_rate = 0.15;
    taxes = cart_subtotal * tax_rate;
    return taxes;
  };

  return (
    <div className="outer-cart-container">
      <h1>Shopping Cart</h1>
      <div className="cart-container">
        <aside className="cart-items">
          {cart.cart.length > 0
            ? cart.cart.map((item) => (
                <div key={item.id} className="cart-item-box">
                  <div className="cart-item-frame">
                    <div
                      className="cart-item-image"
                      style={{ backgroundImage: `url(${item.image_path})` }}
                    ></div>
                    <div className="cart-item-details">
                      <div className="cart-item-name">{item.name}</div>
                      <div className="cart-item-rating">
                        {starRating(item.rating)}
                      </div>
                      <div className="cart-item-prices">
                        <div className="cart-item-regular-price">
                          ${item.price}
                        </div>
                        <div className="cart-item-discount-price">
                          ${item.price - item.discount_amount}
                        </div>
                      </div>
                      <div className="cart-item-quantity">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value="1"
                          step="1"
                        />
                        <div className="cart-item-remove-btn">remove</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "Your shopping cart is empty."}
        </aside>

        <aside className="order-summary-pane">
          <div className="order-summary-title">Order Summary</div>
          <div className="price-breakdown">
            <div className="price-breakdown-titles">
              <h3>Subtotal</h3>
              <h3>Savings</h3>
              <h3>Shipping</h3>
              <h3>Taxes</h3>
            </div>
            <div className="price-breakdown-values">
              <h3>${calculateSubtotal().toFixed(2)}</h3>
              <h3>${calculateSavings().toFixed(2)}</h3>
              <h3>{calculateShipping()}</h3>
              <h3>${calculateTaxes().toFixed(2)}</h3>
            </div>
          </div>

          <div className="order-summary-black-line"></div>

          <div className="order-summary-total">
            <h3 className="order-summary-total-title">Total</h3>
            <div className="order-summary-total-price">
              $
              {(
                calculateSubtotal() +
                calculateTaxes() -
                calculateSavings()
              ).toFixed(2)}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Cart;
