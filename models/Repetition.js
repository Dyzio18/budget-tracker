const mongoose = require('mongoose');
const { Schema } = mongoose; 

/**
 * date <Date>
 * done <Boolean>
 * strenght <Number>
 * note <String>
 */
const repetitionSchema = new Schema({
    date: Date,
    done: {type: Boolean, default: false},
    strength: Number,
    note: String
})

module.exports = repetitionSchema;