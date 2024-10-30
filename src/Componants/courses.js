import { Link } from "react-router-dom";
import "./courses.css";
import Card from "./card";
import {useState } from "react";
import axios from "axios";

const Courses = ({category}) => {
    
    const [showCards, setShowCards] = useState(false);
    const [courses, setCourses] = useState(null);
    const reqOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
    };

    async function getCourses() {
        // console.log(category)
        axios
            .get(
                `${process.env.REACT_APP_NOT_SECRET_CODE}/api/courses?populate=*&filters[category][$eq]=${category}`,
                reqOptions
            )
            .then((res) => {
                // handle success
                setCourses(res.data.data);
                // console.log(res)
                setShowCards(true);
            })
            .catch((error) => {
                // handle error
                console.log(error);
            });
    }

    getCourses()

    return (
        <div className="course-file">
            <h2 className="homeh" id="mainh">
                {category}
            </h2>
            <div className="cards">
                {showCards ? (
                    <>
                        {courses.map((course) => {
                            return (
                                <Card
                                    key={course.id}
                                    id={course.id}
                                    img={`${process.env.REACT_APP_NOT_SECRET_CODE}${course.attributes.courseCoverIMG.data.attributes.url}`}
                                    class="card"
                                    name={course.attributes.title}
                                    info={course.attributes.discription}
                                    // isSub={course.isSub}
                                    editDate={course.attributes.updatedAt}
                                    publishDate={course.attributes.publishedAt}
                                />
                            );
                        })}
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