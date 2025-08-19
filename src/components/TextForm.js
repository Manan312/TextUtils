import React, { useState } from "react";

export default function TextForm({ heading, mode = 'light',showAlert,buttonColor }) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    //console.log("Text changed");
    setText(event.target.value);
    // setText(event.target.value);
  };
  const handleUpClick = () => {
    //console.log("Button clicked!");
    // setText(text.toUpperCase());
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "success");
  };
  const handleLowerClick = () => {
    //console.log("Button clicked!");
    // setText(text.toUpperCase());
    setText(text.toLowerCase());
    showAlert("Converted to Lowercase", "success");
  };
  const handleSentenceCaseClick = () => {
    let newText = text.split(" ").map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join(" ");
    setText(newText);
    showAlert("Converted to Sentence Case", "success");
  };
  const handleVowelCountClick = () => {
    let vowels=document.getElementById("vowelconsonants");
    if(vowels.style.display==="none"){
      vowels.style.display="block";
    }else{
      vowels.style.display="none";
    }
    showAlert("Vowel and Consonant count toggled", "info");
  };
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(text);
  };
  const handleRemoveExtraSpaces = () => {
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  };
  return (
    <>
      <div className="container mb-3">
        <h1>{heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          onChange={handleOnChange}
          onMouseOut={handleRemoveExtraSpaces}
          placeholder="Enter text here"
          value={text}
          style={{ backgroundColor: mode === 'dark' ? '#333' : '#fff', color: mode === 'dark' ? '#fff' : '#000' }}
        ></textarea>
        <br />
        <button className={`btn ${buttonColor==='default' ? 'btn-primary' : ""} mx-2 my-2`} style={buttonColor==='default' ? {} : { backgroundColor: buttonColor,color:"white" }}  onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className={`btn ${buttonColor==='default' ? 'btn-primary' : ""} mx-2 my-2`} style={buttonColor==='default' ? {} : { backgroundColor: buttonColor,color:"white" }}  onClick={handleLowerClick}>
          Convert To Lowercase
        </button>
        <button className={`btn ${buttonColor==='default' ? 'btn-primary' : ""} mx-2 my-2`} style={buttonColor==='default' ? {} : { backgroundColor: buttonColor,color:"white" }}  onClick={handleVowelCountClick}>
          Count Vowels and Consonants
        </button>
        <button className={`btn ${buttonColor==='default' ? 'btn-primary' : ""} mx-2 my-2`} style={buttonColor==='default' ? {} : { backgroundColor: buttonColor,color:"white" }}  onClick={handleSentenceCaseClick}>
          Convert To Sentence Case
        </button>
        <button className={`btn ${buttonColor==='default' ? 'btn-primary' : ""} mx-2 my-2`} style={buttonColor==='default' ? {} : { backgroundColor: buttonColor,color:"white" }}  onClick={handleCopyToClipboard}>
          Copy to Clipboard
        </button>
        {/* <Button /> */}
      </div>
      <div className="container my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text === "" ? 0 : text.split(" ").length} words and {text.length} characters
        </p>
        <p>It will take {0.008 * text.split(" ").length} minutes to read.</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
      </div>
      <div className="container my-3" id="vowelconsonants" style={{display:"none"}}>
        <h2>Count Vowels and Consonants</h2>
        <p>
          Vowels: {text.match(/[aeiou]/gi) ? text.match(/[aeiou]/gi).length : 0}
        </p>
        <p>
          Consonants: {text.match(/[bcdfghjklmnpqrstvwxyz]/gi) ? text.match(/[bcdfghjklmnpqrstvwxyz]/gi).length : 0}
        </p>
      </div>
    </>
  );
}
