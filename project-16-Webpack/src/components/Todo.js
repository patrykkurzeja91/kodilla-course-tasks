import React from 'react';
import style from './styles.css';

const Todo = (props) =>  props.list.map(({id, text}) =>
<li className={style.ListItem} key={id} >{text}<i onClick={() => props.remove(id)} id={style.Trash} className="fas fa-trash"></i></li>
)

export default Todo;