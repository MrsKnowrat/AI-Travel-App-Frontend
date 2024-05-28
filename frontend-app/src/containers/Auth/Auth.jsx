import { useContext, useState } from "react"
import Login from "../../components/Auth.Login"
import Signup from "../../components/Auth.Signup"
import Button from "../../components/Button/Button"
import "./Auth.css"
import { postData } from "../../api/api"
import { AuthContext } from "../../contexts/AuthContext"

const Auth = () => {
    const {currentUsername, setCurrentUsername} = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)
    const [loginFormData, setLoginFormData] = useState({
        email: "",
        password: ""
    })
    const [signupFormData, setSignupFormData] = useState({
        username: "",
        email: "",
        password: "",
        street: "",
        city: "",
        state: "",
        zipCode: ""
    })

    const [errorMessages, setErrorMessages] = useState(null)

    const handleLogin = async () => {
        const response = await postData("auth/login", loginFormData)
        console.log(response);
        if (response.hasError) {
            setErrorMessages(response.error)
        } else {
            setCurrentUsername(response.data.username)
        }
    };

    const handleSignup = async () => {
        const transformedData = transformSignupData(signupFormData)
        const response = await postData("auth/signup", transformedData);
        console.log(response);
        if (response.hasError) {
            setErrorMessages(response.error)
        } else {
            setCurrentUsername(response.data.username)
        }
    };

    const transformSignupData = (signupFormData) => {
        const transformedData = {
            username: signupFormData.username,
            email: signupFormData.email,
            password: signupFormData.password,
            address: {
                street: signupFormData.street,
                city: signupFormData.city,
                state: signupFormData.state,
                zipCode: signupFormData.zipCode
            }
        };   
    return transformedData;
    };  

    const toggleAuthMode = () => {
        setIsLogin(!isLogin)
    };

    return (
        <section className="auth-container">
            <div>
                {
                    errorMessages && <h4 className="error">{errorMessages}</h4>
                }
            </div>
            {isLogin ? (
            <Login loginFormData={loginFormData} 
            setLoginFormData={setLoginFormData} 
            handleLogin={handleLogin}
            /> 
            ) : ( 
            <Signup signupFormData={signupFormData} 
            setSignupFormData={setSignupFormData}
            handleSignup={handleSignup}/>
            )}
            <Button 
            handleClick={toggleAuthMode} 
            text={isLogin ? "Go to Sign Up" : "Go to Login"} 
            style="button-dark"
            />   
        </section>
    );
}

export default Auth;