import React, {Component} from 'react';
import sudoku from 'sudoku-umd';
import styles from './App.css';
import Board from '../components/Board.js';
import Menu from '../components/Menu.js'
// import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        const board = sudoku.generate("medium");
        this.state = {
            initialBoard: board,
            board: board.slice(),
            // showHideMenu: "hidden",
            showDifficulty: false,
            solvedBoard: []
        }
        this.newGame = this.newGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.showSolve = this.showSolve.bind(this);
        this.checkSolve = this.checkSolve.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this)
    }
    newGame(mode) {
        const board = sudoku.generate(mode);
        this.setState({
            solvedBoard:[],
            initialBoard: board,
            board: board.slice(),
        })
    }
    restartGame() {
        this.setState({
            board: this.state.initialBoard
        });
    }
    
    showSolve() {
        const solve = sudoku.solve(this.state.initialBoard);
        if (solve) {
            this.setState({
                board: solve
            });
        }
    }
    checkSolve() {
        // const check = sudoku.solve(this.state.board);
        // if (!check) {
        //     alert('Sorry, not finished yet');
        // } else if (this.state.board === this.state.initialBoard) {
        //     alert('Solution is same as initial');
        // } else {
        //     alert('Congratulations');
        // }
        const solve = sudoku.solve(this.state.initialBoard);
        const newSolve = [...solve].map((item, index) => {
            return (
                // this.state.board[index] != '.' ||
                this.state.board[index] == item
            )
        });
        console.log(newSolve);
        this.setState({
            solvedBoard: newSolve
        })
        // var arr = this.state.board.split('');
        // arr = arr.map((item, index) => {
        //     if (item != ".") {

        //         return this.state.solvedBoard[index] == item;
        //     }
        //     return true
        // });
        // console.log(arr);
    }
    handleChange(i, value) {
        value = value > 9 ? value[1] : value;
        console.log(i, value);
        const newBoard = this.state.board.slice(0, i) + (value.length > 0 ? value : '.') + this.state.board.slice(i + 1);
        console.log(this.state.board, newBoard);
        this.setState({
            board: newBoard,
            solvedBoard: [],
        })
    }

    toggleMenu() {
        this.setState({
            showDifficulty: !this.state.showDifficulty
           });
    }

    render() {
        return (
                <div className={styles.box}>
               <h1>Sudoku</h1>
                
                <div>
                   <Board solvedBoard={this.state.solvedBoard} board={this.state.board} initialBoard={this.state.initialBoard} handleChange={this.handleChange.bind(this)} />
                    <div>
                       <button onClick={this.checkSolve}>Check</button>
                       <button onClick={this.toggleMenu}>New Game</button>
                       <button onClick={this.showSolve}>Solve</button>
                       <button onClick={this.restartGame}>Restart</button>
                    </div>
                </div >
                <div >
                <Menu newGame={this.newGame} showDifficulty={this.state.showDifficulty}/>
                </div>
                    
                </div>
                
    )}
}
export default App;