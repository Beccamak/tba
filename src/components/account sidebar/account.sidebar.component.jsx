import "./acccount.sidebar.styles.css";
import { Link } from "react-router-dom";
import Button from "../button/button.component";
import { signOutUser } from "../../utils/firebase.js";

const AccountSidebar = () => {
    const signOutUserHandler = () => signOutUser();
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
        <li className="sb-link logout"  onClick={signOutUserHandler}>Logout</li>
        </ul>

        </div>
    )
}


export default AccountSidebar;