import "../App.css";
import "../index.css";
import React, { useState, useEffect } from "react";
import Axios from "axios";

const Wall = (props) => {
  const [responseList, setResponseList] = useState([]);

  useEffect(() => {
    Axios.get("https://persona-collabwall.herokuapp.com/api/get").then((response) => {
      console.log(response.data);
      setResponseList(response.data);
    });
  }, [])

  return (
    <div className="Wall" id="Wall">
      <div class="containerA w-100" id="containerA">
      </div>
      <div class="container containerB unselectable">
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
            {responseList.map((val) => {
              return (
                <div className="responses">
                  <p>{val.response}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
