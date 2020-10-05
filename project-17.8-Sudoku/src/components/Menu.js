import React from 'react';
import styles from '../containers/App.css'

const Menu = props => (
    <div className={styles.Buttons + ' ' + (props.showDifficulty ? styles.shown : styles.hidden)}>
                    <button className={styles.Button} onClick={() => props.newGame("easy")}>Easy</button>
                    <button className={styles.Button} onClick={() => props.newGame("medium")}>Medium</button>
                    <button className={styles.Button} onClick={() => props.newGame("hard")}>Hard</button>
                </div>   
            
)
export default Menu;