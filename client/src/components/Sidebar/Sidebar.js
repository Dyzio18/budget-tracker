import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Sidebar extends Component {

    renderAuthStatus() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="btn btn-primary btn-block">Zaloguj</a>
                );
            default: 
                return (
                    <div>
                        <p>Zalogowany jako <span> {this.props.auth.name} </span> </p>
                        <a className="btn btn-secondary btn-block btn-sm"  href="/api/logout"> Wyloguj </a>
                    </div>
                );
        }
    }
    
    
    render() {
        return (
            <div className="sidebar"> 
                <Link to="/habits" className="logo">
                    Habits Tracker
                </Link>
                <ul className="nav">
                    <li> 
                        <Link to="/habits"> 
                            <i className="fas fa-archive"></i> 
                            <span>Nawyki</span>
                        </Link> 
                    </li>
                    <li> 
                        <Link to="/habits/new"> 
                            <i className="fas fa-calendar"></i> 
                            <span> Dodaj nawyk </span>
                        </Link> 
                    </li>
                </ul>
                <div className="sidebar__user">
                    {this.renderAuthStatus()}
                </div>
            </div>
          );
    }

}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Sidebar);