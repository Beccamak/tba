import { useNavigate, useParams } from "react-router-dom";
import "./product.page.styles.scss";
import Button from "../../components/button/button.component";
import { selectCartItems } from "../../store/cart reducer/cart.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
} from "../../store/cart reducer/cart.action";
import { useRef, useState } from "react";
import Description from "../../components/description/description.component";
import Return from "../../components/return policy/return.component";
import Reviews from "../../components/reviews/reviews.component";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Cart } from "../../assets/svgs/CORALCLOUDS (1)/Group-1.svg";

const ProductPage = ({ product }) => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);

  const [descriptionActive, setDescriptionActive] = useState(true);
  const [returnActive, setReturnActive] = useState(false);
  const [reviewsActive, setReviewsActive] = useState(false);
  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };
  const removeProductFromCart = () => {
    dispatch(removeItemFromCart(cartItems, product));
  };
  if (product === null) return;

  const {
    imgUrl,
    name,
    price,
    brand,
    stars,
    rating,
    colors,
    inventory,
    description,
    features,
    specifications,
    delivery,
    discount,
    flashSale,
  } = product;
  const onDescriptionClickHandler = () => {
    setDescriptionActive(true);
    setReturnActive(false);
    setReviewsActive(false);
  };
  const onReturnClickHandler = () => {
    setDescriptionActive(false);
    setReturnActive(true);
    setReviewsActive(false);
  };
  const onReviewsClickHandler = () => {
    setDescriptionActive(false);
    setReturnActive(false);
    setReviewsActive(true);
  };
  const buyNowHandler = () => {
    //check if item lredy exist in crt items
    dispatch(addItemToCart(cartItems, product));
    navigate("/checkout");
  };
  const onPlusClickHandler = () => {

    setQuantity(quantity + 1);
  };
  const onMinusClickHandler = () => {
    dispatch(removeItemFromCart(cartItems, product));
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className="container">
      <div className="product-page">
        <div className="product-page-container">
          <div className="ppg-img-con">
            <img className="product-img" src={imgUrl} alt={name} />
          </div>
          <div className="product-info">
            <h2 className="product-info-name">{name}</h2>
            <div className="ratings">
              <div className="star-review">
                {Array.from({ length: stars }).map((index) => {
                  return (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className=" star w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  );
                })}
              </div>
              <span className="rating"> 4.0</span>
              <span className="review">{rating} Customer Reviews</span>
            </div>
            <p className="brand-name">Brand: {brand}</p>
            <p className="sku">SKU: SKKER-345-TRE</p>

            {flashSale ? (
              <div className="page-price">
                <p className="product-info-price">
                  $ {price - price * (discount / 100)}
                </p>
                <p className="price-strike">$ {price}</p>
                <p className="small-p-text">In stock</p>
              </div>
            ) : (
              <div className="page-price">
                <p className="product-info-price">$ {price}</p>
                <p className="in-stock">In stock</p>
              </div>
            )}
            <div className="page-quantity">
              <span>Quantity: </span>
              <div className="pg-itm-minus">
                <FontAwesomeIcon icon={faMinus} onClick={onMinusClickHandler} />
              </div>
              <span className="pg-itm-qtn">{quantity}</span>
              <div className="pg-itm-plus">
                <FontAwesomeIcon icon={faPlus} onClick={onPlusClickHandler} />
              </div>
            </div>
            {/*
               
               <Button buttonType="filled" children="-" onClickHandler={removeProductFromCart}/> 
               <Button buttonType="filled" children="+" onClickHandler={addProductToCart}/> */}
            <div className="add">
              <div className="add-left">
                <Button
                  buttonType="outlined"
                  children={
                    <div className="product-add">
          
                    <svg xmlns="http://www.w3.org/2000/svg"className='product-cart'  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  
                    <span>Add to Cart</span>
                    </div>
                  }
                  onClickHandler={addProductToCart}
                />
              </div>
              <div className="add-right">
                <Button
                  buttonType="filled"
                  children="buy now"
                  onClickHandler={buyNowHandler}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-mid">
        <p>
          Sold by <span style={{ color: "#B71E79" }}>TotalBeauty Affairs</span>
        </p>
      </div>
      <div className="product-down">
        <div className="down-details">
          <p
            className={`details-itm ${
              descriptionActive ? "active-header" : ""
            }`}
            onClick={onDescriptionClickHandler}
          >
            Description
          </p>
          <p
            className={`details-itm ${returnActive ? "active-header" : ""}`}
            onClick={onReturnClickHandler}
          >
            Delivery & Returns
          </p>
          <p
            className={`details-itm ${reviewsActive ? "active-header" : ""}`}
            onClick={onReviewsClickHandler}
          >
            Reviews
          </p>
        </div>
        <div className="details-box">
          {descriptionActive && (
            <Description
              description={description}
              specifications={specifications}
              features={features}
            />
          )}
          {returnActive && <Return />}
          {reviewsActive && <Reviews />}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
