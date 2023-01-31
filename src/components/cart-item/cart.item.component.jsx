import './cart.item.styles.scss'


const CartItem = ({cartItem}) => {
    const {imgUrl, price, name, quantity} = cartItem;
    return(
        <div className='cart-item'>
            <img src={imgUrl} className="cart-img"/>
            <div>
            <span>{name}</span>
            <div>
            <span>{price} x {quantity}</span>
            </div>
            </div>
            </div>
    
    )
}

export default CartItem;