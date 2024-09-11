import { Link } from 'react-router-dom'
import './course.css'
import Card from './card'
import { useRef, useState } from 'react';

const Course = () => {
    
    let showBtn = useRef()
    let ul = useRef()
    let subjects = useRef()
    let isShowMore = false
    let showCards = true;
    let [courses, setCourses] = useState( 
        [
            {
                key:"0",
                class:"card",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"1",
                class:"card",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"2",
                class:"card",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"3",
                class:"card",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
            {
                key:"4",
                class:"card",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الشهر الخامس (محمد صلاح - لغة عربية - 3 ثانوي )",
                info:"يناير 2024",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الثلاثاء، ٢٣ يناير ٢٠٢٤",
                publishDate:"السبت، ٣٠ ديسمبر ٢٠٢٣",
            },
        ]
    )
    let [otherCourses, setOtherCourses] = useState( 
        [
            {
                key:"5",
                class:"card other-course",
                img:"https://api.bassthalk.com/courses_images/BEl49wjb2lzsChU0eq9ETqTe6NVCZUPLERvzIBDu.jpg",
                name:"الاختبار الشامل الثاني- محمد صلاح 3ث (أونلاين)",
                info:"محتوى الامتحان:نحو: الوحدة الأولى - الوحدة الثانية (حتى اسم الآلة) + الوحدة الثالثة كاملةأدب: الاتجاه الوجدانيقراءة و نصوص (متحرر)تعبير: الأنماط ( ٣ - ٤ - ٥)قصة: الفصول ( ٣-٤ - ٥ -٦)بلاغة شاملة ( ما تم شرحه من بداية السنة)",
                isSub:"انت مشترك في هذا الكورس",
                editDate:"الجمعة، ٨ ديسمبر ٢٠٢٣",
                publishDate:"الاثنين، ٢٧ نوفمبر ٢٠٢٣",
            },
        ]
    )

    function show() {
        if (isShowMore) {
            isShowMore = false;
            // console.log(isShowMore)
            showBtn.current.innerHTML= 'عرض المزيد'
            ul.current.style.height = '12rem'
            subjects.current.style.height = 'unset'
            return
        } if (!isShowMore) {
            isShowMore = true
            // console.log(isShowMore)
            showBtn.current.innerHTML= 'اخفاء'
            ul.current.style.height = 'max-content'
            subjects.current.style.height = 'max-content'
        }
    }

    return (
        <div className='course-file'>
            <h2 className='homeh' id='mainh'>كورسات الفيزياء</h2>
            <div className='cards'>
                {showCards ? ( 
                    <>
                        {courses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    name = {course.name}
                                    info = {course.info}
                                    isSub = {course.isSub}
                                    editDate = {course.editDate}
                                    publishDate = {course.publishDate}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </div>
            <h3>كورسات اخري</h3>
            <div className='cards other-courses'>
                {showCards ? ( 
                    <>
                        {otherCourses.map((course) => {
                            return(
                                <Card 
                                    id =   {course.id}
                                    img =  {course.img}
                                    class = {course.class}
                                    name = {course.name}
                                    info = {course.info}
                                    isSub = {course.isSub}
                                    editDate = {course.editDate}
                                    publishDate = {course.publishDate}
                                />
                            )
                        })}
                    </> )
                :(
                    <p>error 404</p>
                )}
            </div>
            <hr id='hr2'></hr>
            <div className='to-account'>
                <h6>اعرف تفاصيل اكتر عن حسابك</h6>
                <Link to='/myProfile/user'><button>ملفك الشخصي</button></Link>
            </div>
            {/* <h1 id='mainh'>مواد اديوبات</h1>
            <h4>الصف الثالث الثانوي</h4>
            <div className='subjects' ref={subjects}>
                <ul ref={ul}>
                    <li><Link to='/'>اللغة العربية</Link></li>
                    <li><Link to='/'>اللغة الالمانية</Link></li>
                    <li><Link to='/'>اللغة الفرنسية</Link></li>
                    <li><Link to='/'>اللغة الانجليزية</Link></li>
                    <li><Link to='/'>الفلسفة والمنطق</Link></li>
                    <li><Link to='/'>علم النفس والاجتماع</Link></li>
                    <li><Link to='/'>الرياضيات</Link></li>
                    <li><Link to='/'>الجيولوجيا</Link></li>
                    <li><Link to='/'>الاحياء</Link></li>
                    <li><Link to='/'>التاريخ</Link></li>
                    <li><Link to='/'>الجغرافيا</Link></li>
                    <li><Link to='/'>الكيمياء</Link></li>
                    <li><Link to='/'>اللغة الايطالية</Link></li>
                </ul>
                <button ref={showBtn} onClick={show}>عرض المزيد</button>
            </div> */}
            {/* <h2 className='h2' id='mainh'>اختار مدرسك</h2> */}
            {/* <select>
                <option>علمي علوم</option>
                <option>علمي رياضة</option>
                <option>ادبي</option>
            </select> */}
            {/* <div className='teachers'>
                <Link to='/teachers'>
                    <div className='teacher-card'>
                        <div className='teacher-img'></div>
                        <div>
                            <strong>محمد صلاح</strong>
                            <p>استاذ اللغة العربية</p>
                        </div>
                    </div>
                </Link>
            </div> */}
        </div>
    )
}

export default Course