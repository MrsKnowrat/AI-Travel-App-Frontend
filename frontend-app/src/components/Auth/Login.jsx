import Button from "../Button/Button";
import "./Auth.css"

const Login = ({loginFormData, setLoginFormData, handleLogin}) => {


    // captures any change entered into login fields
    const handleChange = (event) => {
        //get name and value in one go
        const { name, value } = event.target;
        setLoginFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    }

    const onLoginButtonClick = (event) => {
        event.preventDefault();
        handleLogin();
    }

    return (
        <div className="login-signup-container">
            <h2>Login</h2>
            <form className="common-form">
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" required onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name="password" required onChange={handleChange}/>
                </div>
                <Button handleClick={onLoginButtonClick} text="Login" style="button-dark"/>
            </form>
        </div>
    )
}

export default Login;