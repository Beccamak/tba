import './sign-up-form.styles.css';
import { useState } from 'react';
import Form from '../form/form.component';
import { createAuthUserWithEmailAndPassword,
createUserDocumentFromAuth, signInWithGooglePopup} from '../../utils/firebase';
import { userSignInUpStart, userSignInUpSuccess, userSignInUpFailed } from '../../store/userReducer/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectActionIsLoading } from '../../store/userReducer/user.selector';
import Spinner from '../spinner/spinner.component';
import { Link } from 'react-router-dom';
import Button from '../button/button.component';
import { setCategories } from '../../store/categoriesReducer/categories.action';
 const defaultFormFields = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    
const SignUpForm = () =>{
    const [formFields, setFormFields] = useState(defaultFormFields);
    const{firstName, lastName, email, password, confirmPassword} = formFields;
    const actionIsLoading = useSelector(selectActionIsLoading);
    const[ signUpState, setSignUpState] = useState(false);
    const [signUpWithGoogleState, setSignUpWithGoogleState] = useState(false);
   
   const dispatch = useDispatch();
   const navigate = useNavigate;
   const onSuccessfulSignUp = () => navigate("/");

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const RegistrationSucessful = (msg) => {
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
     const noMatch = (msg) => {
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

    const onSignUpClickHandler =() =>{
        
    }
    const onSignUpWithGoogleClickHandler = () => {
        setSignUpWithGoogleState(true);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        
       
        if(password !== confirmPassword){
            setSignUpState(false);
             noMatch('Passwords do not match');
            return;
        }
        setSignUpState(true);
         dispatch(userSignInUpStart());
        try {
            await Axios.post("https://total-beauty-affairs-backend.onrender.com/auth/register", {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password
           
            }).then(res => {
                   const user =  res.data.user
                    if(res.data.message === "Email already exist"){
                    noMatch(res.data.message);
                    setSignUpState(false);
                    return;
                   }
                   
                   if(user){
                    dispatch(userSignInUpSuccess(user)); 
                    resetFormFields();
                    RegistrationSucessful(res.data.message);
                    setSignUpState(false);
                   }
                }
                );
           
        
            // alert("Sucessful, you are signed in now");
            // navigate("/");
           
            
        } catch (error) {
            setSignUpState(false);
            if(error.code === 'auth/email-already-in-use'){
                dispatch(userSignInUpFailed(Error));
                alert("Email already in use");
            }else if(error.code === 'auth/invalid-email'){
                dispatch(userSignInUpFailed(Error));
                alert("Please use a valid email address");
            }else if(error.code === 'auth/weak-password'){
                dispatch(userSignInUpFailed(Error));
                alert("Password should be at least 6 characters");
            }
            else{
                dispatch(userSignInUpFailed(Error));
                console.log("see me here",error);
            }
        }
        
    }
    const onHandleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }

 
    const onFormSuccessfulSignUp = () => navigate("/");
    const signUpOrInWithGoogle = async (event) => {
        event.preventDefault();
        setSignUpWithGoogleState(true);
        dispatch(userSignInUpStart());
        try {
            const {user} = await signInWithGooglePopup();
            await createUserDocumentFromAuth(user);
            dispatch(userSignInUpSuccess(user));
            onFormSuccessfulSignUp();
            // resetFormFields();
        } catch (error) {
            setSignUpWithGoogleState(false);
            dispatch(userSignInUpFailed);
            
        }
    }
    return(
        <div className='sign-up-container'>

    <div>
    <header className='sign-in-title'>Sign Up</header>
    <form onSubmit={onSubmitHandler}>
    <div className='label-input'>
    <input className='form-input'  type="text" name="firstName"  placeholder='First Name'value={firstName} onChange={onHandleChange} minLength="6" required/>
    </div>
    <div className='label-input'>
    <input  className='form-input' type="text" name="lastName"  placeholder='Last Name' value={lastName} onChange={onHandleChange} minLength="6"  required/>
    </div>
    <div className='label-input'>
    <input className='form-input' type="email" name="email" value={email}  placeholder='Email' onChange={onHandleChange} required/>
    </div>
    <div className='label-input'>
     <input className='form-input' type="password" name="password" value={password} placeholder='Password' onChange={onHandleChange} required/>
   
    </div>
     <div className='label-input'>
     <input className='form-input' type="password" name="confirmPassword" value={confirmPassword} placeholder=' Confirm Password' onChange={onHandleChange} required/>
     
     </div>
    
  
    <div className='btn-group'>
    {(signUpState && actionIsLoading)? <Spinner />: <Button buttonType="filled" children="Sign up" onClickHandler={onSignUpClickHandler} />}
    {/* 
    <div className='line'></div>
    {(signUpWithGoogleState && actionIsLoading)?  <Spinner />: <Button buttonType="filled" children="Sign up with Google" onClickHandler={signUpOrInWithGoogle} />}

    */}
    </div>
    </form> 
    </div>
    
    
    
    <ToastContainer />
        </div>
    )
}


export default SignUpForm;