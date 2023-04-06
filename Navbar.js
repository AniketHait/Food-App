import {useRef} from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';




function Navbar() {
    const navRef=useRef();

    const showNavbar =() => {
        navRef.current.classList.toggle('resposive_nav');
    }

    return(
        <header>
            <h1>#yummy foodie break banta hai!</h1>
            <nav ref={navRef}>
                <a href='/#'>Home</a>
                <a href='/#'>My Account</a>
                <a href='/#'>My Orders</a>
                <a href='/#'>Cart</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}><FaTimes/></button>
            </nav>
            <button className="nav-btn" ><FaBars/></button>
        </header>
    )
}

export default Navbar;