

const Course = () => {
    return (
        <div className="course-page">
            <h1>{window.location.pathname.split('/')[2]} Course Page</h1>
            <p>This is the {window.location.pathname.split('/')[3]} course page.</p>
        </div>
    )
}

export default Course;