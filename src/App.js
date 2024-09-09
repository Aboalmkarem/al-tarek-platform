import "./App.css";
import useLocalStorage from "use-local-storage";
import Navbar from "./Componants/navbar";
import LandingPage from "./Componants/landingPage";
import Authentication from "./Componants/authentcation";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Componants/footer";
import Course from "./Componants/course";

function App() {
    const preference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);
    return (
        <div className="app" data-theme={isDark ? "dark" : "light"}>
            <BrowserRouter>
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
                        element={<LandingPage />}
                    />
                    {/* landing page end */}
                    <Route path="/authintcation" element={<Authentication />} />
                    <Route path="/course" element={<Course />} />
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </div>
    );
}

export default App;
