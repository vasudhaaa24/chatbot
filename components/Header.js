import logo from '../Images/logo.jpg';
import { Link } from "react-router-dom"; // imported Link for client side routing
import { useNavigate } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import useLocalStorage from "../Hooks/useLocalStorage";
import { useEffect } from "react";

// Title component for display logo
const Title = () => (
    <Link to="/">
        <img
            className="logo"
            src={logo}
            alt="Food Fire"
            title="Food Fire"
        />
    </Link>
);

// Header component for header section: Logo, Nav Items
const Header = () => {
    const navigate = useNavigate();

    // call custom hook useLocalStorage for getting localStorage value of user
    const [getLocalStorage, , clearLocalStorage] = useLocalStorage("user");

    return (
        <div className="header">
            <Title />

            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Header;