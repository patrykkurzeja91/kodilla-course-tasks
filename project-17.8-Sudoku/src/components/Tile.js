import React from 'react';
import styles from '../css/Tile.css';

const Tile = props => (
    
    <input type="number" min='1' max='9'
    onChange={props.handleChange}
    value={props.value}
    readOnly={props.readonly}
    className={(props.readonly ? styles.colorGrey : styles.colorBlack) + ' ' + (props.error ? styles.colorRed : '')}
    />
    
);
export default Tile;