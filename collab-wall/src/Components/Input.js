import "../App.css";
import "../index.css";
import React from "react";

const Input = (props) => {
  return (
    <div className="Input">
      <div class="container w-50 m-auto">
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
            <form>
              <textarea
                name="text"
                rows="5"
                cols="10"
                wrap="soft"
                spellCheck="true"
                maxlength="400"
              >
                {" "}
              </textarea>
              {/* <input
                type="text"
                id="userinput"
                placeholder="Type in something to send to the wall"
              /> */}
              <br></br>
              <button type="submit">
                <img src="https://img.icons8.com/ios/50/FFFFFF/circled-up-2.png"/>
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
