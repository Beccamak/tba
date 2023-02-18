import "./cart.dropdown.styles.scss";
import Button from "../button/button.component";
import { Link, useNavigate } from "react-router-dom";
import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart reducer/cart.selector";
import { useSelector } from "react-redux";
import CartItem from "../cart-item/cart.item.component";
import FlashSales from "../flash sales/flash.sales.component";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";


const CartDropdown = () => {
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  console.log(cartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const checkOutHandler = () => navigate("/checkout");
  const onShopNowHandler = () => navigate("/");
  const location = useLocation();
console.log(location, "cart");


  return (
    <div classNamme="cart-dropdown">
      {cartCount ? (
        <div className="container">
          <p className="shopping-cart">Shopping cart</p>
          <div className=" shopping-cart-con">
            <div className="cart-table">
              <div className="cart-container">
                <div className="cart-header">
                  <div className="cart-block block-item">
                    <span>Item Details</span>
                  </div>
                  <div className="cart-block block-quantity">
                    <span>Quantity</span>
                  </div>
                  <div className="cart-block block-price">
                    <span>Price</span>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <CartItem cartItem={item} />
                ))}
              </div>

              <p className="clear">
              <FontAwesomeIcon icon={faRecycle} />
              <span>Clear Cart</span>
              </p>
            </div>
            <div className="cart-summary">
              <div className="summary-hd">
                <span>Cart Summary</span>
                <span>{`(${cartCount})`}</span>
              </div>
              <div className="summary-hd sub-total">
                <span>Sub total</span>
                <span>{`${cartTotal}`}</span>
              </div>
              <div className=" summary-hd del-charges">
                <span>Delivery Charges</span>
                <span>500</span>
              </div>
              <div className="summary-hd cart-total">
                <span>Total</span>
                <span>{`${cartTotal + 500}`}</span>
              </div>
              <div className="cart-btn">
              <Button buttonType="filled" children="Continut to Checkout" onClickHandler={checkOutHandler} />
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
          <Button children="Shop Now" buttonType="filled" onClickHandler={onShopNowHandler} />
        </div>
      )}

      <FlashSales />
    </div>
  );
};

export default CartDropdown;
