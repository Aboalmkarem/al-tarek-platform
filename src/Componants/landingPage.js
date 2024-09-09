

import background from '../Assets/Untitled-1.png'
import atom from '../Assets/—Pngtree—atom icon_8473596.png'


const LandingPage = () => {
    return (
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
    );
};

export default LandingPage;