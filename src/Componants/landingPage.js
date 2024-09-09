import background from "../Assets/Untitled-1.png";
import icon from "../Assets/chemistry-sticker-05.png";
import atom from "../Assets/—Pngtree—atom icon_8473596.png";
import chemImage from "../Assets/chem.jpg";
import phyImage from "../Assets/phy.jpg";

const LandingPage = () => {
    return (
        <div className="landing-page">
            <div className="main">
                <img className="atom" src={atom} alt="Atom Icon" />

                <div className="main-img">
                    <img src={background} alt="Main Image" />
                </div>

                <img className="atom-2" src={atom} alt="Atom Icon" />

                <div className="main-content">
                    <h1>
                        منصه <span>الطارق</span>
                    </h1>
                    <h2>
                        أول منصه تعليمية باستعمال <span>الذكاء الاصطناعي</span>
                    </h2>

                    <div className="main-btn">
                        <a className="btn" href="#cs">
                            نتعلم<span>يلا بينا</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* ======== list start ========== */}
            <div className="list">
                <div className="list-img">
                    <img src={icon} alt="Chemistry Sticker" />
                </div>
                <div className="list-text">
                    هنشرحلك منهج <span>  الفزياء و الكيمياء</span> للصف الثاني الثانوي بكل
                    بساطه وسهوله
                </div>
            </div>
            {/* ======== courses start ========== */}
            <div className="courses">
                <a className="card" href="#">
                    <div className="card-img">
                        <img src={chemImage} alt="Course Image 1" />
                    </div>
                    <div className="card-des">
                        <h1>الصف الثاني الثانوي</h1>
                        <p>شرح منهج <span>الكيمياء</span> الصف الثاني الثانوي</p>
                    </div>
                </a>

                <a className="card" href="#">
                    <div className="card-img">
                        <img src={phyImage} alt="Course Image 2" />
                    </div>
                    <div className="card-des">
                        <h1>الصف الثاني الثانوي</h1>
                        <p>شرح منهج <span>الفيزياء</span> الصف الثاني الثانوي</p>
                    </div>
                </a>
            </div>
            {/* ======== landing page end ========== */}
        </div>
    );
};

export default LandingPage;
