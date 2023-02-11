import { faLine } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight, faArrowRightToLine, faCartShopping, faCreditCard, faFaceSmileBeam, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './mid-section.styles.css';


const MidSection = () => {
    return(
        <section className='mid-section'>
        <div className='mid-items container'>
        <div className='mid-item'>
        <FontAwesomeIcon size='3x' className='mid-icon' icon={faArrowRight} />
        <p className='item'>Choose item(s)</p>
        </div>
        <FontAwesomeIcon size='2x' className='mid-icon down' icon={faArrowRight} />
        <div className='mid-item'>
        <FontAwesomeIcon size='3x' className='mid-icon' icon={faCartShopping} />
        <p className='item'>Add to Cart</p>
        </div>
        <FontAwesomeIcon size='2x' className='mid-icon down' icon={faArrowRight} />
        <div className='mid-item'>
        <FontAwesomeIcon size='3x' className='mid-icon' icon={faCreditCard} />
        <p className='item'>Make payment</p>
        </div>
        <FontAwesomeIcon size='2x' className='mid-icon down' icon={faArrowRight} />
        <div className='mid-item'>
        <FontAwesomeIcon size='3x' className='mid-icon' icon={faTruck} />
        <p className='item'>Get your item delivered</p>
        </div>
        <FontAwesomeIcon size='2x' className='mid-icon down' icon={faArrowRight} />
        <div className='mid-item'>
        <FontAwesomeIcon size='3x' className='mid-icon' icon={faFaceSmileBeam} />
        <p className='item'>Be a happy customer</p>
        </div>
        </div>
        </section>

    )
}


export default MidSection;