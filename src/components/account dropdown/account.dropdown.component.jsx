import "./account.dropdown.styles.scss";
import AccountSidebar from "../account sidebar/account.sidebar.component";
import Overview from "../overview/overview.component";

const AccountDropdown = ({name, email}) => {
    
    return(
        <div className="accounts container">
        <AccountSidebar />
        <Overview name={name} email={email} />
        </div>

        )

    
}

export default AccountDropdown;

// Hi, {currentUser.displayName.substring(currentUser.displayName.indexOf(' ') + 1)}