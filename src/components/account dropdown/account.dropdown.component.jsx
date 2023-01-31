import "./account.dropdown.styles.scss";
import useMountAndUnmountTransition from "../transition hook/use.transition.component";
import { useSelector } from "react-redux";
import { selectIsAccountOpen } from "../../store/userReducer/user.selector";
import { signOutUser } from "../../utils/firebase";
import Button from "../button/button.component";
const AccountDropdown = ({name, email}) => {
    const isAccountOpen = useSelector(selectIsAccountOpen);
    const accountHasTransitionedIn = useMountAndUnmountTransition(isAccountOpen, 1000);  
    return(
        <div className={`account-dropdown ${accountHasTransitionedIn && 'account-in'} ${isAccountOpen && 'account-visible'}`}>
        <p>Welcome, {name? name: "user"}</p>
        <Button  children="LOG OUT" onClickHandler={signOutUser}/>
        </div>

        )

    
}

export default AccountDropdown;

// Hi, {currentUser.displayName.substring(currentUser.displayName.indexOf(' ') + 1)}