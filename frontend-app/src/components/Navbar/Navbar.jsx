import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import "./Navbar.css";

const Navbar = () => {
    const {currentUsername, setCurrentUsername} = useContext(AuthContext)

    return (
        <nav className="navbar">
            <div className="navbar-appname">Journey</div>
            {
                currentUsername && <>
                    <ul className="nav-link-container">
                        <li>Home</li>
                        <li>Create Itinerary</li>
                        <li>Profile</li>
                    </ul>
                    <div className="navbar-profile-logout">
                        <strong>
                            {currentUsername[0].toUpperCase()}
                        </strong>
                        < Button text="Log Out" style="button-light"/>
                    </div>
                </>
            }
        </nav>

    )
}

export default Navbar;