import './Sidebar.css';
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
        return (
            <div className="sidebar"> 
                <div className="logo">
                    Habits Tracker
                </div>

                <ul className="nav">
                    <li> 
                        <a href="/habits"> 
                            <i class="fas fa-archive"></i> 
                            <span>Nawyki</span>
                        </a> 
                    </li>
                    <li> 
                        <a href="/habits"> 
                            <i class="fas fa-calendar"></i> 
                            <span> Kaledarz </span>
                        </a> 
                    </li>
                    
                </ul>
            </div>
          );
    }

}

function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Sidebar);