import "./acccount.sidebar.styles.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/button.component";
import { signOutUser } from "../../utils/firebase.js";
import Axios from 'axios';
import { userSignInUpSuccess } from "../../store/userReducer/user.action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

const AccountSidebar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const sucessfulLogout  = (msg) => {
        toast.success( msg, {
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

    const signOutUserHandler = async () => { 
    
            try {
               Axios.get("http://localhost:5000/auth/logout").then(res=>{
                dispatch(userSignInUpSuccess(null));
                sucessfulLogout('res.data.msg');
                navigate("/");

               } );
                
            
               
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
        
     } ;
    return(
        <div className="acc-sb">
        <ul>
        <li className="sb">ACCOUNT</li>
        <Link to="/" className="sb-link" >Overview</Link>
        <Link to="/" className="sb-link" >Orders</Link>
        <Link to="/" className="sb-link" >Shipping Address</Link>
        <Link to="/" className="sb-link" >Recently Viewed</Link>
        <Link to="/" className="sb-link" >Saved Items</Link>
        <Link to="/" className="sb-link" >Feedback</Link>
        <Link to="/" className="sb-link" >Settings</Link>
        <Link to="/" className="sb-link" >Help Center</Link>
        <Link to="/" className="sb-link" >Close Account</Link>
        <li className="sb-link logout"  onClick={signOutUserHandler}>Log out</li>
        </ul>
        <ToastContainer />
        </div>
    )
}


export default AccountSidebar;