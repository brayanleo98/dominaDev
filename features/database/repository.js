const { APIError, STATUS_CODES } = require('../utils/app-errors');
const TaskModel = require('./models/task');
const UserModel = require('./models/users');
const mongoose = require('mongoose');
const { ObjectId } = mongoose.Types;

class TaskRepository {
    async Createtask({ _id, name, description, duration }) {
        try {

            const user = await UserModel.findById(_id);

            if (user) {
                const newTask = new TaskModel({
                    name,
                    description,
                    duration
                });

                await newTask.save();

                user.task.push(newTask);
            }

            return await user.save();
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to create task');
        }
    }

    async Findtasks(_id) {
        try {
            const existingUser = await UserModel.findById({ _id }).populate('task');

            return existingUser;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to find task');
        }
    }

    async EditTask(task) {
        try {
            const existingtask = await TaskModel.findById(task._id);
            if (existingtask) {
                existingtask.name = task.name;
                existingtask.description = task.description;
                existingtask.duration = task.duration;
                return await existingtask.save();
            }
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to edit task');
        }
    }

    async DeleteTask(taskInput) {
        try {
            const { _idTask } = taskInput
            const taskDelete = await TaskModel.deleteOne({ _id: _idTask });
            if (taskDelete.deletedCount > 0) {
                const taskIdEliminate = new ObjectId(_idTask);
                const userTask = await UserModel.updateMany({ task: taskIdEliminate },
                    { $pull: { task: taskIdEliminate } });
            }
            return taskDelete
        } catch (error) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to delete task');
        }
    }

}

module.exports = TaskRepository;