const TaskRepository = require("../database/repository");
const { APIError } = require("../utils/app-errors");
const { FormateData, GenerateSignature } = require("../utils/utils");

class TaskService {

    constructor() {
        this.repository = new TaskRepository;
    }

    async CreateTask(taskInputs) {
        try {
            const { _id, name, description, duration } = taskInputs;

            const existingtask = await this.repository.Createtask({ _id, name, description, duration });

            return FormateData(existingtask);
        } catch (error) {
            throw new APIError('Data not found', error)
        }
    }

    async Findtasks(taskInputs) {
        const { _id } = taskInputs;
        const existingUser = await this.repository.Findtasks(_id);

        return FormateData(existingUser);
    }

    async EditTask(taskInputs) {

        const editTask = await this.repository.EditTask(taskInputs);

        return FormateData(editTask);
    }

    async DeleteTask(taskInputs) {
        const deleteTask = await this.repository.DeleteTask(taskInputs);
        return FormateData({ _id: taskInputs, msg: 'Task deleted', task: deleteTask });
    }

    async GenerateToken(taskInputs) {
        const token = await GenerateSignature({ email: taskInputs.email, _id: taskInputs._id });
        return FormateData(token);
    }
}

module.exports = TaskService;