
import './App.css'
import background from './image/Untitled-1.png'
import image from './image/logo.png'
import atom from './image/—Pngtree—atom icon_8473596.png'

function App() {
  return (
    <div>
      {/* header */}
    <header>
      <img src={image} alt="Logo" />
      <ul>
        <li className="li1">
          <a href="#">سجل دخول</a>
        </li>
        <li className="li2">
          <a href="#">انشئ حساب</a>
        </li>
      </ul>
    </header>

    {/* end header */}


    {/* start main */}
    <div className="main">
    <img className="atom" src={atom} alt="Atom Icon" />
    
    <div className="main-img">
      <img src={background} alt="Main Image" />
    </div>
  
    <img className="atom-2" src={atom} alt="Atom Icon" />
  
    <div className="main-content">
      <h1>منصه <span>الطارق</span></h1>
      <h2>أول منصه تعليمية باستعمال <span>الذكاء الاصطناعي</span></h2>
      
      <div className="main-btn">
        <a className="btn" href="#cs">يلا بينا <span>نتعلم</span></a>
      </div>
    </div>
   </div>
   {/* end main */}
  </div>
    


  );
}

export default App;
