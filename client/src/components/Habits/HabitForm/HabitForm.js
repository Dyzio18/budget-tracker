import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import values from 'redux-form/lib/values';
import HabitFormTextField from './HabitFormTextField';


class HabitForm extends Component {

    renderForm(){
        return(
            <div>
                <Field type="text" name="Nazwa nawyku" component={HabitFormTextField} />
                <Field type="text" name="Kolor" component={HabitFormTextField} />
                <Field type="textarea" name="Notatka" component={HabitFormTextField} />
            </div>   
        );         
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderForm()}
                    <button className="btn" type="submit"> Wyślij </button>
                </form>
            </div>
        )
    }
};

export default reduxForm({
    form: 'habitForm'
})(HabitForm);