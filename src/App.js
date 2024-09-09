import "./App.css";
import useLocalStorage from 'use-local-storage';
import Navbar from "./Componants/navbar";
import LandingPage from "./Componants/landingPage";


function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  return (
    <div className="app" data-theme={isDark ? "dark" : "light"}>
      {/* navbar start */}
      <Navbar isChecked={isDark} handleChange={() => {setIsDark(!isDark)}}></Navbar>
      {/* navbar end */}
      {/* landing page start */}
      <LandingPage></LandingPage>
      {/* landing page end */}
    </div>
  );
}

export default App;
