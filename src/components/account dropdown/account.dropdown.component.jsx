import "./account.dropdown.styles.scss";
import AccountSidebar from "../account sidebar/account.sidebar.component";
import Overview from "../overview/overview.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/userReducer/user.selector";

const AccountDropdown = () => {
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);
    const {firstName, lastName, email} = currentUser;
    
    return(
        <div className="accounts container">
        <AccountSidebar />
        <Overview firstName={firstName} lastName={lastName} email={email} />
        </div>

        )

    
}

export default AccountDropdown;

// Hi, {currentUser.displayName.substring(currentUser.displayName.indexOf(' ') + 1)}