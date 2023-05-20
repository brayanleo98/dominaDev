const UserRepository = require("../database/repository");
const { APIError } = require("../utils/app-errors");
const { ValidatePassword, GenerateSignature, GeneratePassword, FormateData, GenerateSalt } = require("../utils/utils");

class UserService {

    constructor() {
        this.repository = new UserRepository;
    }

    async SingIn(userInputs) {
        const { email, password } = userInputs;
        try {
            const existingUser = await this.repository.FindUser(email);
            if (existingUser) {
                const validPassword = await ValidatePassword(password, existingUser.password, existingUser.salt);
                if (validPassword) {
                    const token = await GenerateSignature({ _id: existingUser._id, email: existingUser.email });
                    return FormateData({ id: existingUser._id, token, name: existingUser.name });
                }
            }
        } catch (error) {
            throw new APIError('Data not found', error)
        }
    }

    async SingUp(userInputs) {
        const { email, password, name } = userInputs;

        let salt = await GenerateSalt();

        let userPassword = await GeneratePassword(password, salt);

        const existingUser = await this.repository.CreateUser({ email, password: userPassword, name, salt });

        const token = await GenerateSignature({ email, _id: existingUser._id });

        return FormateData({ id: existingUser._id, token, name });
    }
}

module.exports = UserService;