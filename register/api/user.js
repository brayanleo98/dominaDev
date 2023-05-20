const UserService = require("../services/user-services")

module.exports = (app) => {
    const service = new UserService();

    app.post('/signup', async (req, res, next) => {
        const { email, password, name } = req.body;
        const { data } = await service.SingUp({ email, password, name });
        res.json(data);
    });

    app.post('/login', async (req, res, next) => {
        const { email, password } = req.body;
        const  data  = await service.SingIn({ email, password });
        res.json(data);
    })
}