import React from "react";

export default function About({ title = "About Text Utils", mode = "light" }) {
  return (
    <>
      <div className="container">
        <h2>{title}</h2>
        <div
          className="accordion"
          id="accordionExample"
          style={{
            backgroundColor: mode === "dark" ? "#333" : "#fff",
            color: mode === "dark" ? "#fff" : "#000",
          }}
        >
          <div
            className="accordion-item"
            style={{
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={{
                  backgroundColor: mode === "dark" ? "#333" : "#fff",
                  color: mode === "dark" ? "#fff" : "#000",
                }}
              >
                About Text Utils
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This is a application that allows you to manipulate text in
                various ways. You can convert text to uppercase, lowercase,
                sentence case, and more. It also provides features like counting
                vowels and consonants, removing extra spaces, and copying text
                to the clipboard. The application is designed to be
                user-friendly and efficient for text processing tasks.
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={{
                  backgroundColor: mode === "dark" ? "#333" : "#fff",
                  color: mode === "dark" ? "#fff" : "#000",
                }}
              >
                Features
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This application includes several features to enhance your text
                editing experience:
                <ul>
                  <li>Convert text to uppercase</li>
                  <li>Convert text to lowercase</li>
                  <li>Convert text to sentence case</li>
                  <li>Count vowels and consonants</li>
                  <li>Remove extra spaces</li>
                  <li>Copy text to clipboard</li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="accordion-item"
            style={{
              backgroundColor: mode === "dark" ? "#333" : "#fff",
              color: mode === "dark" ? "#fff" : "#000",
            }}
          >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={{
                  backgroundColor: mode === "dark" ? "#333" : "#fff",
                  color: mode === "dark" ? "#fff" : "#000",
                }}
              >
                Browser Compatibility
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                This application is designed to work on all modern browsers,
                including Chrome, Firefox, Safari, and Edge. However, some
                features may not be fully supported on older browsers. We
                recommend using the latest version of your preferred browser for
                the best experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
