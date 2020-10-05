import React from 'react';
import './Player.css';

const Player = (props) => (
  <li className="Player">
    <span className="Player__name">{props.name}</span>
    <span className="Player__score">{props.score}</span>
    <span className="Player__button btn-success" onClick={() => props.onPlayerScoreChange(1)} >+</span>
    <span className="Player__button btn-danger" onClick={() => props.onPlayerScoreChange(-1)} >-</span>
    <span className="Player__button btn-warning" onClick={() => props.onPlayerDelete()}>x</span>
  </li>
);

export default Player;