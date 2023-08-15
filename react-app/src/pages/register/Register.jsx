import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {

    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Passwords dont match!!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("/auth/register", user);
                history("/login");
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Lamasocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Lamasocial
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            placeholder="Username"
                            required
                            ref={username}
                            className="loginInput"
                        />
                        <input
                            placeholder="Email"
                            ref={email}
                            type="email"
                            required
                            className="loginInput"
                        />
                        <input
                            placeholder="Password"
                            ref={password}
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                        />
                        <input
                            placeholder="Password Again"
                            ref={passwordAgain}
                            required
                            className="loginInput"
                            type="password"
                        />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </form>
                </div>
            </div>
        </div >
    )
}
