import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="App" style={{ backgroundColor: color }}>
      <div className="lower-bar">
        <button
          onClick={() => setColor("red")}
          className="buttons"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          className="buttons"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          className="buttons"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("olive")}
          className="buttons"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>
        <button
          onClick={() => setColor("gray")}
          className="buttons"
          style={{ backgroundColor: "gray" }}
        >
          Gray
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="buttons"
          style={{ backgroundColor: "yellow" }}
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("pink")}
          className="buttons"
          style={{ backgroundColor: "pink" }}
        >
          Pink
        </button>
        <button
          onClick={() => setColor("purple")}
          className="buttons"
          style={{ backgroundColor: "purple" }}
        >
          Purple
        </button>
        <button
          onClick={() => setColor("lavender")}
          className="buttons"
          style={{ backgroundColor: "lavender" }}
        >
          Lavender
        </button>
        <button
          onClick={() => setColor("white")}
          className="buttons"
          style={{ backgroundColor: "white", color: "black" }} /* Adjust text color for better contrast */
        >
          White
        </button>
        <button
          onClick={() => setColor("beige")}
          className="buttons"
          style={{ backgroundColor: "beige" }}
        >
          Beige
        </button>
        <button
          onClick={() => setColor("cadetblue")}
          className="buttons"
          style={{ backgroundColor: "cadetblue" }}
        >
          CadetBlue
        </button>
        <button
          onClick={() => setColor("orange")}
          className="buttons"
          style={{ backgroundColor: "orange" }}
        >
          Orange
        </button>
        <button
          onClick={() => setColor("crimson")}
          className="buttons"
          style={{ backgroundColor: "crimson" }}
        >
          Crimson
        </button>
        <button
          onClick={() => setColor("gold")}
          className="buttons"
          style={{ backgroundColor: "gold" }}
        >
          Gold
        </button>
        <button
          onClick={() => setColor("aqua")}
          className="buttons"
          style={{ backgroundColor: "aqua" }}
        >
          Aqua
        </button>
        <button
          onClick={() => setColor("brown")}
          className="buttons"
          style={{ backgroundColor: "brown" }}
        >
          Brown
        </button>
        <button
          onClick={() => setColor("lime")}
          className="buttons"
          style={{ backgroundColor: "lime" }}
        >
          Lime
        </button>
      </div>
    </div>
  );
}

export default App;





