import React, { Component } from 'react';
import { connect } from 'react-redux';

import SectionInfo from './SectionExplanation';

class Landing extends Component {

  render() {
    return (
        <div className="landing">
            <header className="landing__header">
                <h1>Budget Tracker</h1>
                <a href="/auth/google" className="btn btn__googleLogin">
                    <i className="fab fa-google"> </i> Sign in with Google
                </a>
            </header>
            <section className="landing__info">
                <div className="container">
                    <SectionInfo/>
                </div>
            </section>
        </div>
    )
  }
};


function mapStateToProps(state){
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Landing);