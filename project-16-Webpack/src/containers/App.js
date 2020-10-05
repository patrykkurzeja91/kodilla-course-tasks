import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import { hot} from 'react-hot-loader';

import Title from '../components/Title.js';
import TodoList from '../components/TodoList';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            task: '',
            data: [{
                id: 1,
                    text: 'clean room'
                }, {
                id: 2,
                    text: 'wash the dishes'
                }, {
                id: 3,
                    text: 'feed my cat'
                }]
        };
    }
    addTodo(e) {
        e.preventDefault();
        if (!this.state.task) {return;}
        const todo = {
            text: this.state.task,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({
            data, 
            task: ''
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    handleChange(val) {
        this.setState ({
            task: val.target.value
        });
    }
    render () {
        return (
            <div className={style.TodoApp}>
            <Title data={this.state.data}/>
            <div className='todo-container'>
            <h2 className={style.ListTitle}>List of todos:</h2>
            <TodoForm add={(event) => this.addTodo(event)} handle={event => this.handleChange(event)} submittedText={this.state.task}/>
            <TodoList list={this.state.data} remove={
                (id) => this.removeTodo(id)} />
               </div>
            </div>
        );
    }
}
export default hot(module) (App);