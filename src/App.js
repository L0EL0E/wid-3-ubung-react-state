import "./app.css";
import { useState } from "react";
import { Aufgabe1, Aufgabe2, Aufgabe3, Aufgabe4 } from "./static/ExText";

function App() {
  const [state, setState] = useState("defaultWert"); // Beispiel für einen "useState-Hook".
  const [counter, setCounter] = useState(0); // useState Hook für Aufgabe 1
  const [checkbox, setCheckbox] = useState(false);
  const [textInput, setTextInput] = useState("");

  // Du benötigst für jede Aufgabe einen weiteren "useState-Hook", welchen du am besten hier platzierst. Achte darauf, einen passenden Datentype als "default Wert" anzugeben.

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
            {/*
             * Im P-Element brauchst du zweimal einen Ternary-Operator (Erinnerung: Bedingung ? Wenn true : Wenn false).
             * Als Bedingung benutzt du deine State-Variable (vom Typ boolean)
             * Schreibe das Element dann so um, dass bei true die eine Farbe, und bei false die andere Farbe benutzt wird.
             * Gleiches machst du für den Text.
             */}
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
          {/*
           * Öffne als erstes die Browser-Konsole und überprüfe was der Event Handler gerade loggt - d.h. was der Wert ist, wenn du das Dropdown benutzt.
           * Passe den Listener an und nutze eine setState Funktion um "value" in State zu speichern.
           *
           */}
          <select
            className="Dropdown"
            onChange={(event) => {
              console.log(
                "event.target.value ist: ",
                event.target.value,
                " der Datentype ist: ",
                typeof event.target.value,
              );
            }}
          >
            <option value="left">Links</option>
            <option value="center">Mittig</option>
            <option value="right">Rechts</option>
          </select>
          {/*
           * Hier implementierst du ein zweites Dropdown, welches die Schriftgrösse ändern soll. Gib Werte (value) für 10, 12, 14, 16 vor.
           * Du brauchst einen weiteren useState-Hook, der das Ergebnis der Auswahl als Zahl speichert.
           * Achtung - der Handler gibt dir die Zahl als Text (String) zurück. Konvertertiere diese mit `parseInt()`zu einer Zahl ("number"). Das kannst du direkt in der setState Funktion tun.
           */}

          <div>
            <p
              id="DynamicText"
              style={
                {
                  textAlign: "center",
                  fontSize: 10,
                } /* Diese statischen Werte möchtest du an "State" binden. Überprüfe ob deine Interaktionen den Text verändert  */
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
