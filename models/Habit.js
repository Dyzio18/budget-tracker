const mongoose = require('mongoose');
const { Schema } = mongoose; 
const reapetationSchema = require('./Repetition');

/**
 * name <String> - habit title eg. "Meditation"
 * color <String> - color of habit in hex eg. "#432122"
 * note <String> -  Some note or DoD (definition od done) eg. "meditation for 15 minutes"
 * interval <Number> - Time interval for habit, eg. 7 is week, 1 is everyday
 * repetitionInterval <Number> - How many reapetation in how many repetitions of the habit in the time interval eg. 1
 */
const habitSchema = new Schema({
    name: String,
    color: String,
    note: String,
    interval:Number,
    repetitionInterval: Number,
    currentStrength: {type: Number, default: 0},
    repetition: [reapetationSchema],
    _user: {type: Schema.Types.ObjectId, ref: 'User'}
})

mongoose.model('habits', habitSchema);