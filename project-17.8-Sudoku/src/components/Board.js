import React, {Component} from 'react';
import Tile from './Tile.js';
import sudoku from 'sudoku-umd'
import "../css/Board.css";

const Board = props => {
    const splitBoard = props.board.split('');
    const value = splitBoard.map((number, i) => {
        return <Tile 
        key={i} 
        error={props.board[i] != '.' ? (i in props.solvedBoard ? !props.solvedBoard[i] : false) : false}
        readonly={props.initialBoard[i] != '.'} 
        value={number} 
        handleChange={e => props.handleChange(i, e.target.value)} />
    })
    return <div>{value}</div>
}
export default Board;