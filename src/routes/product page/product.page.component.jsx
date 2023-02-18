import { useParams } from 'react-router-dom';
import './product.page.styles.scss';
import Button from '../../components/button/button.component';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addItemToCart, removeItemFromCart} from '../../store/cart reducer/cart.action';
import { useRef, useState } from 'react';
import Description from '../../components/description/description.component';
import Return from '../../components/return policy/return.component';
import Reviews from '../../components/reviews/reviews.component';

const ProductPage = ({product}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

   const [descriptionActive, setDescriptionActive] = useState(true);
   const [returnActive, setReturnActive] = useState(false);
   const [reviewsActive, setReviewsActive] = useState(false);
    const addProductToCart = () => {
        dispatch(addItemToCart(cartItems, product)); 
        
    }    
    const removeProductFromCart = () => {
        dispatch(removeItemFromCart(cartItems, product)); 
    }    
    if (product === null) return;

    const {imgUrl , name, price,  brand, stars, rating, colors, description, features,specifications, delivery, discount, flashSale } = product;
   const onDescriptionClickHandler = () => {
        setDescriptionActive(true);
        setReturnActive(false);
        setReviewsActive(false);
    }
   const  onReturnClickHandler = () => {
        setDescriptionActive(false);
        setReturnActive(true);
        setReviewsActive(false);
    }
  const onReviewsClickHandler = () => {
        setDescriptionActive(false);
        setReturnActive(false);
        setReviewsActive(true);
    }

    return(
        <div className='container'>
        
        <div className='product-page'>
        <div className="product-page-container">
           <div className='ppg-img-con'>
           <img className="product-img" src={imgUrl} alt={name} /> 
                
           </div>
           <div className='product-info'>
               <h2 className='product-info-name'>{name}</h2>
               <div className='ratings'>
               <div >
               {               
                   Array.from({length: stars}).map((index) =>{
                       return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" star w-6 h-6">
                       <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                       </svg>       
                    })
                }               
                </div>
                <span>{rating} 4.0</span>
                <span>22 Customer Reviews</span>
                </div>
                <p className='brand-name'>Brand: {brand}</p>
                <p className='sku'>SKU: SKKER-345-TRE</p>

                {
                    flashSale?
                    <p className="product-info-price">$ {price}</p>:
                    <div>
                    <p className="product-info-price">$ {price-(price*(discount/100))}</p>
                    <p className="product-info-price">$ {price}</p>
                    
                    </div>
                }
                <div className='qnty-selector'>
                <span className='qnty-selector-btn'>-</span>
                <span className='qnty-selector-btn'>1</span>
                <span className='qnty-selector-btn'>+</span>
                </div>
                {/*
               
               <Button buttonType="filled" children="-" onClickHandler={removeProductFromCart}/> 
               <Button buttonType="filled" children="+" onClickHandler={addProductToCart}/> */}
               <div className='add'>
               <Button buttonType="filled" children="Add to cart" onClickHandler={addProductToCart}/>
               </div>
           </div>
       </div>
     

    
       </div>
       <div className='product-mid'>
       <p>Sold by <span style={{color:"#F5B216"}}>TotalBeauty Affairs</span></p>
       </div>
       <div className='product-down'>
       <div className='down-details'>
       <p className={`details-itm ${descriptionActive? "active-header": ""}`} onClick={onDescriptionClickHandler}>Description</p>
       <p className={`details-itm ${returnActive? "active-header": ""}`} onClick={onReturnClickHandler}>Delivery & Returns</p>
       <p className={`details-itm ${reviewsActive? "active-header": ""}`} onClick={onReviewsClickHandler}>Reviews</p>
       </div>
       <div className='details-box'>
       {descriptionActive && <Description description={description} specifications={specifications} features={features} />}
       {returnActive&& <Return  />}
       {reviewsActive && <Reviews  />}
       </div>
      
      
      
       </div>
       </div>

        )
    }
    
    export default ProductPage;
