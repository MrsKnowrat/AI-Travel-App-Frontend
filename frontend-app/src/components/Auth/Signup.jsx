import Button from "../Button/Button";
import "./Auth.css";

const Signup = ({signupFormData, setSignupFormData, handleSignup}) => {

    const handleChange = (event) => {
        console.log(event.target);
        //get name and value in one go
        const { name, value } = event.target;
        setSignupFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const onSignupButtonClick = (event) => {
        event.preventDefault();
        handleSignup();
    }

    return (
        <div className="login-signup-container">
            <h2>Signup</h2>
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
                text="Sign Up" style="button-dark"
                />
            </form>
        </div>
    )
}

export default Signup;