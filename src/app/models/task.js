const mongoose = require('../../database');
const { Schema } = mongoose;

const TaskShema = new Schema({
    title: {
        type: String,
        require: true,
    },
    project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        require: true,
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    completed: {
        type: Boolean,
        require: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

});


const Task = mongoose.model('Task', TaskShema);

module.exports = Task;
