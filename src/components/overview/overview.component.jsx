import Button from '../button/button.component';
import './overview.styles.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHeart, faSave, faList, faEye} from '@fortawesome/free-solid-svg-icons';


const Overview = ({name, email}) => {
    return(
        <div className='overview'>
        <div className="overview-up">
        
        <div className='welcome'>
        <h2>MY WALLET</h2>
        <h2>Hi, {name? name: "user"}</h2>
        </div>
        <div className='wallet'>
        <p className='wallet-amt'>$230.00</p>
        <Button children="Fund Wallet"/>
        <Button children="Withdraw" />
        </div>
        </div>

        <div className='overview-middle'>
        <div className='profile'>
        <div className='profile-img-con'></div>
        <img src='' className='profile-image' />
        <div className='profile-details'>
        <p className='profile-name'>{name? name: "Rebecca John"}</p>
        <p>{email? email : "funmitof@gmail.com"}</p>
        <p>09066890293</p>
        </div>
        </div>
        <div className='items-list'>
        <ul >
        <li>
        <FontAwesomeIcon className='acc-icon' icon={faHeart} />
        <span>Wishlist</span>
        </li>
        <li>
        <FontAwesomeIcon className='acc-icon' icon={faSave} />
        <span>Saved Items</span>
        </li>
        <li>
        <FontAwesomeIcon className='acc-icon' icon={faList} />
        <span>Orders</span>
        </li>
        <li>
        <FontAwesomeIcon className='acc-icon' icon={faEye} />
        <span>Viewed</span>
        </li>
        </ul>
        </div>
        </div>
        <div className='overview-down'>
        <div className='down-left'>
        <p className='shipping'>shippind address</p>
        <p className='normal-txt'>This is your default Address</p>
        <div className='address-details'>
        <p>{name? name: "Rebecca John"}</p>
        <p>{email? email : "funmitof@gmail.com"}</p>
        <p>24, brighlight avenue, </p>
        <p>100222</p>
        </div>
        <div className='edit'>
        <p>Edit Detail</p>
        <p>Delete</p>
        </div>
        </div>

        <div className='down-right'>
        <div>
        <p>Payment Details</p>
        <p>Add Card</p>
        </div>
        <p>This are your saved cards</p>
        <div className='payment-cards'>
        <div className='payment-card'></div>
        <div className='payment-card'></div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Overview;