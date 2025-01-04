import { useState } from "react";
import "./Courses.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import java from "../Assets/java.png";
import py from "../Assets/python.png";

export const coursesList = [
  { id: 1, name: "c", img: c },
  { id: 2, name: "c++", img: cpp },
  { id: 3, name: "java", img: java },
  { id: 4, name: "python", img: py },
];

export default function Course() {
  const [courseSelected, setCourseSelected] = useState();
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selected, setSelected] = useState(false);

  function onSelected(e) {
    setSelected();

    const allElements = document.querySelectorAll(".clicked");
    allElements.forEach((e) => e.classList.remove("clicked"));

    e.target.classList.add("clicked");
  }

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
              className={`course ${selectedIndex === index ? "selected" : ""}`}
              onClick={() => {setSelectedIndex(index); setCourseSelected(course);}}
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
            <Button className="nxt-btn btn">Next</Button>
        </Row>
      </Container>
    </Container>
  );
}
