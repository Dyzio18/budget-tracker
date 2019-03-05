import './assets/vendor/normalize.css';
import './assets/vendor/materialize.min.css';
import './style.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; 
import { Switch, Route, BrowserRouter } from 'react-router-dom';


import App from './components/App';
import reducers from './reducers';
import Landing from './components/Landing/Landing';

const store = createStore( reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/habits" component={App}/>
        </Switch>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
