import React, { useState } from "react";

export default function TextForm({ heading }) {
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
  };
  const handleLowerClick = () => {
    //console.log("Button clicked!");
    // setText(text.toUpperCase());
    setText(text.toLowerCase());
  };
  const handleSentenceCaseClick = () => {
    let newText = text.split(" ").map((sentence) => {
      return sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase();
    }).join(" ");
    setText(newText);
  };
  const handleVowelCountClick = () => {
    let vowels=document.getElementById("vowelconsonants");
    if(vowels.style.display==="none"){
      vowels.style.display="block";
    }else{
      vowels.style.display="none";
    }
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
          placeholder="Enter text here"
          value={text}
        ></textarea>
        <br />
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleVowelCountClick}>
          Count Vowels and Consonants
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleSentenceCaseClick}>
          Convert To Sentence Case
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
