import './courses.css'

function Card(prop) {

    return(
        <div className={prop.class} id={prop.id} key={prop.key}>
            <div className='card-img'><img src={prop.img}></img></div>
            <div className='card-content'>
                <div className="row1">
                    <div className="col1">
                        <h2>{prop.name}</h2>
                        <hr></hr>
                        <div>{prop.info}</div>
                    </div>
                    <div className="isSubscribed">
                        <button>{prop.isSub}</button>
                    </div>
                </div>
                <hr id="hr1"></hr>
                <div className="row2">
                    <button>الدخول للكورس</button>
                    <div className="col2">
                        <p>{prop.editDate}</p>
                        <p>{prop.publishDate}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card