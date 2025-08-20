import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Alert from "./components/Alert";
function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [buttonColor, setButtonColor] = useState('default');
  const toggleButtonColor = (color) => {
    if (color !== "default") {
      setButtonColor(color);
      setAlert({ msg: `Button color changed to ${color}`, type: "success" });
    }
  };
  const toggleDarkMode = () => {
    setmode(mode === "light" ? "dark" : "light");
    if (mode === "light") {
      showAlert("Dark mode has been enabled", "success");
    } else {
      showAlert("Light mode has been enabled", "success");
    }
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
    setButtonColor('default'); // Reset button color when toggling dark mode
  };
  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  };
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Text Utils" mode={mode} toggleButtonColor={toggleButtonColor} />
      <Alert alertMessage={alert} setAlertMessage={setAlert} />
      <div className="container my-3" style={{ textAlign: "center" }}>
        <div className="form-check form-switch form-check-reverse">
          <label
            className="form-check-label"
            htmlFor="switchCheckDefault"
            id="darkModeLable"
          >
            Dark Mode
          </label>
          <input
            className="form-check-input"
            type="checkbox"
            onClick={toggleDarkMode}
            role="switch"
            id="switchCheckDefault"
          ></input>
        </div>
      </div>
      <div className="container my-3">
        <Routes>
          <Route
             path="/TextUtils"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the Text to Analyse Below"
                mode={mode}
                buttonColor={buttonColor}
              />
            }
          />
          <Route
            path="/about"
            element={<About title="About Text Utils" mode={mode} />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
