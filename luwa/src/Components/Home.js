import { Row } from "react-bootstrap";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function Home() {
  return (
    <Container className="home">
      <Container className="homeContainer">
        <Row className="title">
          <h1 className="name">LUWA</h1>
          <h2 className="abbrivation">
            <span className="colored">L</span>earn in yo
            <span className="colored">U</span>r{" "}
            <span className="colored">WA</span>y
          </h2>
        </Row>
        <Row className="get-started">
          <Col>
            <button className="btn login">Log in</button>
          </Col>
          <p className="or"></p>
          <Col>
            <button className="btn signup">Sign up</button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
