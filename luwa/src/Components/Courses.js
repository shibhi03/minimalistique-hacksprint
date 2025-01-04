import { useState } from "react";
import "./Courses.css";
import { Container, Row } from "react-bootstrap";

// export const courseList = ['c', 'c++', 'Java', 'Python'];

export default function Course() {

    const [courseSelected, setcourseSelected] = useState();

    return (
        <Container className="coursesContainer">
            <Container>
                <Row>
                    <h1 className="course-text">Choose a course to start learning.</h1>
                </Row>
                <Row className="container courseContainer">
                    <div className="course">C</div>
                    <div className="course">C++</div>
                    <div className="course">Java</div>
                    <div className="course">Python</div>
                </Row>
            </Container>
        </Container>
    );
}
