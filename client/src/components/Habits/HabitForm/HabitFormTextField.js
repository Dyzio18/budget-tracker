import React, { Component } from 'react';

export default ({input}) => {

    return (
        <div className="form__field form-group">
            <label className="form-check-label"> {input.name} </label>
            <input {...input}  className="form-control" />
        </div>
    ) 
}
