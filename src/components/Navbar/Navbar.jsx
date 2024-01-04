import "./navbar.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/logoo.png";
import { FaCartShopping } from "react-icons/fa6";

function Navbar () {
    return (
            <nav className="stuck navbar">
                <div className="container navbar-section ">
                    <Link className="nav-logo" to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <div className="nav">
                        <ul className="navbar-nav">
                            <li className="nav-item"><a href="#about" className="nav-link">About Us</a></li>
                            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                            <li className="nav-item"><Link className="nav-link" to="/adoption/:category">Adoption</Link></li>
                        </ul>
                        <ul className="navbar-nav centred-nav">
                            <li className="nav-item"><Link className="nav-link center" to='/login'>Log in</Link></li>
                            <li className="nav-item"><Link className="nav-link center" to="/cart"><FaCartShopping className="cart-icon"/></Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar;