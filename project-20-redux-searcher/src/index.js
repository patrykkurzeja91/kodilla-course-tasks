import React from 'react';
// import App from './App';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import {getCountries} from './actions/actions-countries';

render (
    
        <Provider store={store}>
            <div>
            <h1>Inicjalizcja projektu</h1>
            <DevTools />
            </div>
        </Provider>
    ,
    document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
store.dispatch(getCountries());
