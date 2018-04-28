import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './header.css';

class Header extends Component {

    renderAuthStatus() {
        switch(this.props.auth){
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google" className="btn btn-primary">Zaloguj</a>
                );
            default: 
                return (
                    <div>
                        <button className="btn btn-primary">Zalogowany jako {this.props.auth.name} </button>
                        <a className="badge badge-info btn btn-link"  href="/api/logout"> Wyloguj </a>
                    </div>
                );
        }
    }
    

    render() {
        console.log(this.props)
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

                <Link 
                    className="navbar-brand" 
                    to={this.props.auth ? '/habits' : '/'}>
                    Habits Tracker
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                    </ul> 
                    {this.renderAuthStatus()}
                </div>
            </nav>
        ); 
    }
}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);