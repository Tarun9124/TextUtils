import React, { useState } from "react";

export default function TextForm(props) {
  const UpperCase = () => {
    console.log("UpperCase Loaded");
    setText(text.toUpperCase());
    props.showAlert(" : Converted to Uppercase!", "success");
  };

  const LowerCase = () => {
    console.log("LowerCase Loaded");
    setText(text.toLowerCase());
    props.showAlert(" : Converted to Lowercase!", "success");
  };

  const clearText = () => {
    console.log("Clear Text Loaded");
    setText("");
    props.showAlert(" : Text Cleared!", "success");
  };

  const copyText = () => {
    console.log("Copy Text Loaded");
    navigator.clipboard.writeText(text);
    props.showAlert(" : Text Copied to ClipBoard!", "success");
  };

  const capText = () => {
    console.log("Cap Text Loaded");
    setText(
      text
        .split(" ")
        .map((i) => i.replace(i.charAt(0), i.charAt(0).toUpperCase()))
        .join(" ")
    );
    props.showAlert(" : Capatalize Applied!", "success");
  };

  const reverseText = () => {
    console.log("Reverse Text Loaded");
    setText(text.split("").reverse().join(""));
    props.showAlert(" : Reverse Text is Done!", "success");
  };

  const handlechange = (e) => {
    console.log("On Change");
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <div className="form-group">
          <label className="display-4">Enter Text to Analyze</label>
          <textarea
            className="form-control txtarea my-1"
            onChange={handlechange}
            style={{
              background: props.mode === "dark" ? "#454545" : "white",
              border:
                props.mode === "dark" ? "1px solid white" : "1px solid black",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            rows="10"
          ></textarea>
        </div>
        <button
          type="submit"
          onClick={UpperCase}
          className="btn btn-primary mx-3 my-3"
        >
          UpperCase
        </button>
        <button
          type="submit"
          onClick={LowerCase}
          className="btn btn-primary mx-3 my-3"
        >
          LowerCase
        </button>
        <button
          type="submit"
          onClick={capText}
          className="btn btn-primary mx-3 my-3"
        >
          Capitalize
        </button>
        <button
          type="submit"
          onClick={reverseText}
          className="btn btn-primary mx-3 my-3"
        >
          Reverse Text
        </button>
        <button
          type="submit"
          onClick={copyText}
          className="btn btn-primary mx-3 my-3"
        >
          Copy Text
        </button>
        <button
          type="submit"
          onClick={clearText}
          className="btn btn-primary mx-3 my-3"
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-4"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          Words :{" "}
          <b>
            {
              text.split(/\s+/).filter((e) => {
                return e.length != 0;
              }).length
            }
          </b>
          <br />
          Characters : <b>{text.length}</b> <br />
          Number Of Lines : <b>{text.split("\n").length}</b> <br />
          Read Time : <b>{0.008 * text.split("").length}</b> Minutes
        </p>

        <h3>Your Text Preview</h3>
        <p>{text.length > 0 ? text : "Enter Something to Preview"}</p>
      </div>
    </>
  );
}
