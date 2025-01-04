import { Container, Row, Button } from "react-bootstrap";
import './Taketest.css';

export default function TakeTest() {
  const course = "C++";
  return (
    <Container className="takeTestContainer">
      <Container className="test-innerContainer">
        <Row>
          <h1 className="test-text ">Let's analyze your level in { course }</h1>
        </Row>
        <Row className="test-btns">
            <Button className="test-btn btn">
                Take Test
            </Button>
            <Button className="back-btn btn">
                Back
            </Button>
        </Row>
      </Container>
    </Container>
  );
}
