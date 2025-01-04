import { useNavigate } from "react-router-dom";
import "./Signup.css";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <Container className="signup-container">
      <Container className="signup-innerContainer">
        <Row className="signup-row">
          <Col className="signup-col">
            <h1 className="signup-title">Hello...</h1>
          </Col>
          <Col className="signup-col">
            <h2 className="signup-text">
              Get strated to personalize your learning journey!
            </h2>
          </Col>
          <Col className="signup-col">
            <Button
              className="signup-btn"
              onClick={() => navigate("/signup/courses")}
            >
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
