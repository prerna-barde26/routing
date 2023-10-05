import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function Contact() {
    return (
        <div className="contact-container">
           
            <Navbar />
            <h1>Contact</h1>
            <p>
                this is the contact page . it is a react component as a view.
            </p>
            <Footer />
        </div>
    );
}