import './dropdown.styles.scss';
import { useSelector } from 'react-redux';
import { selectCurrentCategory, selectIsDropdownOpen } from '../../store/products reducer/products.selector';
import useMountAndUnmountTransition from '../transition hook/use.transition.component';
import { useNavigate } from 'react-router';
import { setCurrentCategory } from '../../store/products reducer/products.action';
import { useDispatch } from 'react-redux';
const Dropdown = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentCategory = useSelector(selectCurrentCategory);
    const isDropdownOpen = useSelector(selectIsDropdownOpen);
    const dropDownHasTransitionedIn = useMountAndUnmountTransition(isDropdownOpen, 1000);
    const onCategoryClickHandler = (event) => {
        dispatch(setCurrentCategory(event.target.innerText));
        navigate("/shop");
    }  
    console.log(currentCategory);
    return(
        <div className={`dropdown ${dropDownHasTransitionedIn && 'dropdown-in'} ${isDropdownOpen && 'dropdown-visible'}`}>
    
        <div className=' dropdown-content dropdown-left'>
        <ul>
        <li>Beauty</li>
        <li>Fashion</li>
        <li>Hair</li>
        <li>Lifestyle</li>
        </ul>
        </div>
        <div className='dropdown-content dropdown-middle'>
        <ul>
        <li>Beauty</li>
        <li>Fashion</li>
        <li>Hair</li>
        <li>Lifestyle</li>
        </ul>
        </div>
        <div className='dropdown-content dropdown-right'>
        <ul>
        <li onClick={onCategoryClickHandler}>Beauty</li>
        <li onClick={onCategoryClickHandler}>Fashion</li>
        <li onClick={onCategoryClickHandler}>Hair</li>
        <li onClick={onCategoryClickHandler}>Lifestyle</li>
        </ul>
        </div>
        </div>
        )
    }
    
    
    export default Dropdown;
 