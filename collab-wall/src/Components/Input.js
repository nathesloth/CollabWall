import "../App.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import Axios from "axios";
import styled from "styled-components";
import {
  Rectangle,
  Circle,
  Ellipse,
  Line,
  Polyline,
  CornerBox,
  Triangle,
} from "react-shapes";

const Input = (props) => {
  const [response, setResponse] = useState("");
  const [responseList, setResponseList] = useState([]);
  const [circles, setCircles] = useState([]);

  const addResponse = () => {
    Axios.post("http://localhost:3010/input/create", {
      response: response,
    }).then(() => {
      console.log("success");
    });
  };

  const getResponses = () => {
    Axios.get("http://localhost:3010/responses").then((response) => {
      setResponseList(response.data);
    });
  };

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault(); // 👈️ prevent page refresh

    // 👇️ clear all input values in the form
    setResponse("");
  };

  const mouseCool = (event) => {
    let rect = event.currentTarget.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    // Fix it a bit to make it more intuitive
    return [x, y];
  };

  const addCircle = (event) => {
    let [x, y] = mouseCool(event);

    console.log(x + " " + y);
    const divstyle = { position: "absolute", top: y + "px", left: x + "px" };

    var newCircle = (
      <div key={circles.length + 1} className="circle" style={divstyle}></div>
    );
    // update the array of circles; you HAVE to spread the current array
    // as 'circles' is immutible and will not accept new info
    let allCircles;

    // Only create circles when it meets this limit, otherwise do not add
    if (circles.length < 5) {
      allCircles = [...circles, newCircle];
    } else {
      allCircles = [...circles];
    }

    if (circles.length == 5) {
      allCircles.shift();
    }

    // update 'circles'
    setCircles(allCircles);
  };

  console.log(circles);

  return (
    <div className="Input" onClick={addCircle}>
      <div class="containerA w-100">{circles}</div>
      <div class="container containerB w-50 m-auto">
        <div class="row">
          <div class="col-12">
            <h1>PERSONA</h1>
          </div>
          <div class="message col-12 m-auto align-center">
            <span>
              Type in an anonymous message to stick to the wall! Style it too to
              make it yours
            </span>
          </div>
        </div>
        {/* <div class="row">
        </div> */}
        <div class="row">
          <div class="col-12">
            <form onSubmit={handleSubmit}>
              <textarea
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
              {/* <input
                type="text"
                id="userinput"
                placeholder="Type in something to send to the wall"
              /> */}
              <br></br>
              <button type="submit" onClick={addResponse}>
                <img src="https://img.icons8.com/ios/50/FFFFFF/circled-up-2.png" />
                {/* <i class="bi bi-arrow-up-circle"></i> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
