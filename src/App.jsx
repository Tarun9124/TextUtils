import { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
    // showAlert(mode, "Warning");
    mode === "dark"
      ? (document.body.style.backgroundColor = "white") &&
        (document.title = "TextUtils - Light Mode") &&
        showAlert(" : Dark Mode Disabled", "success")
      : (document.body.style.backgroundColor = "#454545") &&
        (document.title = "TextUtils - Dark Mode") &&
        showAlert(" : Dark Mode Enabled", "success");
  };

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Converter By Tarun"
          toggleMode={toggleMode}
          mode={mode}
        />
        <Alert alert={alert} />
        <div className="container p-3">
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route
              path="/"
              element={<TextForm showAlert={showAlert} mode={mode} />}
            ></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
