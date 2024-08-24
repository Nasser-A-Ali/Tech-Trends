import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch tasks from the products.json file
  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/products");
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    const getProducts = async () => {
      const productsFromServer = await fetchProducts();
      setProducts(productsFromServer);
    };
    getProducts();
  }, []);

  // Add items to cart

  const handleAddItemToCart = (product) => {
    setCart([...cart, product]);
    notify();
  };

  // Alert when item is added to cart
  const notify = () =>
    toast.success("Item added to cart successfully! 🛒", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <Shop products={products} onAddItemToCart={handleAddItemToCart} />
            }
          />
          <Route
            path="/products/:id"
            element={<ProductDetails onAddItemToCart={handleAddItemToCart} />}
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route
            path="*"
            element={
              <h1
                style={{
                  alignSelf: "center",
                  textAlign: "center",
                  marginTop: "10%",
                }}
              >
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
