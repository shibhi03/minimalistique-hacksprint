import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import "./TestPage.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function TestPage() {
  const language = "Python";
  const [data, setData] = useState(null);
  const [nextQuestion, setNextQuestion] = useState(null);


  useEffect(() => {
    axios
      .get("http://localhost:6969/luwa/api/questions")
      .then((response) => {
        setData(response.data);
        if (response.data && response.data.length > 0) {
          setNextQuestion(response.data[0]);
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Error fetching questions");
      });
  }, []);

  const [i, seti] = useState(1);
  const [queno, setQueno] = useState(1);
  const [button, setButton] = useState("Next");
  function handleButton() {
    if (data !== null && data.length > 0 && i < data.length) {

      let nextIndex = i;
      while (nextIndex < data.length && !(data[nextIndex].language.includes(language))) {
        nextIndex++;
      }

      if (nextIndex < data.length) {
        setNextQuestion(data[nextIndex]);
        seti(nextIndex + 1); 
        setQueno(queno + 1);
      }

      if (i === data.length - 1) setButton("Finish");
    }
  }

  function onSelected() {

  }

  return (
    <Container className="test-Container">
      {nextQuestion !== null ? (
        <Container className="test-innerContainer">
          <Container className="questions">
            <h2 className="ques-no"> Question {queno} </h2>
            <h3 className="question"> {nextQuestion.question} </h3>
          </Container>
          <Container className="options">
            <Container className={`radio-btns`} value="A">
              <p>{nextQuestion.A}</p>
            </Container>
            <Container className={`radio-btns`} value="B">
              <p>{nextQuestion.B}</p>
            </Container>
            <Container className={`radio-btns`} value="C">
              <p>{nextQuestion.C}</p>
            </Container>
            <Container className={`radio-btns`} value="D">
              <p>{nextQuestion.D}</p>
            </Container>
          </Container>
          <Container className="button">
            <Button className="testpage-btn" onClick={handleButton}>
              {button}
            </Button>
          </Container>
        </Container>
      ) : (
        <></>
      )}
    </Container>
  );
}

export default TestPage;
