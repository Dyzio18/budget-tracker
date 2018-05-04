import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (
        <div className="workspace">
            <h2 className="title">Panel użytkownika</h2>
            <p className="lead"> Twój panel jest pusty! Dodaj nawyki :)</p>
            <Link to="/habits/new" className="habitAdd__button">
                <i class="fas fa-plus"></i>
            </Link>
        </div>
    )
  }
};

export default Dashboard;
