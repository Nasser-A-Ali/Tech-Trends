import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-container">
          <Link to="/">
            <img
              className="nav-logo"
              src="../images/tech_trends_logo_compressed.png"
            />
          </Link>
          <div className="nav-items">
            <Link to="/">Shop</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/contact">Contact</Link>
            <FaSearch style={{ color: "#4A596D" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
