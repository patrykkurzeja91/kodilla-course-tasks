import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import reducer from './components/reducer';
import {addComment} from "./components/actions";
import DevTools from './DevTools';

const store = createStore(
    reducer,
    DevTools.instrument());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));

