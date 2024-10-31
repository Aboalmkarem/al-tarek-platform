import "./App.css";
import useLocalStorage from "use-local-storage";
import Navbar from "./Componants/navbar";
import LandingPage from "./Componants/landingPage";
import Authentication from "./Componants/authentcation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Componants/footer";
import Courses from './Componants/courses';
import ScrollToTop from "./Componants/ScrollToTop";
import Profile from "./Componants/profile";
import User from "./Componants/profileFiles/user";
import FavCourses from "./Componants/profileFiles/favCourses";
// import { useState } from "react";


function App() {
    const preference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
    // const [courseCategory, setCourseCategory] = useState();
    return (
        <div className="app" data-theme={isDark ? "dark" : "light"}>
            <BrowserRouter>
                <ScrollToTop/>
                {/* navbar start */}
                <Navbar
                    isChecked={isDark}
                    handleChange={() => {
                        setIsDark(!isDark);
                    }}
                />
                {/* navbar end */}
                <Routes>
                    {/* landing page start */}
                    <Route
                        path="/al-tarek-platform"
                        element={<LandingPage/>}
                    />
                    {/* landing page end */}
                    <Route
                        path="/authentcation/login"
                        element={<Authentication authToggle={false} />}
                    />
                    <Route
                        path="/authentcation/signin"
                        element={<Authentication authToggle={true} />}
                    />
                    <Route path="/courses/Chemistry" element={<Courses category={'Chemistry'}/>} />
                    <Route path="/courses/Physics" element={<Courses category={'Physics'}/>} />
                    <Route path='/myProfile/*' element={<Profile></Profile>}>
                        <Route path='user' element={<User></User>}></Route>
                        <Route path="favCourses" element={<FavCourses></FavCourses>}></Route>
                    </Route>
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
