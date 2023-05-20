const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String },
    description: { type: String },
    duration: { type: String }
}
);

const TaskModel = mongoose.model('task', taskSchema);

module.exports = TaskModel;