import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

export default function Home()
{
    return (
        <div className="home-container">
           <Navbar />
           
            <h1>Home</h1>
            <p>
                this is the home page . it is a react component as a view.
            </p>

            <Footer /> 
        </div>
    )       
}
