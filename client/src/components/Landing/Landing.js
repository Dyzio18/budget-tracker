import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionExplanation from './SectionExplanation';

class Landing extends Component {

  render() {
    return (
        <div className="landing">
            <div className="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 className="display-4">Habits Tracker</h1>
                    <p className="lead">Aplikacja do śledzenia nawyków. Monitoruj swoje rutyny i codzienne czynności.</p>
                    <p className="lead">Dzięki systemowi grywalizacji nauka nawyków stanie się zabawą i świetnym wyzwaniem. 
                        Zdobywaj kolejne poziomy i odznaki a nawyki same wejdą Ci w krew!</p>
                    <a href="/auth/google" className="btn btn-primary">
                        <i class="fab fa-google"> </i> Sign in with Google
                    </a>
                </div>
            </div> 
            
            <SectionExplanation/>
        </div>
    )
  }
};


function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);