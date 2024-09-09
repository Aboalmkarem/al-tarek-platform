import chemImage from '../Assets/chem.jpg';
import phyImage from '../Assets/phy.jpg';



const Courses = () => {
    return(
     <div className="courses">
        
        <a className="card" href="#">
          <div className="card-img">
            <img src={chemImage} alt="Course Image 1" />
          </div>
          <div className="card-des">
            <h1>الصف الثاني الثانوي</h1>
            <p>شرح منهج الكيمياء الصف الثاني الثانوي</p>
          </div>
        </a>
      
        <a className="card" href="#">
          <div className="card-img">
            <img src={phyImage} alt="Course Image 2" />
          </div>
          <div className="card-des">
            <h1>الصف الثاني الثانوي</h1>
            <p>شرح منهج الفيزياء الصف الثاني الثانوي</p>
          </div>
        </a>
      </div>
      )

}

export default Courses;