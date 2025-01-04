import { useEffect, useState } from "react";
import "./Courses.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import none from "../Assets/none.png";

export default function KnownDomain() {
  const navigate = useNavigate();
  const location = useLocation();

  const excluded = location.state.courseSelected;
  const courseList = location.state.coursesList;

  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [selected, setSelected] = useState(false);
  const [added, setAdded] = useState(false);
  const [dispCourses, setDispCourses] = useState(courseList);

  useEffect(() => {
    if (!added) {
      setDispCourses((prevCrs) => [
        ...prevCrs.filter((_, index) => index+1 !== excluded),
        {id: 5, name: "Fresher", img: none},
      ]);
      setAdded(true);
    }
  }, [added]);

  return (
    <Container className="coursesContainer">
      <Container className="innerContainer">
        <Row>
          <h1 className="course-text ">Choose your known language</h1>
        </Row>
        <Row className="container courseContainer">
          {dispCourses
            // .filter((_, index) => index+1 !== excluded)
            .map((course, index) => (
            <Col
              key={course.id}
              className={`course ${selectedIndex === index ? "clicked" : ""}`}
              onClick={() => {
                setSelectedIndex(index); 
                setSelected(true);
                setSelectedDomain(course.name);
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
              onClick={()=>
                selectedDomain !== "Fresher" ? navigate('/takeTest', {state: {selectedDomain}}) : console.log("none")}
              >
                Next
            </Button>
            <Button 
              className="back-btn btn"
              style={{
                backgroundColor: '#FF914D',
              }}
              onClick={()=>navigate(-1)}
              >
                Back
            </Button>
        </Row>
      </Container>
    </Container>
  );
}
