import './sign-in-form.styles.css';
import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInUpFailed, userSignInUpStart, userSignInUpSuccess } from '../../store/userReducer/user.action';
import { selectActionIsLoading } from '../../store/userReducer/user.selector';
import Spinner from '../spinner/spinner.component';
import { useNavigate } from 'react-router-dom';

const defaultFormFields = {
    email: "",
    password: "",
    type: "password"
};


const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const [toggleIcon, setToggleIcon] = useState(true);
    const [hideOrShow, setHideOrShow] = useState("hide");
   const dispatch = useDispatch();
   const actionIsLoading = useSelector(selectActionIsLoading);
    const {email, password, type} = formFields;
    const navigate = useNavigate();

    const onSuccessfulSignIn = () => navigate("/")


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async (event) => {
        event.preventDefault();
        dispatch(userSignInUpStart());
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            dispatch(userSignInUpSuccess(user));
            onSuccessfulSignIn();
            // resetFormFields();
        } catch (error) {
            dispatch(userSignInUpFailed(error));
            console.log(error.message);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
           const {user} = await signInAuthUserWithEmailAndPassword(email, password);
           dispatch(userSignInUpSuccess(user)); 
           resetFormFields();
           onSuccessfulSignIn();
           
        } catch (error) {
            switch(error.code){
                case 'auth/wrong-password':
                  alert('Incorrect password for email');
                  break;
                case 'auth/invalid-email':
                  alert('Please enter a valid email address');
                  break;
                case 'auth/user-not-found':
                  alert('No user associated with this email');
                  break;
                default:
                    console.log(error.message);

                  
              }
            
        }
    }
   
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const onEyeIconClick = () => {
        setToggleIcon(!toggleIcon);
        if (toggleIcon) {
            setHideOrShow("show")
            setFormFields({...formFields, type: "text"});
        }else{
            setHideOrShow("hide")
            setFormFields({...formFields, type: "password"});
        }
        
    }
    return(
        <div className='sign-in-container'>
        <header className='sign-in-title'>Login</header>
            <form onSubmit={handleSubmit}>
            <div className='label-input'>
            <input className='form-input' type="text" name="email" value={email}  placeholder='Email' onChange={handleChange} required/>
            </div>
            <div className='label-input'>
             <input className='form-input' type={type} name="password" value={password} placeholder='Password' onChange={handleChange} required/>
             <i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
             </div>
            <div className='hide-label-input'>
             <input className='form-input' type={type} name="password" value={password} placeholder='Password' onChange={handleChange} required/>
             <i className={`bx bx-${hideOrShow} eye-icon`} onClick={onEyeIconClick}></i>
             </div>
            <div className='forgot-pass-con' >
            <Link className='forgot-password' to='/'>Forgot Password?</Link>
            </div>
            <div className='btn-group'>
            <button className='btn log-in'>{actionIsLoading? <Spinner spinner="small" />:"Log in"}</button>
            <div className='line'></div>
            <button className='btn log-in-google' onClick={signInWithGoogle}>
            <i className='bx bxl-google google-icon'></i>
            <span className='login-text'>{actionIsLoading? <Spinner spinner="small" />:"Login with google"}</span>
            </button>
            </div>
            </form> 
        </div>
    )
}


export default SignInForm;