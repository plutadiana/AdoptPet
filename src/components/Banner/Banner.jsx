import { Link } from "react-router-dom";
import "./banner.css";

function Banner () {
    return (
        <div className="banner container">           
            <div className="banner-content ">
                <h1 className="banner-title">We Love Pets!</h1>
                <p className="banner-subtitle">Transform a Shelter Pet's Life by Welcoming Them into Your Home.</p>
                <Link className="btn-blue" to="/products">Adopt</Link>
            </div>
        </div>
    )
}

export default Banner;