import { useState } from "react";
import "./Courses.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import java from "../Assets/java.png";
import py from "../Assets/python.png";

export const coursesList = [
  { id: 1, name: "C", img: c },
  { id: 2, name: "C++", img: cpp },
  { id: 3, name: "Java", img: java },
  { id: 4, name: "Python", img: py },
];

export default function Course() {
  const navigate = useNavigate();
  
  const [courseSelected, setCourseSelected] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selected, setSelected] = useState(false);
  
  return (
    <Container className="coursesContainer">
      <Container className="innerContainer">
        <Row>
          <h1 className="course-text ">Choose a course to start learning.</h1>
        </Row>
        <Row className="container courseContainer">
          {coursesList.map((course, index) => (
            <Col
              key={course.id}
              className={`course ${selectedIndex === index ? "clicked" : ""}`}
              onClick={() => {
                setSelectedIndex(index);
                setSelected(true);
                setCourseSelected(course.id);
              }}
            >
              <img className="course-img" src={course.img} alt={course.name} />
              <h2 className="course-name">{course.name}</h2>
            </Col>
          ))}
        </Row>
        <Row className="selected">
          <h3 className="no-crs-selected">
            Selected: {selected ? <span>1</span> : <span>0</span>}/1
          </h3>
        </Row>

        <Row className="next-btn">
            <Button 
            className="nxt-btn btn" 
            disabled={!selected}
            onClick={() => navigate('/signup/known-domain', {state: {coursesList, courseSelected}})}>
              Next
            </Button>
        </Row>
      </Container>
    </Container>
  );
}
