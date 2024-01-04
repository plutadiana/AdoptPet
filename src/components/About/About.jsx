import "./about.css";
import Image from "../../assets/about.png";
import { Link } from "react-router-dom";

function About () {
    return (
        <section className="about-section" id="about">
            <div className="container">
                <h2 className="title-about">About Us</h2>
                <div className="about-content">
                    <div className="about-us-intro">
                        <h4 className="about-subtitle">A Trusted Ally in Pet Adoption: Over <span>33 Years</span> of Excellence </h4>
                        <p className="about-paragraph"> At Petz, we rewrite tales of resilience. With unwavering passion, we rescue and shelter homeless animals, providing care, love, and renewed hope. Collaborating with the compassionate animal community, we match each soul with a caring family, weaving stories of boundless compassion in journeys of joy and transformation.</p>
                        <Link className="btn-pink" to="/#contact">Contact Us</Link>
                    </div>
                    <div>
                        <img className="img-about" src={Image} alt="Person with dog"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;