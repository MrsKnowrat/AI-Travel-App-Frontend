import Button from "../Button/Button";
import "./Auth.css";
import PropTypes from 'prop-types'; // Import PropTypes to validate props

const Signup = ({setSignupFormData, handleSignup}) => {
    Signup.propTypes = {
        signupFormData: PropTypes.object.isRequired,
        setSignupFormData: PropTypes.func.isRequired,
        handleSignup: PropTypes.func.isRequired,
    };

    const handleChange = (event) => {
        console.log(event.target);
        //get name and value in one go
        const { name, value } = event.target;
        //console.log("Updating field:", name, "Value:", value);  // debug
        setSignupFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const onSignupButtonClick = (event) => {
        event.preventDefault();
       // console.log("Form Data on Submit:", signupFormData);  // Debug
        handleSignup();
    }

    return (
        <div className="login-signup-container">
            <h2>Sign Up</h2>
            <form className="common-form">
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" name="password" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name="firstName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name="lastName" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dateOfBirth">Date of Birth (yyyy-mm-dd): </label>
                    <input type="text" name="dateOfBirth" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="street">Street: </label>
                    <input type="text" name="street" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="city">City: </label>
                    <input type="text" name="city" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="state">State: </label>
                    <input type="text" name="state" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="zipCode">Zip Code: </label>
                    <input type="text" name="zipCode" onChange={handleChange} />
                </div>
                < Button handleClick={onSignupButtonClick} 
                text="Let's Go!" style="button-dark"
                />
            </form>
        </div>
    )
}

export default Signup;