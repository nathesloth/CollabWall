import "../App.css";
import "../index.css";
import React from "react";

const Wall = (props) => {
  return (
    <div className="Wall">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>
              LEAVE YOUR<br></br>MARK
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <p>
              We encourage you to leave something behind on this collab wall.
              <br></br>
              This may be a message, words of inspiration or something
              completely random.<br></br>All messages placed will be curated in
              a final collaboration wall at the end of the exhibit.<br></br>Scan
              the QR code and write away!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wall;
