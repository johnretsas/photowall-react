import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet.css'
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'
import rootReducer from './reducer'
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import App from './App'
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
