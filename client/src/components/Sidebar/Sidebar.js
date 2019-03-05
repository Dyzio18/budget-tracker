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
            <aside className="sidebar"> 
                <ul className="nav">
                    <li className="nav__item logo"> 
                        <Link to="/habits">
                            Budget Tracker
                        </Link>
                    </li>
                    <li className="nav__item"> 
                        <div className="user">
                            {this.renderAuthStatus()}
                        </div>  
                    </li>
                    <li className="nav__item"> 
                        <Link to="/habits" className="nav__link"> 
                            <i className="fas fa-archive"></i> 
                            <span>Nawyki</span>
                        </Link> 
                    </li>
                    <li className="nav__item"> 
                        <Link to="/habits/new" className="nav__link"> 
                            <i className="fas fa-calendar"></i> 
                            <span> Dodaj nawyk </span>
                        </Link> 
                    </li>
                </ul>
            </aside>
          );
    }

}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Sidebar);