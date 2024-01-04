import "./footer.css";
import Logo from "../../assets/logoo.png";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to="/"><img src={Logo} alt="Logo" /></Link>
                    </div>
                    <div className="social-media-content">
                        <h5>Follow Us</h5>
                        <div className="social-media">
                            <a href="#!"><FaFacebook className="icons" /></a>
                            <a href="#!"><FaTelegramPlane className="icons" /></a>
                            <a href="#!"><FaInstagram className="icons" /></a>
                            <a href="#!"><FaLinkedin className="icons" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <p>Copyright ©  2023 Designed by Diana </p>
            </div>

        </footer>
    )
}

export default Footer;