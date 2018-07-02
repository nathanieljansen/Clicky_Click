import React from "react";
import "./Score.css";

const Score = props => <h5 className="score"> 
  <ul>
    <li>Current Score: {props.score} | HighScore: {props.highscore} </li>
 </ul></h5>;

export default Score;
