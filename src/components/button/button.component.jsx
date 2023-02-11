import './button.styles.css';

const BUTTON_TYPES = {
    filled: "fill",
    "outlined": "outline",
    "footer": "footer-btn"

}

const Button = ({buttonType, children, onClickHandler}) => {
    // <button className='butt btn2'>Hover me</button>
    return(
        <button className={` ${BUTTON_TYPES[buttonType]}`} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;