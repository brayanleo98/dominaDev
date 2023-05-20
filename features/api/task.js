const TaskService = require("../services/task-services");
const { UserAuth } = require("./middlewares/auth");

module.exports = (app) => {
    const service = new TaskService();

    app.get('/feature/:id', UserAuth, async (req, res, next) => {
        const _id = req.params.id;
        const { data } = await service.Findtasks({ _id: _id });
        res.json(data);
    });

    app.post('/feature', UserAuth, async (req, res, next) => {
        const { _id, name, description, duration } = req.body;
        const data = await service.CreateTask({ _id, name, description, duration });
        res.json(data);
    });

    app.put('/feature', UserAuth, async (req, res, next) => {
        const { _id, name, description, duration } = req.body;
        const data = await service.EditTask({ _id, name, description, duration });
        res.json(data);
    });

    app.delete('/feature/:id', UserAuth, async (req, res, next) => {
        const _idTask = req.params.id;
        const data = await service.DeleteTask({ _idTask });
        res.json(data);
    });

    app.post('/token', async (req, res, next) => {
        const { _id, email } = req.body;
        const data = await service.GenerateToken({ _id, email });
        res.json(data);
    });
}