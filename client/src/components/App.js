import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './../actions';

import Header from './Header';
import Sidebar from './Sidebar/Sidebar';

const Dashboard = () => <h2>Dashboard (habits)</h2>;
const HabitNew = () => <h2>HabitNew</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {

    componentDidMount = () => {
        this.props.fetchUser();
    };
    

    render = () => {
        return (
            <div className="container-fluid wrapper">
                <BrowserRouter>
                    <div className="row">
                        <Sidebar />
                        <div className="main-panel">
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/habits" component={Dashboard} />
                            <Route path="/habits/new" component={HabitNew} />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    };   
};

export default connect(null, actions)(App);