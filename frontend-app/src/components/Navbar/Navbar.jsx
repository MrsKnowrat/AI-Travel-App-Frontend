import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";

const Navbar = () => {
    const { currentUsername, setCurrentUsername } = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div className='navbar-brand'>
                <div className='appname-tagline-container'>
                    <div className="navbar-appname">Journey</div>
                    <div className="navbar-tagline">Designing Your Bespoke Path to Adventure</div>
                </div>
                {
                    currentUsername && <>
                        <ul className="nav-link-container">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/create-itinerary">Create Itinerary</Link></li>
                            <li><Link to="/profile">Profile</Link></li>
                        </ul>
                        <div className="navbar-profile-logout">
                            <strong>
                                {currentUsername && currentUsername[0].toUpperCase()}
                            </strong>
                            < Button text="Log Out" style="button-light" />
                        </div>
                    </>
                }
            </div>
        </nav>

    )
}

export default Navbar;