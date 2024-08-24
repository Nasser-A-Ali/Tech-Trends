import { render, waitFor, screen } from "@testing-library/react";
import App from "./App";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/phones/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Laptops/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact/i);
  expect(linkElement).toBeInTheDocument();
});
