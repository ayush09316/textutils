import React, { useState } from "react";

// for changing text use setText{"fbnjdsk"};
export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase", "success");
  };
  const handleLowClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase", "success");
  };
  const clearOnClick = () => {
    setText("");
  };
  const copyOnClick = () => {
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard", "success");
  };
  const handleOnChange = (e) => {
    // console.log("Uppercase was clicked");
    setText(e.target.value);
  };
  const [text, setText] = useState(" ");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={clearOnClick}>
          Clear Text{" "}
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyOnClick}>
          Copy Text{" "}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Text Summary</h1>
        <p>
          {text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} words {text.split('').filter((ele)=>{return ele !==' '}).length}characters
        </p>
        <p>
          {text.length - 1 === 0 ? 0 : 0.008 * text.split(" ").filter((ele)=>{return ele.length!==0}).length} minutes
          read
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0 ? text : "Enter something in textbox to preview."}
        </p>
      </div>
    </>
  );
}
