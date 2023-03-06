import './card.styles.css';
import { useContext, useState } from 'react';
import { DisplayDetails } from '../../contexts/display.details.context';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { addItemToCart } from '../../store/cart reducer/cart.action';
import { selectCartItems } from '../../store/cart reducer/cart.selector';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({product, showInventory}) => {
    const [link, setLink] = useState("");
    const {imgUrl , name, price, flashSale, discount, inventory} = product;
    const dispatch = useDispatch();  
    const cartItems = useSelector(selectCartItems);          
    const {setCurrentProduct} = useContext(DisplayDetails);
    
    

   const onProductClickHandler = () => {
       setLink("product")
       setCurrentProduct(product);
       
   }
   const addItemHandler = () => {
       dispatch(addItemToCart(cartItems, product));
       setLink("")
   }
   const onMouseEnterHandler = () => {
       setLink("")
     
   }
  
    return(
        <Link className="product-card-container" to={`/${link}`}>
        { <div  onMouseEnter={onProductClickHandler}>
        {flashSale && <div className='percent-decrease'>
             <span className='percentage'>-{discount}% off</span>
         </div>}
             <div className='img-container'>
             <img className="product-image" src={imgUrl} alt={name} />  
             </div>
             <div className='product-details'>
                 <p className='product-name'>{name}</p>
                 <p className="product-discount">$ {price-(price * (discount/100))}</p>
                 <p className="product-price">$ {price}</p>
             </div>
            {showInventory?<div className='inventory-details'>
             <p className='inv-left'>{inventory} items left</p>
             <div className='inv-bar'>
             <div className='inv-progress-bar'></div>
             </div>
             </div>
            :""}
             
             {/*<div className='card-add-to-cart' onMouseEnter={onMouseEnterHandler}>
             <Button buttonType="filledCard" children="Add to Cart"   onClickHandler={addItemHandler} />
    </div>*/}
         </div>}
        </Link>
    )
}

export default ProductCard;