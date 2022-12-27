import React from 'react';
import './Button.css';

const Button = (props) => {

    const {btnType, btnText, btnOnClick, customClass} = props;
    return (
        <div
        className={` ${
            btnType === "Primary" 
            ?
            `button primary-btn ${customClass}`
            :
            `button secondary-btn ${customClass}`
        }`}
        onClick={btnOnClick}
        >
            {btnText}
        </div>
    );
};

export default Button;