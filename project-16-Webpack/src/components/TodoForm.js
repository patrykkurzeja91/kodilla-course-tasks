import React from 'react';
import style from './styles.css';

const TodoForm = (props) => {
    return (
        <form className={style.Form} onSubmit={(card) => props.add(card)}>  
        <label className={style.FormLabel} htmlFor="todoInput">Add to do:</label>
        <input id='todoInput' className={style.FormInput} type="text" autoFocus onChange={(item) => props.handle(item)} value={props.submittedText}/>
        <button className={style.FormButton} type="submit">Add</button>
        </form>
    )
}

export default TodoForm;