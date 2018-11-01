import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'
import store from './store/index'
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
