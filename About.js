import "./About.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

export default function About(){
    return (
        <div className="footer-container">
            
        
             <Navbar />
             <h1>About</h1>
            <p>
                this is the contact page . it is a react component as a view.
            </p>

            <Footer />
        </div>
    );
}