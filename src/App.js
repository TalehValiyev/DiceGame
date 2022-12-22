import React, { useState } from "react";
import "./App.css";
import nerd from "./photos/nerd.jpg";
import dice1 from "./photos/dice1.svg";
import dice2 from "./photos/dice2.svg";
import dice3 from "./photos/dice3.svg";
import dice4 from "./photos/dice4.svg";
import dice5 from "./photos/dice5.svg";
import dice6 from "./photos/dice6.svg";

function App() {
  let diceimages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const [image, setImage] = useState(diceimages[0]);
  const [image2, setImage2] = useState(diceimages[0]);
  const [message, setMessage] = useState("");

  const rolling = () => {
    let random1 = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);

    setImage(diceimages[random1]);
    setImage2(diceimages[random2]);

    setMessage("Cütləmə Yekə Kişisən");
  };

  return (
    <div className="main">
      <img className="nerd" src={nerd} alt="" />
      <div className="dices">
        <div className="player1">
          <p>First player</p>
          <img src={image} alt="" />
        </div>

        <div className="player2">
          <p>Second player</p>
          <img src={image2} alt="" />
        </div>
      </div>
      <div>
        <button className="btn" onClick={rolling}>
          Click
        </button>
      </div>

      <div className="h1">
        <h1>{message}</h1>
      </div>
    </div>
  );
}

export default App;
