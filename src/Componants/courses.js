import { Link } from "react-router-dom";
import "./courses.css";
import Card from "./card";
import PhysicsImg from "../Assets/phy.jpg";
import chemistryImg from "../Assets/chem.jpg";
import { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { createRoot } from "react-dom/client";
// import Message from "./message";

const Courses = () => {
    const [showCards, setShowCards] = useState(true);
    const [showErrors, setShowErrors] = useState(false);
    const [err, setErr] = useState("");
    const [courses, setCourses] = useState([
        {
            id: 1,
            title: "الكيمياء",
            name: "Chemistry",
            img: chemistryImg,
            discription: 'شرح منهج الكيمياء بطريقة سهلة',
            updatedAt: 'الخميس, 12 نوفمبر 2024',
            publishedAt: 'الخميس, 12 نوفمبر 2024'
        },
        {
            id: 2,
            title: "الفيزياء",
            name: "Physics",
            img: PhysicsImg,
            discription: 'شرح منهج الفيزياء بطريقة سهلة',
            updatedAt: 'الخميس, 12 نوفمبر 2024',
            publishedAt: 'الخميس, 12 نوفمبر 2024'
        }
    ]);
    // const messageRef = useRef()
    // const rootRef = useRef(null); // Ref to store the root instance

    // function showMessage(isErr, message) {
    //     if (!rootRef.current) {
    //         rootRef.current = createRoot(messageRef.current);
    //     }
    //     rootRef.current.render(
    //         <Message options={{ isErr: isErr, message: message }} />
    //     );
    // }

    // async function getCourses() {
    //     const reqOptions = {
    //         headers: {
    //             "Content-Type": "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //     };
    //     await axios
    //         .get(
    //             `${process.env.REACT_APP_NOT_SECRET_CODE}/api/courses?populate=*&filters[category][name][$eq]=${window.location.pathname.split('/courses/')[1]}`,
    //             reqOptions
    //         )
    //         .then((res) => {
    //             // console.log(res.data.data)
    //             if (res.data.data.length === 0) {
    //                 setShowCards(true);
    //             } else {
    //                 setCourses(res.data.data);
    //                 setShowCards(true);
    //             }
    //         })
    //         .catch((error) => {
    //             if (
    //                 error.response?.status === 401 &&
    //                 error.response?.statusText === "Unauthorized"
    //             ) {
    //                 showMessage(true, `Error: you must be logged in. please login first`)
    //                 setErr("you must be logged in. please login first");
    //                 setShowErrors(true);
    //             }
    //             if (error.response?.status === undefined) {
    //                 showMessage(true, `Error: ${error.message}`);
    //                 setErr(`${error.message}. please try again later`);
    //                 setShowErrors(true);
    //             }
    //         });
    // }

    // useEffect(() => {
    //     getCourses();
    // }, []);

    return (
        <div className="courses-file">
            {/* <div ref={messageRef}></div> */}
            <h2 className="homeh" id="mainh">
                {window.location.pathname.split('/courses/')[1]}
            </h2>
            {showErrors ? (
                <>errors: {err}</>
            ) : showCards ? (
                <div className="cards">
                    {courses ? (
                        <>
                            {courses.map((course) => {
                                return (
                                    <Card
                                        key={course.id}
                                        link={`course/${course.id}`}
                                        img={`${course.img}`}
                                        class="card"
                                        name={course.title}
                                        info={course.discription}
                                        // isSub={course.isSub}
                                        editDate={course.updatedAt}
                                        publishDate={
                                            course.publishedAt
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
                </div>
            ) : (
                <p>(reloading card ...)</p>
            )}
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
