import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { Routes, Route } from "react-router-dom";
function App() {
  const toggleDarkMode = () => {
    // document.getElementById("darkMode").classList.toggle("bg-light");
    // document.getElementById("darkMode").classList.toggle("text-dark");
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-light");
  };
  return (
    <>
      <Navbar title="Text Utils" aboutText="About Text Utils" />
      <div className="container my-3" style={{ textAlign: "center" }}>
        <div className="form-check form-switch form-check-reverse">
          <label className="form-check-label" htmlFor="switchCheckDefault" id="darkModeLable">
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
          <Route path="/" element={<TextForm heading="Enter the Text to Analyse Below" />} />
          <Route path="/about" element={<About title="About Text Utils" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
