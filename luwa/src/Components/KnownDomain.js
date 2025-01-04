import { useEffect, useState } from "react";
import "./Courses.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import c from "../Assets/c.png";
import cpp from "../Assets/cpp.png";
import java from "../Assets/java.png";
import py from "../Assets/python.png";
import none from "../Assets/none.png";

export const coursesList = [
  { id: 1, name: "c", img: c },
  { id: 2, name: "c++", img: cpp },
  { id: 3, name: "java", img: java },
  { id: 4, name: "python", img: py },
];

export default function KnownDomain() {
  const excluded = 3;
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selected, setSelected] = useState(false);
  const [added, setAdded] = useState(false);
  const [dispCourses, setDispCourses] = useState(coursesList);

  useEffect(() => {
    if (!added) {
      setDispCourses((prevCrs) => [
        ...prevCrs.filter((_, index) => index+1 !== excluded),
        {id: 5, name: "none", img: none},
      ]);
      setAdded(true);
    }
  }, [added]);

  // function onSelected(e) {
  //   setSelected();

  //   const allElements = document.querySelectorAll(".clicked");
  //   allElements.forEach((e) => e.classList.remove("clicked"));

  //   e.target.classList.add("clicked");
  // }

  return (
    <Container className="coursesContainer">
      <Container className="innerContainer">
        <Row>
          <h1 className="course-text ">Choose a course to start learning.</h1>
        </Row>
        <Row className="container courseContainer">
          {dispCourses
            // .filter((_, index) => index+1 !== excluded)
            .map((course, index) => (
            <Col
              key={course.id}
              className={`course ${selectedIndex === index ? "clicked" : ""}`}
              onClick={() => {setSelectedIndex(index); setSelected(true);}}
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
              >
                Next
            </Button>
        </Row>
      </Container>
    </Container>
  );
}
