import { NavLink, useNavigate, useSearchParams } from "react-router";
import LogoWhite from "../assets/images/logo-white.png";
import MobileLogoWhite from "../assets/images/mobile-logo-white.png";
import SearchIcon from "../assets/images/icons/search-icon.png";
import CartIcon from "../assets/images/icons/cart-icon.png";

import "./Header.css";
import { useState } from "react";

export function Header({ cartProducts }) {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search');
  const [searchValue, setSearchValue] = useState(searchText || "");
  const navigate = useNavigate();
  let totalCartQuantity = 0;


  cartProducts.forEach((cartProduct) => {
    totalCartQuantity += cartProduct.quantity;
  });

  const doSearch = () => {
    setSearchValue("");
    navigate(`/?search=${searchValue}`);
  };

  const updateSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const keyDownHandler = (event) =>{
    if(event.key === 'Enter'){
      doSearch();
    }
  }

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src={LogoWhite} />
            <img className="mobile-logo" src={MobileLogoWhite} />
          </NavLink>
        </div>

        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={updateSearch}
            onKeyDown={keyDownHandler}
          />

          <button className="search-button" onClick={doSearch}>
            <img className="search-icon" src={SearchIcon} />
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src={CartIcon} />
            <div className="cart-quantity">{totalCartQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}
