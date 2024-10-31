import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import axios from "axios";

const Navbar = ({ isChecked, handleChange }) => {
    const [open, setOpen] = useState(false);
    let drop = useRef();

    const [isAutherized, setIsAuthenticated] = useState(
        localStorage.getItem("token") ? true : false
    );
    console.log("isAutherized", isAutherized);
    const [username, setUserName] = useState(null);

    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    async function accessUser() {
        await axios
            .get(
                `${process.env.REACT_APP_NOT_SECRET_CODE}/api/users/me`,
                reqOptions
            )
            .then((res) => {
                console.log(res.data.username);
                setUserName(res.data.username);
            })
            .catch((err) => {
                console.log(err);
                if (err.status === 403 || err.status === 401) {
                    setIsAuthenticated(false);
                }
            });
    }

    function signOut() {
        localStorage.removeItem("token");
        console.log("Signing out");
        window.location.reload();
    }

    useEffect(() => {
        accessUser();
        if (isAutherized) {
            let handle = (e) => {
                if (!drop.current.contains(e.target)) {
                    setOpen(false);
                }
            };
            document.addEventListener("mousedown", handle);
        }
    });

    return (
        <header className="nav">
            <div className="left-icons">
                <Link to="/al-tarek-platform">
                    <img src={logo} alt="Logo" />
                </Link>
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        value="synthwave"
                        className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
                        onChange={handleChange}
                        checked={isChecked}
                    />
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
            <div className="right-buttons">
                {isAutherized ? (
                    <>
                        <button
                            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg"
                            onClick={() => {
                                setOpen(!open);
                            }}
                        >
                            <FaUser></FaUser>
                        </button>
                        <div
                            className={`user-dropMenu ${open ? "active" : ""}`}
                            ref={drop}
                        >
                            <ul>
                                <Link to="/al-tarek-platform">
                                    <li
                                        onClick={() => {
                                            setOpen(!open);
                                        }}
                                    >
                                        الصفحة الرئيسية
                                    </li>
                                </Link>
                                <hr></hr>
                                <p>اهلا {username}</p>
                                <Link to="/myProfile/favCourses">
                                    <li
                                        onClick={() => {
                                            setOpen(!open);
                                        }}
                                    >
                                        شحن كود السنتر
                                    </li>
                                </Link>
                                <Link to="/myProfile/user">
                                    <li
                                        onClick={() => {
                                            setOpen(!open);
                                        }}
                                    >
                                        حسابي
                                    </li>
                                </Link>
                                <Link to="#">
                                    <li
                                        onClick={() => {
                                            setOpen(!open);
                                            signOut();
                                        }}
                                    >
                                        تسجيل خروج
                                    </li>
                                </Link>
                            </ul>
                        </div>
                    </>
                ) : (
                    <>
                        <Link to="/authentcation/login">
                            <button className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                سجل دخول
                            </button>
                        </Link>
                        <Link to="/authentcation/signin">
                            <button className="btn btn-info btn-xs sm:btn-sm md:btn-md lg:btn-lg">
                                انشئ حساب
                            </button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};

export default Navbar;
