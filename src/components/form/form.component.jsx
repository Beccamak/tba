import './form.styles.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInUpFailed, userSignInUpStart, userSignInUpSuccess } from '../../store/userReducer/user.action';
import Spinner from '../spinner/spinner.component';
import { useNavigate } from 'react-router-dom';
import { selectActionIsLoading } from '../../store/userReducer/user.selector';
const Form = ({ header, handleSubmit, formDetails, buttonDetails}
) => {
    const {firstName, lastName, email, handleChange, password, confirmPassword} = formDetails;
    const {text, googleText} = buttonDetails;
    const dispatch = useDispatch();
    const actionIsLoading = useSelector(selectActionIsLoading);
    const navigate = useNavigate();
    const [toggleIcon, setToggleIcon] = useState(true);
    const [hideOrShow, setHideOrShow] = useState("hide");

    const onFormSuccessfulSignUp = () => navigate("/");
    const signUpOrInWithGoogle = async (event) => {
        event.preventDefault();
        dispatch(userSignInUpStart());
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            dispatch(userSignInUpSuccess(user));
            onFormSuccessfulSignUp();
            // resetFormFields();
        } catch (error) {
            dispatch(userSignInUpFailed);
            
        }
    }
    const[type, setType] = useState("password")
    const onEyeIconClick = () => {
        setToggleIcon(!toggleIcon);
        if (toggleIcon) {
            setHideOrShow("show")
           setType("text");
        }else{
            setHideOrShow("hide")
            setType("password");
        }
        

    }
    return(
        <div>
        <header className='sign-in-title'>{header}</header>
        <form onSubmit={handleSubmit}>
        <div className='label-input'>
        <input className='form-input'  type="text" name="firstName"  placeholder='First Name'value={firstName} onChange={handleChange} required/>
        </div>
        <div className='label-input'>
        <input  className='form-input' type="text" name="lastName"  placeholder='Last Name' value={lastName} onChange={handleChange} required/>
        </div>
        <div className='label-input'>
        <input className='form-input' type="email" name="email" value={email}  placeholder='Email' onChange={handleChange} required/>
        </div>
        <div className='label-input'>
         <input className='form-input' type={type} name="password" value={password} placeholder='Password' onChange={handleChange} required/>
        {/*<i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
    */} 
        </div>
         <div className='label-input'>
         <input className='form-input' type={type} name="confirmPassword" value={confirmPassword} placeholder=' Confirm Password' onChange={handleChange} required/>
         <i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
         </div>
        
         <div className='forgot-pass-con' >
        <Link className='forgot-password' to='/'>Forgot Password?</Link>
        </div>
        <div className='btn-group'>
        <button className='btn log-in'>{actionIsLoading? <Spinner spinner="text" /> :text}</button>
        <div className='line'></div>
        <div className='btn-container'>
        <button onClick={signUpOrInWithGoogle} className='btn log-in-google'>
        <i className='bx bxl-google google-icon'></i>
        <span className='login-text'>{actionIsLoading? <Spinner spinner="small"/> : googleText}</span>
        </button>
        </div>
        
        </div>
        </form> 
        </div>
    )

}


export default Form;