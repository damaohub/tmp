import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//let store = createStore(myApp)

ReactDOM.render((
    <Provider >
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
