import "../App.css";
import "../index.css";
import React from "react";

const Input = (props) => {
  return (
    <div className="Input align-middle">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>PERSONA</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <form>
              <input
                type="text"
                id="userinput"
                placeholder="Type in something to send to the wall"
              />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
