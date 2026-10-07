import "./app.css";
import { useState } from "react";
import { Aufgabe1, Aufgabe2, Aufgabe3, Aufgabe4 } from "./static/ExText";

function App() {
  const [state, setState] = useState("defaultWert"); // Beispiel für einen "useState-Hook".
  const [counter, setCounter] = useState(0); // useState Hook für Aufgabe 1
  const [checkbox, setCheckbox] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [position, setPosition] = useState("center");
  const [fontSize, setFontSize] = useState(12);

  return (
    <div className="App">
      <div className="App-header ">
        {" "}
        Übung WID 3 - React State und Interaktionen
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 1----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe1 />
        <div className="WrapperHorizontal">
          <div className="Anzeige"> {counter} </div>
          <button className="Button" onClick={() => setCounter(counter + 1)}>
            + 1
          </button>
          <button className="Button" onClick={() => setCounter(counter + 5)}>
            + 5 
          </button>
          <button className="Button" onClick={() => setCounter(0)}>
            Reset
          </button>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 2----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe2 />
        <div className="WrapperHorizontal">
          <input
            id="Checkbox"
            type="checkbox"
            onChange={
              (e) =>
                setCheckbox(e.target.checked)
            }
            checked={checkbox}
          />
          <div>
            <p style={checkbox ? { color: "#007cc3" } : {color: "#ff00ff"} }>
              {checkbox ? "JA" : "NEIN"}
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 3----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}
      <div className="ExerciseContainer">
        <Aufgabe3 />
        <div className="WrapperHorizontal">
            <input
            id="textfeld"
            type="text"
            onChange={
              (e) =>
                setTextInput(e.target.value)
            }
            value={textInput}
          />
          <div>
            <p>{textInput}</p>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}
      {/* -------------------------------------Aufgabe 4----------------------------------------------- */}
      {/* --------------------------------------------------------------------------------------------- */}

      <div className="ExerciseContainer">
        <Aufgabe4 />
        <div className="WrapperHorizontal">
          <select
            className="Dropdown"
            onChange={(event) => {
              setPosition(event.target.value);
            }}
            value={position}
          >
            <option value="left">Links</option>
            <option value="center">Mittig</option>
            <option value="right">Rechts</option>
          </select>
          
          <select
            className="Dropdown"
            onChange={(event) => {
              setFontSize(parseInt(event.target.value));
            }}
            value={fontSize}
          >
            <option value="10">10</option>
            <option value="12">12</option>
            <option value="14">14</option>
            <option value="16">16</option>
          </select>

          <div>
            <p
              id="DynamicText"
              style={
                {
                  textAlign: position,
                  fontSize: fontSize,
                }
              }
            >
              Text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
