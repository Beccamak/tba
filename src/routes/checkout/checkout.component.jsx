import './checkout.styles.scss';
import { useSelector } from 'react-redux';
import { selectCartCount, selectCartItems, selectCartTotal } from '../../store/cart reducer/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout.item.component';
import {ReactComponent as Check} from '../../assets/svgs/check.svg';
import Button from '../../components/button/button.component';
import CartItem from '../../components/cart-item/cart.item.component';
import { Link } from 'react-router-dom';
const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const cartCount = useSelector(selectCartCount);

    const buyNowHandler = () => {
        return;
    }
    return(
        <div className='checkout-container '>
        <div className='checkout-left'>
        <div>
        <p className='checkout-header'>Checkout</p>
        </div>
        <div className='checkout-sd'>
        <div className='sd-left'>
        <Check />
        <span className='checkout-shipping'>Shipping Details</span>
        </div>
        <span className='edit-cart'>Edit details</span>  
        </div>
         <div className='checkout-card'>
         <p className='ch-cd cd-nm'>John Doe</p>
         <p className='ch-cd cd-em' >John doendii</p>
         <p className='ch-cd cd-add' >ikej ikej l</p>
         <div className='cd-btm'>
         <span className='ch-pay'>payment details</span>
         <span className='edit-cart'>Edit details</span>
         </div>
         </div>
        <div className='payment-card'>
        <p className='card-header'>name on card</p>
        <label className='card-label'>Find this on the front of your card</label>
        <input className='checkout-input' type='number' minLength='11' maxLength='11'  />
        <p className='card-header' >card number</p>
        <label className='card-label'> The digit on the front of your card</label>
        <input className='checkout-input' type='number' minLength='11' maxLength='11'  />
        
        <div className='payment-card-btm'>
        <div>
        <p className='card-header' >cvv number</p>
        <label className='card-label'>Digits at the back of your card</label>
        <input className='checkout-input ch-input-btm' type='number' minLength='11' maxLength='11'  />
        </div>
        <div>
        <p className='card-header' >expiry date</p>
        <label className='card-label'>The day your card expires</label>
        <input className='checkout-input ch-input-btm' type='number' minLength='11' maxLength='11' placeholder='MM/YY'  />
        </div>
        </div>
        <div className='save-con'>
        <Check className='sm-ch' />
        <p className='save'>Save card details</p>
        </div>
        <div className='ch-btn'>
        <Button children='continue' buttonType='filled'  />
        </div>
        <div className='cd-btm'>
        <span className='ch-pay'>Delivery Details</span>
        <span className='edit-cart'>Edit details</span>
        </div>
        </div>

        <p className='courier'>Choose your courier</p>
        <div className='courier-con'>
        <Check />
        <div>
        <p>Fed EX</p>
        <p className=''>Your order will be delivered within 3-6 days to the address on your profile for $2000</p>
        </div>
        <Check />
        </div>
        <div className='courier-con'>
        <Check />
        <div>
        <p>Fed EX</p>
        <p className=''></p>
        </div>
        <Check />
        </div>
        <div className='courier-btn'>
        <Button children='continue' buttonType='filled'  />
        </div>
        </div>
        <div>
          <div className="cart-summary checkout-summary">
        <div className="summary-hd checkout-hd">
          <span >Cart Summary {`(${cartCount})`} item{cartCount===1 || cartCount===0? '':'s'}</span>
          <span className='edit-cart'>Edit cart</span>
        </div>
        <div className='checkout-itms'>
    {    cartItems.map((item) => {
           return <CartItem cartItem={item} />
        })}
        </div>
        <div className="ch-sum-sub">
        <div className='ch-summary-hd sub-total'>
        
        <span>Sub total</span>
        <span>{`${cartTotal}`}</span> 
        </div>
          <div className="ch-summary-hd sub-total">
          <span>Delivery Charges</span>
          <span>500</span>
        </div>
        </div>
       
        <div className="summary-hd checkout-total">
          <span>Total</span>
          <span>{`${cartTotal + 500}`}</span>
        </div>
        <p className='p-text' style={{padding:'1.2rem 2.4rem'}}>Have a discount code?</p>
        <div className="cart-btn checkout-btn">
        <Button buttonType="filled" children="buy now" onClickHandler={buyNowHandler} />
        </div>
        <p className='small-p-text' style={{padding:'1.2rem 2.4rem 3.8rem 2.4rem'}}>Upon clicking 'Place Order', I confirm I have read and acknowledged all terms and policies.</p>
      </div>
        <p className='order-txt'>Need help with your order? <Link to='/contact-us'>Contact us</Link></p>
        </div>
        </div>

    )
}



export default Checkout;


