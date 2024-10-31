import { Link } from "react-router-dom";
import "./courses.css";
import Card from "./card";
import { useEffect, useState } from "react";
import axios from "axios";

const Courses = ({ category }) => {
    const [showCards, setShowCards] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [err, setErr] = useState("");
    const [courses, setCourses] = useState(false);

    async function getCourses() {
        const reqOptions = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        };
        axios
            .get(
                `${process.env.REACT_APP_NOT_SECRET_CODE}/api/courses?populate=*&filters[category][$eq]=${category}`,
                reqOptions
            )
            .then((res) => {
                // console.log(res.data.data)
                if (res.data.data.length === 0) {
                    setShowCards(true);
                } else {
                    setCourses(res.data.data);
                    setShowCards(true);
                }
            })
            .catch((error) => {
                // console.log(error);
                // console.log(error.status);
                if (
                    error.response?.status === 401 &&
                    error.response?.statusText === "Unauthorized"
                ) {
                    setErr("you must be logged in. please login first");
                    setShowErrors(true);
                }
                if (error.response?.status === undefined) {
                    setErr(`${error.message}. please try again later`);
                    setShowErrors(true);
                }
            });
    }

    useEffect(() => {
        getCourses();
    }, []);

    return (
        <div className="courses-file">
            <h2 className="homeh" id="mainh">
                {category}
            </h2>
            <div className="cards">
                {showErrors ? (
                    <>errors: {err}</>
                ) : showCards ? (
                    <>
                        {courses ? (
                            <>
                                {courses.map((course) => {
                                    return (
                                        <Card
                                            key={course.id}
                                            id={course.id}
                                            link={course.id}
                                            img={`${process.env.REACT_APP_NOT_SECRET_CODE}${course.attributes.courseCoverIMG.data.attributes.url}`}
                                            class="card"
                                            name={course.attributes.title}
                                            info={course.attributes.discription}
                                            // isSub={course.isSub}
                                            editDate={
                                                course.attributes.updatedAt
                                            }
                                            publishDate={
                                                course.attributes.publishedAt
                                            }
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <p>there is no course</p>
                            </>
                        )}
                    </>
                ) : (
                    <p>(reloading card ...)</p>
                )}
            </div>
            <hr id="hr2"></hr>
            <div className="to-account">
                <h6>اعرف تفاصيل اكتر عن حسابك</h6>
                <Link to="/myProfile/user">
                    <button>ملفك الشخصي</button>
                </Link>
            </div>
        </div>
    );
};

export default Courses;
