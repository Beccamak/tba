import "./cart.dropdown.styles.scss";
import Button from "../button/button.component";
import { Link, useNavigate } from "react-router-dom";
import {
  selectCartCount,
  selectCartItems,
} from "../../store/cart reducer/cart.selector";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart.item.component";
import FlashSales from "../flash sales/flash.sales.component";

const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const checkoutHandler = () => navigate("/checkout");
  const onShopNowHandler = () => navigate("/");

  return (
    <div classNamme="cart-dropdown">
      {cartCount ? (
        <div className="container">
          <p className="shopping-cart">Shopping cart</p>
          <div className=" shopping-cart-con">
            <div classNamme="cart-items">
              <div className="cart-container">
                <div className="cart-header">
                  <div className="cart-block">
                    <span>Product</span>
                  </div>
                  <div className="cart-block">
                    <span>Description</span>
                  </div>
                  <div className="cart-block">
                    <span>Quantity</span>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <CartItem cartItem={item} />
                ))}
              </div>
            </div>
            <div className="cart-summary">
              <div>
                <span>Cart Summary</span>
                <span>{`${cartCount}`}</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="cart-empty-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <p className="cart-text">Your cart is empty!</p>
          <p className="cart-sub-text">
            You have not added any item to your cart
          </p>
          <Button children="Shop Now" onClickHandler={onShopNowHandler} />
        </div>
      )}

      <FlashSales />
    </div>
  );
};

export default CartDropdown;
