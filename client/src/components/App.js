import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';

import Landing from './Landing/Landing';
import Sidebar from './Sidebar/Sidebar';
import Dashboard from './Dashboard/Dashboard';
import HabitNew from './Habits/HabitNew';

class App extends Component {

    componentDidMount = () => {
        this.props.fetchUser();
    };
    

    render = () => {
        return (
            <div>
                <BrowserRouter>
                    <div className="wrapper">
                        <Sidebar />
                        <main className="main">
                            <Route exact path="/habits" component={Dashboard} />
                            <Route path="/habits/new" component={HabitNew} />
                        </main>
                    </div>
                </BrowserRouter>
            </div>
        );
    };   
};

export default connect(null, actions)(App);