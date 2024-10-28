import "./authentcation.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineLock, MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";

const Authentcation = ({ auth }) => {
    const [message, setMessage] = useState(null);
    const [isAutherized, setIsAuthenticated] = useState(
        localStorage.getItem("token") ? true : false
    );
    console.log("isAutherized", isAutherized);

    const navigate = useNavigate();

    const login = async (event) => {
        if(isAutherized) {
            setMessage("You are already logged in")
            setTimeout(() => {
                navigate("/al-tarek-platform");
                window.location.reload()
                return;
            },500)
        }
        event.preventDefault();
        setMessage(null);
        const formData = new FormData(event.target);
        const jsonData = Object.fromEntries(formData);

        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData),
        };

        const req = await fetch(
            `${process.env.REACT_APP_NOT_SECRET_CODE}/api/auth/local`,
            reqOptions
        );
        const res = await req.json();

        if (res.error) {
            setMessage(res.error.message);
            console.log(res.error.message);
            return;
        }
        if (res.jwt && res.user) {
            setMessage("successfull registeraiton");
            console.log("successfull registeraiton");
            localStorage.setItem("token", res.jwt);
            setTimeout(() => {
                navigate("/al-tarek-platform");
                window.location.reload()
            },500)
        }
    };

    const register = async (event) => {
        if(isAutherized) {
            setMessage("You are already logged in")
            setTimeout(() => {
                navigate("/al-tarek-platform");
                window.location.reload()
                return;
            },500)
        }
        event.preventDefault();
        setMessage(null);
        const formData = new FormData(event.target);
        const jsonData = Object.fromEntries(formData);

        const reqOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(jsonData),
        };

        const req = await fetch(
            "http://localhost:1337/api/auth/local/register",
            reqOptions
        );
        const res = await req.json();

        if (res.error) {
            setMessage(res.error.message);
            console.log(res.error.message);
            if (isAutherized) {setMessage('You are already logged in') 
            setTimeout(() => {
                navigate("/al-tarek-platform")
                window.location.reload()
            },500)}
            return
        }
        
        if (res.jwt && res.user) {
            setMessage("successfull registeraiton");
            console.log("successfull registeraiton");
            localStorage.setItem("token", res.jwt);
            setTimeout(() => {
                navigate("/al-tarek-platform");
                window.location.reload()
            },500)
        }
    };

    const authToggle = useRef();
    return (
        <div className="authentcation">
            <div className="section">
                <div className="container">
                    <div className="row full-height justify-content-center">
                        <div className="col-12 text-center align-self-center py-5">
                            <div className="section pb-5 pt-5 pt-sm-2 text-center">
                                <h6 className="mb-0 pb-3">
                                    <span>Log In </span>
                                    <span>Sign Up</span>
                                </h6>
                                <input
                                    ref={authToggle}
                                    className="checkbox"
                                    type="checkbox"
                                    id="reg-log"
                                    name="reg-log"
                                    checked={auth}
                                    // onClick={() => { authToggle.current.checked = false }}
                                />
                                <label htmlFor="reg-log"></label>
                                <div className="card-3d-wrap mx-auto">
                                    <div className="card-3d-wrapper">
                                        <div className="card-front">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">
                                                        Log In
                                                    </h4>
                                                    <form onSubmit={login}>
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="identifier"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                id="registerEmail"
                                                                autoComplete="off"
                                                            />
                                                            {/* icon email */}
                                                            <MdOutlineAlternateEmail />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="registerPassword"
                                                                autoComplete="off"
                                                            />
                                                            <MdOutlineLock />
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            className="btn mt-4"
                                                        />
                                                    </form>
                                                    <div>{message}</div>
                                                    <p className="mb-0 mt-4 text-center">
                                                        <a
                                                            href="#0"
                                                            className="link"
                                                        >
                                                            Forgot your
                                                            password?
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-back">
                                            <div className="center-wrap">
                                                <div className="section text-center">
                                                    <h4 className="mb-4 pb-3">
                                                        Sign Up
                                                    </h4>
                                                    <form onSubmit={register}>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="username"
                                                                className="form-style"
                                                                placeholder="Your Full Name"
                                                                id="logname"
                                                                autoComplete="off"
                                                            />
                                                            {/* icon person */}
                                                            <FaUser />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="email"
                                                                name="email"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                id="logemail"
                                                                autoComplete="off"
                                                            />
                                                            {/* icon email */}
                                                            <MdOutlineAlternateEmail />
                                                        </div>
                                                        <div className="form-group mt-2">
                                                            <input
                                                                type="password"
                                                                name="password"
                                                                className="form-style"
                                                                placeholder="Your Password"
                                                                id="logpass"
                                                                autoComplete="off"
                                                            />
                                                            {/* icon قفل */}
                                                            <MdOutlineLock />
                                                        </div>
                                                        <input
                                                            type="submit"
                                                            className="btn mt-4"
                                                        />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentcation;
