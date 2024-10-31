import "./authentcation.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineLock, MdOutlineAlternateEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { useRef, useState } from "react";

const Authentcation = ({auth}) => {
    const authToggle = useRef()
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
                                                    <div className="form-group">
                                                        <input
                                                            type="email"
                                                            name="logemail"
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
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="logpass"
                                                            autoComplete="off"
                                                        />
                                                        <MdOutlineLock />
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="btn mt-4"
                                                    >
                                                        submit
                                                    </a>
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
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            name="logname"
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
                                                            name="logemail"
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
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Your Password"
                                                            id="logpass"
                                                            autoComplete="off"
                                                        />
                                                        {/* icon قفل */}
                                                        <MdOutlineLock />
                                                    </div>
                                                    <div className="form-group mt-2">
                                                        <input
                                                            type="password"
                                                            name="logpass"
                                                            className="form-style"
                                                            placeholder="Confirm Your Password"
                                                            id="logpass"
                                                            autoComplete="off"
                                                        />
                                                        {/* icon قفل */}
                                                        <MdOutlineLock />
                                                    </div>
                                                    <a
                                                        href="#"
                                                        className="btn mt-4"
                                                    >
                                                        submit
                                                    </a>
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
