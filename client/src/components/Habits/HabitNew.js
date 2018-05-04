import React, { Component } from 'react';
import HabitForm from './HabitForm/HabitForm';

class HabitNew extends Component {
  render() {
    return (
      <div className="workspace">
         <h1 className="title"> Dodawanie nawyku </h1>
         <HabitForm/>
      </div>
    )
  }
};

export default HabitNew;