import React from 'react';
import style from './styles.css';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div className={style.TodoList}>
            <ul className={style.List}><Todo list={props.list} remove={props.remove} /></ul>
        </div>
    );
};

export default TodoList;