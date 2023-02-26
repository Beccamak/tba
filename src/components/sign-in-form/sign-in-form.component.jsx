import './sign-in-form.styles.css';
import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userSignInUpFailed, userSignInUpStart, userSignInUpSuccess } from '../../store/userReducer/user.action';
import { selectActionIsLoading } from '../../store/userReducer/user.selector';
import Spinner from '../spinner/spinner.component';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import Button from '../button/button.component';
import { ToastContainer, toast } from 'react-toastify';

const defaultFormFields = {
    email: "",
    password: "",
    type: "password"
};


const SignInForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
   const dispatch = useDispatch();
   const actionIsLoading = useSelector(selectActionIsLoading);
    const {email, password, type} = formFields;
    const navigate = useNavigate();
    const [loginState, setLoginState] = useState('false');
    const [loginWithGoogleState, setLoginWithGoogleState] = useState('false');


    const onSuccessfulSignIn = () => navigate("/")


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const signInWithGoogle = async (event) => {
        event.preventDefault();
        dispatch(userSignInUpStart());
        setLoginWithGoogleState(true);
       
    }
    const onLogInClickHandler = () => {
        
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    };
    const errorHandler = (msg) => {
        toast.error(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const loginSuccess = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoginState(true);
        dispatch(userSignInUpStart());

        try {
           await Axios.post("https://total-beauty-affairs-backend.onrender.com/auth/login",{
            email: email,
            password: password
           } ).then(res=> {
            if(res.data==='Invalid credentials'){
                errorHandler("email does not exist");
                setLoginState(false);
                return;
                
            }
            if(res.data==='Please input the correct password'){
               errorHandler("Invalid password");
                setLoginState(false);
                return;
                
            }

                console.log(res);
                const user = res.data.user; 
                if(user){
                setLoginState(false);
                dispatch(userSignInUpSuccess(user)); 
                loginSuccess("Login sucess");
                resetFormFields();
                onSuccessfulSignIn(); 
                
                }
             
           });
           
          
           
        } catch (error) {
            setLoginState(false);
            switch(error.code){
                  default:
                   errorHandler(error.message);

                  
              }
            
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
             <input className='form-input' type="password" name="password" value={password} placeholder='Password' onChange={handleChange} required/>

             </div>
            <div className='hide-label-input'>
             <input className='form-input' type="password" name="password" value={password} placeholder='Password' onChange={handleChange} required/>
             </div>
            <div className='forgot-pass-con' >
            <Link className='forgot-password' to='/'>Forgot Password?</Link>
            </div>
            <div className='btn-group'>
            {(loginState===true && actionIsLoading===true)? <Spinner />: <Button children="Log in" buttonType="filled" />}
            <div className='line'></div>
           
            </div>
            
            </form> 
             {
                
            (loginWithGoogleState===true && actionIsLoading===true)? <Spinner />: <Button children="Log in" buttonType="filled" />}
          
            <ToastContainer /> 
            
        </div>
    )
}


export default SignInForm;