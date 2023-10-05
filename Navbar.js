import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        
            <nav className="division">
                
            <Link className="nav-name"to="/">Home</Link>
      <Link className="nav-name" to="/about">About</Link>
      <Link  className="nav-name" to="/contact">Contact</Link>
      </nav>
           
    );
}