const mongoose = require('mongoose');


const todoSchema = new mongoose.Schema({
    msg : {
        type : String,
        required : true
    },

    done : {
        type : Boolean,
    },
})

const todo = mongoose.model('todo', todoSchema);

module.exports = todo