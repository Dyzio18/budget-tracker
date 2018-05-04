const mongose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Habit = mongose.model('habits');

module.exports = app => {
    app.post('/api/habits', requireLogin, (req,res) =>{

        const { name, color, note, interval, repetitionInterval, repetition } = req.body;
        const Habit = new Habit({
            name,
            color,
            note,
            interval,
            repetitionInterval,
            repetition,
            _user: req.user.id
        })
    });

};