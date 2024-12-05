import background from "../Assets/Untitled-1.png";
import icon from "../Assets/chemistry-sticker-05.png";
import atom from "../Assets/—Pngtree—atom icon_8473596.png";
import chemImage from "../Assets/chem.jpg";
import phyImage from "../Assets/phy.jpg";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import Card from "./card";
import axios from "axios";
import Message from "./message";

const LandingPage = () => {
    const [showCards, setShowCards] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [err, setErr] = useState("");
    const [categories, setCategories] = useState(false);
    const messageRef = useRef()
    const rootRef = useRef(null); // Ref to store the root instance

    function showMessage(isErr, message) {
        if (!rootRef.current) {
            rootRef.current = createRoot(messageRef.current);
        }
        rootRef.current.render(
            <Message options={{ isErr: isErr, message: message }} />
        );
    }

    async function getCategories() {
        const reqOptions = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        await axios
            .get(
                `${process.env.REACT_APP_NOT_SECRET_CODE}/api/categories?populate=*`,
                reqOptions
            )
            .then((res) => {
                // console.log(res.data.data)
                if (res.data.data.length === 0) {
                    setShowCards(true);
                } else {
                    setCategories(res.data.data);
                    setShowCards(true);                    
                }
            })
            .catch((error) => {
                if (
                    error.response?.status === 401 &&
                    error.response?.statusText === "Unauthorized"
                ) {
                    showMessage(true, `Error: you must be logged in. please login first`)
                    setErr("you must be logged in. please login first");
                    setShowErrors(true);
                }
                if (error.response?.status === undefined) {
                    showMessage(true, `Error: ${error.message}`);
                    setErr(`${error.message}. please try again later`);
                    setShowErrors(true);
                }
            });
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <div className="landing-page">
            <div className="main">
                <img className="atom" src={atom} alt="Atom Icon" />

                <div className="main-img">
                    <img src={background} alt="img" />
                </div>

                <img className="atom-2" src={atom} alt="Atom Icon" />

                <div className="main-content">
                    <h1>
                        منصه <span>الطارق</span>
                    </h1>
                    <h2>
                        أول منصه تعليمية باستعمال <span>الذكاء الاصطناعي</span>
                    </h2>

                    <a className="main-btnm" href="#categories">
                        يلا بينا <span> نتعلم</span>
                    </a>
                </div>
            </div>
            {/* ======== list start ========== */}
            <div className="list">
                <div className="list-img">
                    <img src={icon} alt="Chemistry Sticker" />
                </div>
                <div className="list-text">
                    هنشرحلك منهج <span> الفزياء و الكيمياء</span> للصف الثاني
                    الثانوي بكل بساطه وسهوله
                </div>
            </div>
            {/* ======== categories start ========== */}
            <div className="categories" id="categories">
                {showErrors ? (
                    <>errors: {err}</>
                ) : showCards ? (
                    <div className="cards">
                        {categories ? (
                            <>
                                {categories.map((category) => {
                                    return (
                                        <Card
                                            key={category.id}
                                            link={`courses/${category.attributes.name}`}
                                            img={`${process.env.REACT_APP_NOT_SECRET_CODE}${category.attributes.coverIMG.data.attributes.url}`}
                                            class="card"
                                            name={category.attributes.title}
                                            info={category.attributes.discription}
                                            // isSub={category.isSub}
                                            editDate={
                                                category.attributes.updatedAt
                                            }
                                            publishDate={
                                                category.attributes.publishedAt
                                            }
                                        />
                                    );
                                })}
                            </>
                        ) : (
                            <>
                                <p>there is no category</p>
                            </>
                        )}
                    </div>
                ) : (
                    <p>(reloading card ...)</p>
                )}
                {/* <Link className="card" to="/al-tarek-platform/courses/Chemistry">
                    <div className="card-img">
                        <img src={chemImage} alt="img" />
                    </div>
                    <div className="card-des">
                        <h1>الصف الثاني الثانوي</h1>
                        <p>
                            شرح منهج <span>الكيمياء</span> الصف الثاني الثانوي
                        </p>
                    </div>
                </Link>

                <Link className="card" to="/al-tarek-platform/courses/Physics">
                    <div className="card-img">
                        <img src={phyImage} alt="Course Image-2 " />
                    </div>
                    <div className="card-des">
                        <h1>الصف الثاني الثانوي</h1>
                        <p>
                            شرح منهج <span>الفيزياء</span> الصف الثاني الثانوي
                        </p>
                    </div>
                </Link> */}
            </div>
            {/* ======== landing page end ========== */}
        </div>
    );
};

export default LandingPage;
