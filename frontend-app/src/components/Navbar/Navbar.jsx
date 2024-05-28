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
                    <ul className="nav-link-container debug">
                        <li>Home</li>
                        <li>Create Itinerary</li>
                        <li>Contact</li>
                    </ul>
                    <div className="navbar-profile-logout">
                        <strong>
                            {currentUsername[0].toUpperCase()}
                        </strong>
                        < Button text="Log Out" />
                    </div>
                </>
            }
        </nav>

    )
}

export default Navbar;