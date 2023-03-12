import './navigation.styles.css';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import Logo from "../../assets/logo.png";
import { UserContext } from '../../contexts/user.context';
import CartDropdown from '../../components/cart dropdown/cart.dropdown.component';
import { selectCartCount, selectIsCartOpen } from '../../store/cart reducer/cart.selector';
import { selectIsDropdownOpen } from '../../store/products reducer/products.selector';
import { useSelector, useDispatch } from 'react-redux';
import { setIsCartOpen } from '../../store/cart reducer/cart.action';
import { selectSearchString } from '../../store/products reducer/products.selector';
import { setSearchString } from '../../store/products reducer/products.action';
import useMountAndUnmountTransition from '../../components/transition hook/use.transition.component';
import Button from '../../components/button/button.component';
import Footer from '../footer/footer.component';
import { selectCurrentUser, selectIsAccountOpen } from '../../store/userReducer/user.selector';
import AccountDropdown from "../../components/account dropdown/account.dropdown.component";
import { setIsAccountOpen } from '../../store/userReducer/user.action';
import { setIsDropdownOpen } from '../../store/products reducer/products.action';
import Dropdown from '../../components/dropdown/dropdown.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBaby, faBars, faHamburger,  faUser } from '@fortawesome/free-solid-svg-icons';



const Navigation = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(selectCurrentUser);
   const cartCount = useSelector(selectCartCount);
   const isCartOpen = useSelector(selectIsCartOpen);
   const isAccountOpen = useSelector(selectIsAccountOpen);
   const isDropdownOpen = useSelector(selectIsDropdownOpen);
   const searchString = useSelector(selectSearchString);
   const hasTransitionedIn = useMountAndUnmountTransition(isCartOpen, 1000);
   const accountHasTransitionedIn = useMountAndUnmountTransition(isAccountOpen, 1000);
   const dropDownHasTransitionedIn = useMountAndUnmountTransition(isDropdownOpen, 1000);
    const [sticky, setSticky] = useState(false);
    const location = useLocation();
   const onSearchChangeHandler = (event) => {
    const searchStringValue = event.target.value.toLocaleLowerCase();
    dispatch(setSearchString(searchStringValue));
   }
   const onSearchClickHandler = () => {
        navigate("/all-products");
   }
 

   const toggleIsAccountOpen = () => {
       dispatch(setIsAccountOpen(!isAccountOpen));
   }
   const toggleIsDropdownOpen = () => {
       dispatch(setIsDropdownOpen(!isDropdownOpen));
   }
   const onAccountClickHandler= () =>{
    return(
        <div className='nav-account'>
        <Link to='/sign-up'>sign up</Link>
        <Link to='/sign-in'>login</Link>
        </div>
    )
   }
   useEffect(()=> {
    if( isAccountOpen || isDropdownOpen){
        document.body.style.overflowY = 'hidden'
    }else{
        document.body.style.overflowY = 'scroll'
    }
   }, [isAccountOpen, isDropdownOpen])

   useEffect(()=>{        const handleScroll = () =>{
            setSticky(window.scrollY>200) 
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);

   })
  
    return(
        <Fragment>
        <div className={`navigation ${sticky? "sticky" : ""}`}>
        <div className="nav-container container">
        <div className='bar-logo'>
        <FontAwesomeIcon icon={faBars} className='bar' size='4x' />
        
        <Link   to="/">
        <img className='logo' src={Logo} alt="Total beauty affairs"/>
      
        </Link>
        </div>
            <div className='search-container'>
               

            <input className='input-search' type="text" placeholder='Search products or categories' value={searchString} onChange={onSearchChangeHandler}/>
            <svg xmlns="http://www.w3.org/2000/svg" className="search-icon nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
                <div className='search-text'>
                <Button buttonType="filled" children="search" onClickHandler={onSearchClickHandler} />
                    
                </div>
            </div>
          
            <div className='nav-links'>
            
            {/*<span className='nav-link' onClick={toggleIsDropdownOpen} to="/">
                <div className='nav-link-details'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    <span>Products</span>
    </div>
    </span> */}
            <Link className='nav-link'  to="/">
                <div className='nav-link-details'>
                   
                    <span>Services</span>
            </div>
            </Link> 
            <Link className='nav-link cart' to="/cart">
                <div className='nav-link-details'>
                <div className="cart-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </div>
                <span className='cart-text'>Cart</span>
                <span className='item-count'>{cartCount}</span>
                
               
                </div>
            </Link> 
            {
                currentUser ? ''
                :   <Link className='nav-link' to="/sign-up">
          <div className='nav-link-details'>
         
          <span>Sign Up</span>
          </div>
      </Link>
            }
            {
                currentUser ?
                
                
                <Link className='nav-link'  to="/account">
                 <div  className='nav-link-details'>
                 <span className='home-name'>My Account</span>
               
                 </div>
                 </Link> 
                : 
                <Link className='nav-link' to="/sign-in">
                <div className='nav-link-details'>
                   
                    <span>Login</span>
                </div>
            </Link> 
            }
             
            </div>
            <div  className='nav-acc'>
            <svg xmlns="http://www.w3.org/2000/svg" className="nav-icon " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <FontAwesomeIcon icon={faUser} onClick={onAccountClickHandler} />
                <div className='nav-account'>
                    <Link to='/sign-up'>sign up</Link>
                    <Link to='/sign-in'>login</Link>
        </div>
            </div>
        </div>
       <div>
       
       </div>
        
       
        
        </div>
        <div>
        <Outlet />

        </div>
        <Footer />
        </Fragment>
        
    )
}



export default Navigation;
