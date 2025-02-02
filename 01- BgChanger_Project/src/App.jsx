import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [bgColor, setBgColor] = useState("black");

  // const colors = [
  //   "red",
  //   "blue",
  //   "green",
  //   "yellow",
  //   "purple",
  //   "orange",
  //   "pink",
  //   "teal",
  //   "brown",
  //   "cyan",
  // ];

  return (
    <div className="app-container" style={{ backgroundColor: bgColor }}>
      <h1 className="title">Background Changer</h1>
      <div className="button-container">
        {/* {colors.map((Color, index) => (
          <button
            key={index} 
            onClick={()=>setBgColor(Color)}
            className={`color-button ${Color}`} 
          >
          {Color}
          </button>
        ))} */}

        <button
          onClick={() => setBgColor("red")}
          className="color-button red"
        >
          Red
        </button>
        <button
          onClick={() => setBgColor("blue")}
          className="color-button blue"
        >
          Blue
        </button>
        <button
          onClick={() => setBgColor("green")}
          className="color-button green"
        >
          Green
        </button>
        <button
          onClick={() => setBgColor("yellow")}
          className="color-button yellow"
        >
          Yellow
        </button>
        <button
          onClick={() => setBgColor("purple")}
          className="color-button purple"
        >
          Purple
        </button>
        <button
          onClick={() => setBgColor("orange")}
          className="color-button orange"
        >
          Orange
        </button>
        <button
          onClick={() => setBgColor("pink")}
          className="color-button pink"
        >
          Pink
        </button>
        <button
          onClick={() => setBgColor("teal")}
          className="color-button teal"
        >
          Teal
        </button>
        <button
          onClick={() => setBgColor("brown")}
          className="color-button brown"
        >
          Brown
        </button>
        <button
          onClick={() => setBgColor("cyan")}
          className="color-button cyan"
        >Cyan</button>
      </div>
    </div>
  );
};

export default App;
