import PropTypes from 'prop-types';
import './Button.css';
/* add on click prop later*/

const Button = ({text, handleClick, style}) => {
    
    return (
        <button onClick={handleClick} 
        className={`button ${style}`}>{text}</button>
    );
};
export default Button;
