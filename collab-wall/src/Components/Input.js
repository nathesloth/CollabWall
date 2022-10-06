import "../App.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";

function setNone() {
  document.getElementById("hello").style.height = "100px";
}

function setiMessage() {

}

function setNote() {

}

function setInsta() {

}


const Input = (props) => {
  const [response, setResponse] = useState("");
  const [responseList, setResponseList] = useState([]);

  // const addResponse = () => {
  //   Axios.post("http://localhost:3002/api/insert", {
  //     response: response,
  //   }).then(() => {
  //     console.log("success");
  //   });
  // };

  // const getResponses = () => {
  //   Axios.get("http://localhost:3010/responses").then((response) => {
  //     setResponseList(response.data);
  //   });
  // };

  const addResponse = () => {
    Axios.post("https://persona-collabwall.herokuapp.com/api/insert", {
      response: response,
    }).then(() => {
      console.log("success");
    });
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setResponse("");
  };

  return (
    <div className="Input">
      <div class="containerA w-100" id="containerA"></div>
      <div class="container align-center w-100 containerB unselectable">
        <div class="row">
          <div class="col-12">
            <h1>PERSONA</h1>
          </div>
          <div class="message col-sm-8 col-md-10 align-center">
            <span>
              Type in an anonymous message to stick to the wall! Style it too to
              make it yours
            </span>
          </div>
        </div>
        <div class="row hey">
          <div class="col-2 col-md-2 style-select">
            <button onClick="pressedRight()">
              <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" />
            </button>
          </div>
          <div class="col-8 col-md-8 justify-center">
            <form onSubmit={handleSubmit}>
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" /> */}
              <div class="align-middle">
                <textarea
                  id="hello"
                  name="text"
                  rows="5"
                  cols="10"
                  wrap="soft"
                  spellCheck="true"
                  maxlength="400"
                  value={response}
                  onChange={(event) => {
                    setResponse(event.target.value);
                  }}
                ></textarea>
              </div>
              <div class="btn-group">
                <button onClick="setNone()">None</button>
                <button onClick="setiMessage()">iMessage</button>
                <button onClick="setInsta()">Insta</button>
                <button onClick="setNote()">Note</button>
              </div>


              <button type="submit" onClick={addResponse}>
                <img src="https://img.icons8.com/ios/50/FFFFFF/circled-up-2.png" />
                {/* <i class="bi bi-arrow-up-circle"></i> */}
              </button>
              {/* <Link to="/wall">View the Wall</Link> */}
              {/* <img src="https://img.icons8.com/material-rounded/48/000000/chevron-left.png" /> */}
            </form>
          </div>
          <div class="col-2 col-md-2 style-select">
            <button id="rightBtn">
              <img src="https://img.icons8.com/material-rounded/48/000000/chevron-right.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
