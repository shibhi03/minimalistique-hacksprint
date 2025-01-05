import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./TestPage.css";

function TestPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:6969/luwa/api/questions")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching questions");
      });
  }, []);

  console.log(data);

  return (
    <Container className="test-Container">
      <Container className="test-innerContainer">
        <ul>
          {data !== null ?
           data.map((data, index) => (
            <li key={index}>{data.question}</li>
          )) : 
          <p>Loading...</p>
          }
        </ul>
      </Container>
    </Container>
  );
}

export default TestPage;
