import "./authentcation.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineLock, MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import axios, { Axios } from "axios";

const Authentcation = ({ authToggle }) => {
    const [message, setMessage] = useState(null);
    const [isAutherized, setIsAuthenticated] = useState(
        localStorage.getItem("token") ? true : false
    );
    console.log("isAutherized", isAutherized);

    const navigate = useNavigate();

    function toLandingPage() {
        setTimeout(() => {
            navigate("/al-tarek-platform");
            window.location.reload();
            return;
        }, 500);
    }

    async function makeRequest(endPoint, reqBody) {
        axios
            .post(
                `${process.env.REACT_APP_NOT_SECRET_CODE}/api/auth/${endPoint}`,
                reqBody,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
            .then((res) => {
                console.log(res);
                if (res.data.jwt && res.data.user) {
                    setMessage('successfull registration')
                    localStorage.setItem("token", res.data.jwt);
                    setIsAuthenticated(true);
                    toLandingPage()
                } else {
                    setMessage('error')
                }
            })
            .catch((err) => {
                console.log(err)
                if (err.response?.data?.error?.message != undefined) {
                    setMessage(err.response?.data?.error?.message)
                } else {
                    setMessage(err.message)
                }
            });
    }

    async function authorizate(endPoint, event) {
        if (isAutherized) {
            setMessage("You already logged in");
            toLandingPage();
        }
        event.preventDefault();
        setMessage(null);
        const formData = new FormData(event.target);
        const jsonData = Object.fromEntries(formData);
        const reqBody = JSON.stringify(jsonData)

        await makeRequest(endPoint, reqBody);
    }

    const authToggleRef = useRef();
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
                                    ref={authToggleRef}
                                    className="checkbox"
                                    type="checkbox"
                                    id="reg-log"
                                    name="reg-log"
                                    checked={authToggle}
                                    disabled={true}
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
                                                    <form
                                                        onSubmit={(e) => {
                                                            authorizate(
                                                                "local",
                                                                e
                                                            );
                                                        }}
                                                    >
                                                        <div className="form-group">
                                                            <input
                                                                type="email"
                                                                name="identifier"
                                                                className="form-style"
                                                                placeholder="Your Email"
                                                                id="registerEmail"
                                                                autoComplete="off"
                                                                required={true}
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
                                                                required={true}
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
            <h4 className="mb-4 pb-3">Sign Up</h4>
            <form onSubmit={(e) => authorizate("register", e)}>
                <div className="form-group">
                    <input
                        type="text"
                        name="logname"
                        className="form-style"
                        placeholder="Your Full Name"
                        id="logname"
                        autoComplete="off"
                        required={true}
                    />
                    <FaUser />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="email"
                        name="logemail"
                        className="form-style"
                        placeholder="Your Email"
                        id="logemail"
                        autoComplete="off"
                        required={true}
                    />
                    <MdOutlineAlternateEmail />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                        required={true}
                    />
                    <MdOutlineLock />
                </div>
                <div className="form-group mt-2">
                    <input
                        type="password"
                        name="confirmPassword"
                        className="form-style"
                        placeholder="Confirm Your Password"
                        id="confirmPassword"
                        autoComplete="off"
                        required={true}
                    />
                    <MdOutlineLock />
                </div>
                <input type="submit" className="btn mt-4" value="Sign Up" />
            </form>
            <div>{message}</div>
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
