import { faArrowRight, faArrowsLeftRightToLine , faCartShopping, faCreditCard, faFaceSmileBeam, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {ReactComponent  as Line} from '../../assets/svgs/CORALCLOUDS (1)/Line 26.svg';
import {ReactComponent  as ArrowLeftRightToLine} from '../../assets/svgs/CORALCLOUDS (1)/Vector.svg';
import {ReactComponent  as Cart} from '../../assets/svgs/CORALCLOUDS (1)/Group.svg';
import {ReactComponent  as Truck} from '../../assets/svgs/CORALCLOUDS (1)/mdi_truck-delivery-outline.svg';
import {ReactComponent  as Card} from '../../assets/svgs/CORALCLOUDS (1)/fluent_payment-24-regular.svg';
import {ReactComponent  as Happy} from '../../assets/svgs/CORALCLOUDS (1)/bx_happy-heart-eyes.svg';
import './mid-section.styles.css';


const MidSection = () => {
    return(
        <section className='mid-section'>
        <div className='mid-items container'>
        <div className='mid-item'>
        <ArrowLeftRightToLine  className='mid-icon'  />
        <p className='item'>Choose item(s)</p>
        </div>
        <Line  className='down'  />
        <div className='mid-item'>
        <Cart  className='mid-icon'  />
        <p className='item'>Add to cart</p>
        </div>
        <Line  className='down'  />
        <div className='mid-item'>
        <Card  className='mid-icon'  />
        <p className='item'>Make payment</p>
        </div>
        <Line  className='down'  />
        <div className='mid-item get'>
        <Truck  className='mid-icon'  />
        <p className='item'>Get your item delivered</p>
        </div>
        <Line  className='down'  />
        <div className='mid-item be'>
        <Happy className='mid-icon'  />
        <p className='item'>Be a happy customer</p>
        </div>
        </div>
        </section>

    )
}


export default MidSection;