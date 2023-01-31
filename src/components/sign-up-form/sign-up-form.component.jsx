import './sign-up-form.styles.css';
import { useState } from 'react';
import Form from '../form/form.component';
import { createAuthUserWithEmailAndPassword,
createUserDocumentFromAuth} from '../../utils/firebase';
import { userSignInUpStart, userSignInUpSuccess, userSignInUpFailed } from '../../store/userReducer/user.action';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
   const dispatch = useDispatch();
   const navigate = useNavigate;
   const onSuccessfulSignUp = () => navigate("/");

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        dispatch(userSignInUpStart());
        if(password !== confirmPassword){
            alert("passwords do not match");
            return;
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword (email, password);
             await createUserDocumentFromAuth(user, {firstName, lastName})
            resetFormFields();
            dispatch(userSignInUpSuccess(user));
            onSuccessfulSignUp();
            alert("Sucessful, you are signed in now");
           
            
        } catch (error) {
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
                console.log(error.message);
            }
        }
    }
    const onHandleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value});
    }
    return(
        <div className='sign-up-container'>
        <Form   header ="Sign up" handleSubmit={onSubmitHandler} formDetails={{firstName: firstName, lastName: lastName,email: email, password:password, confirmPassword: confirmPassword, handleChange: onHandleChange}} 
        buttonDetails={{text: "Sign up", facebookText:"Login with Facebook", googleText:"Sign up with Google"}}/>
        {/*<h2 className='sign-up-title'>Don't have an account?</h2>
        <span>Sign up with email and password</span>
            <form onSubmit={onSubmitHandler}>
            <button>Sign in with google</button>
               <label >First name</label>
                <input  type="text" name="firstName"  placeholder='Rebecca'value={firstName} onChange={onHandleChange} required/>
               <label >Lastname</label>
                <input  type="text" name="lastName"  placeholder='Makinde' value={lastName} onChange={onHandleChange} required/>
              <label >Email</label>
                 <input  type="email" name="email"  placeholder='funmitof@gmail.com' value={email} onChange={onHandleChange} required/>
              <label >Password</label>
                 <input  type="password" name="password" value={password} onChange={onHandleChange} required/>
              <label >Confirm password</label>
                 <input  type="password" name="confirmPassword" value={confirmPassword} onChange={onHandleChange} required/>
                <button>Submit</button>
    </form> */}
        </div>
    )
}


export default SignUpForm;