import "./NavBar.css"
import {Link} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/">Dashboard</Link>
                <Link to="/">Books</Link>
                <Link to="/">Orders</Link>
                <Link to="/">Profile</Link>
                <Link to="/">Cart</Link>
                <Link to="/login">Login/Signup</Link>
        </nav>
    );



}