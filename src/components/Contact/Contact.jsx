import "./contact.css";
import Image from "../../assets/contact.png"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="title-adopt">Contact</h2>
                <div className="information-box">
                    <h4 className="subtitle-contact">Information</h4>
                    <div className="information-content">
                        <ul className="contact-ul">
                            <li className="contact-li">
                                <MdEmail />
                                <a href="mailto:petz@gmail.com">petz@gmail.com</a>
                            </li>
                            <li className="contact-li">
                                <FaPhoneAlt />
                                <span>Call us: +373 769 00 000</span>
                            </li>
                            <li className="contact-li">
                                <FaLocationDot />
                                RM, mun Chisinau, str.I Cuza 9
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="contact">
                    <div className="contact-box">
                        <h4 className="subtitle-contact">Send us a message!</h4>
                        <div className="contact-content">
                            <div className="forum-group">
                                <label htmlFor="">Name</label>
                                <input type="text" name="name" className="forum-contact" placeholder="Type your name..." required />
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" className="forum-contact" placeholder="Type your email..." required />
                                <label htmlFor="">Subject</label>
                                <input type="text" name="subject" className="forum-contact" placeholder="Type your subject..." required />
                                <label htmlFor="message">Write your message</label>
                                <textarea name="message" className="forum-contact" id="" cols="20" rows="8"></textarea>
                                <button type="submit" className="btn-pink">Send Message</button>
                            </div>
                        </div>
                    </div>
                    <div className="box-img">
                        <img src={Image} alt="Dog with laptop" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;