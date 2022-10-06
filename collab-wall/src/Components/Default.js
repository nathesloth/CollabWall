import "../App.css";
import "../index.css";
import React from "react";
import { useState } from "react";
import Axios from "axios";

const Default = (props) => {
    const [responseList, setResponseList] = useState([]);
    const [circles, setCircles] = useState([]);
    const [isTimeout, setTimer] = useState([false, false, false, false, false]);

    const getResponses = () => {
        Axios.get("http://localhost:3002/api/get").then((response) => {
            setResponseList(response.data);
        });
    };

    const mouseCool = (event) => {
        let rect = event.currentTarget.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        // Fix it a bit to make it more intuitive
        return [x, y];
    };

    // When user presses button, add a bubble
    const addCircle = (event) => {
        let [x, y] = mouseCool(event);

        console.log(x + " " + y);

        console.log();
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
        // <div className="Wall" onClick={addCircle}>
        <div className="Wall" id="Wall">
            <div class="containerA w-100" id="containerA">
                {/* <ScriptTag
          id="script-tag"
          class="containerA w-100"
          type="text/javascript"
          src="sketch.js"
        /> */}
            </div>
            <div class="container containerB unselectable" onLoad={getResponses}>
                <div class="row">
                    <div class="col-12">
                        <h1>
                            LEAVE YOUR<br></br>MARK
                        </h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        {/* <p>
              We encourage you to leave something behind on this collab wall.
              <br></br>
              This may be a message, words of inspiration or something
              completely random.<br></br>All messages placed will be curated in
              a final collaboration wall at the end of the exhibit.<br></br>Scan
              the QR code and write away!
            </p> */}
                    </div>
                    <div>
                        {responseList.map((val, key) => {
                            return (
                                <div className="responses">
                                    <p>{val.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Default;
