import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';
import { logo } from '../../assets/images/imageJS/homeImg';
import MyDisney from '../../assets/images/svg/myDisney';
import Disney from '../../assets/images/svg/loginIcon/disney';
import Abc from '../../assets/images/svg/loginIcon/abc';
import Espn from '../../assets/images/svg/loginIcon/espn';
import Marvel from '../../assets/images/svg/loginIcon/marvel';
import StarWars from '../../assets/images/svg/loginIcon/starwars';
import Hulu from '../../assets/images/svg/loginIcon/hulu';
import National from '../../assets/images/svg/loginIcon/national';
import Star from '../../assets/images/svg/loginIcon/star';
import { Link } from 'react-router-dom';
import LoginClose from '../../assets/images/svg/loginClose';

export default function LogIn() {
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState({
        required: false,
        invalidFormat: false,
        tooShort: false
    });
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setEmail(e.target.value);
        setErrors({ required: false, invalidFormat: false, tooShort: false });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let valid = true;

        if (!email) {
            setErrors((prevErrors) => ({ ...prevErrors, required: true }));
            valid = false;
        } else if (email.length < 10) {
            setErrors((prevErrors) => ({ ...prevErrors, tooShort: true }));
            valid = false;
        } else if (!validateEmail(email)) {
            setErrors((prevErrors) => ({ ...prevErrors, invalidFormat: true }));
            valid = false;
        }

        if (valid) {
            console.log("Submitted email:", email);
            navigate('/');
        }
    };

    return (
        <div className="login">
            <div className="login-background"></div>
            <div className="login-box">
                <div className="container-login">
                    <div className="login-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="login-box-main">
                        <MyDisney />
                        <h2>Enter your email to continue</h2>
                        <p>Log in to Marvel with your MyDisney account. If you don't have one, you will be prompted to create one.</p>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className={`login-box-input ${errors.required || errors.invalidFormat || errors.tooShort ? 'error' : ''}`}>
                                <input 
                                    type="email" 
                                    placeholder='Email' 
                                    value={email} 
                                    onChange={handleInputChange}
                                />
                                {errors.required && <span>Required</span>}
                                {errors.tooShort && <span>Email must be at least 10 characters long.</span>}
                                {errors.invalidFormat && <span>This email isn't properly formatted. Try again?</span>}
                            </div>
                            <div className="continue-button">
                                <button type="submit">Continue</button>
                            </div>
                        </form>
                        <div className="login-discription">
                            <h3>Marvel is part of The Walt Disney Family of Companies.</h3>
                            <p>MyDisney lets you seamlessly log in to services and experiences across The Walt Disney Family of Companies, such as Disney+, ESPN, Walt Disney World, <a href="https://my.disney.com/">and more.</a></p>
                        </div>
                        <div className="login-icons">
                            <Disney />
                            <Abc />
                            <Espn />
                            <Marvel />
                            <StarWars />
                            <Hulu />
                            <National />
                            <Star />
                        </div>
                    </div>
                </div>
                <div className="login-close">
                    <Link to={"/"}>
                        <div className="login-close-main">
                            <LoginClose />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
