import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './cart.item.styles.scss'
import {useDispatch, useSelector} from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../store/cart reducer/cart.action';
import { selectCartItems } from '../../store/cart reducer/cart.selector';


const CartItem = ({cartItem}) => {
    const {imgUrl, price, name, quantity, flashSale, discount  } = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const onPlusClickHandler = (cartItem) => {
        dispatch(addItemToCart(cartItems, cartItem)); 
        
    }    
    const onMinusClickHandler = (cartItem) => {
        dispatch(removeItemFromCart(cartItems, cartItem)); 
    } 
    return(
        <div className='cart-item'>
        <div className='ci-left'>
        
        <img src={imgUrl} className="cart-img"/>
        <div className='itm-flx'>
        <span className='itm-nm'>{name}</span>
        <p className='itm-sb'>Sold by <span style={{color: "#F5B216"}}>TotalBeauty Affairs</span></p>
        </div>
        </div>
         
            <div className="cart-quantity">
            <div className='itm-minus'>
            <FontAwesomeIcon  icon={faMinus} onClick={onMinusClickHandler} />
            </div>
            <span className='itm-qtn'>{quantity}</span>
            <div className='itm-plus' >
            <FontAwesomeIcon icon={faPlus} onClick={onPlusClickHandler}/>
            </div>
           
            </div>
            <div>
            <p className='cart-discount'>{price}</p>
            <p className='cart-price'>{flashSale? price-(price*(discount/100)) : ""}</p>
            </div>
         
            </div>
    
    )
}

export default CartItem;