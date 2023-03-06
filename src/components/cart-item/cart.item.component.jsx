import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./cart.item.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart reducer/cart.action";
import { selectCartItems } from "../../store/cart reducer/cart.selector";

const CartItem = ({ cartItem, itemType }) => {
  const { imgUrl, price, name, quantity, inventory, flashSale, discount } =
    cartItem;
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();

  const onPlusClickHandler = (cartItem) => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const onMinusClickHandler = (cartItem) => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };
  return (
    <div className={` ${itemType === "cart" ? "cart-item" : "ch-cart-item"}`}>
      <div className={` ${itemType === "cart" ? "ci-left" : "ch-ci-left"}`}>
        <img src={imgUrl} className="cart-img" />
        <div className="itm-flx">
          <span className="itm-nm">{name}</span>
          {itemType === "cart" ? (
            <p className="itm-sb">
              Sold by{" "}
              <span style={{ color: "#B71E79" }}>TotalBeauty Affairs</span>
            </p>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="cart-quantity">
        {itemType === "cart" ? (
          <div className="itm-minus">
            <FontAwesomeIcon icon={faMinus} onClick={onMinusClickHandler} />
          </div>
        ) : (
          ""
        )}
        <span className={` ${itemType === "cart" ? "itm-qtn" : "ch-itm-qtn"}`}>
          {inventory}
        </span>

        {itemType === "cart" ? (
          <div className="itm-plus">
            <FontAwesomeIcon icon={faPlus} onClick={onPlusClickHandler} />
          </div>
        ) : (
          ""
        )}
      </div>
      {itemType === "cart" ? (
        <div>
          <p className="cart-discount">
            {flashSale ? price - price * (discount / 100) : ""}
          </p>
          <p className="cart-price">{price}</p>
        </div>
      ) : (
        <div>
          <p className="ch-cart-price">
            {flashSale ? price - price * (discount / 100) : price}
          </p>
        </div>
      )}
    </div>
  );
};

export default CartItem;
