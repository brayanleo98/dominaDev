const { APIError, STATUS_CODES } = require('../utils/app-errors');
const userModel = require('./models/users')

class UserRepository {
    async CreateUser({ name, email, password, salt }) {
        try {
            const user = new userModel({
                name,
                email,
                password,
                salt,
                task: []
            });
            const userResult = await user.save();
            return userResult;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to create User');
        }
    }

    async FindUser( email ) {
        try {
            const existingUser = await userModel.findOne({ email });
            return existingUser;
        } catch (err) {
            throw APIError('API Error', STATUS_CODES.INTERNAL_ERROR, 'Unable to find User');
        }
    }

}

module.exports = UserRepository;