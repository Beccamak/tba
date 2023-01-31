import {css,Button, Navbar, Image} from "@nextui-org/react";
import Logo from "../assets/logo.png";


const NavigationBar = () => {
    return(
        <Navbar variant="sticky">
        <Navbar.Brand>
        <Image   
      width={120}
      height={120}  
      maxDelay={10000}
      src={Logo}
      alt="Total Beauty Affairs"
    />
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
        <Navbar.Link  isActive href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Home</Navbar.Link>
        <Navbar.Link href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>About us</Navbar.Link>
        <Navbar.Link href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Contact us</Navbar.Link>
        
        </Navbar.Content>

       <Navbar.Content>
       <Navbar.Link href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Shop</Navbar.Link>
        <Navbar.Link href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Services</Navbar.Link>
        <Navbar.Link href="#" css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Cart
        <span>0</span>
        </Navbar.Link>
       <Navbar.Link css={{'&:hover': {fontWeight: "$bold", color: "$000000", opacity: "$1"}}}>Login</Navbar.Link>
       <Navbar.Item>
       <Button auto flat css={{px: "$1.4rem", bg: "#000000", color: "#FFFFFF"}} className="btn" >Sign Up</Button>
       </Navbar.Item>

        </Navbar.Content>
        </Navbar>

    )
}


export default NavigationBar;