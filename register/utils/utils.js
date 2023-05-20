const bcrypt = require("bcrypt");
const { TASK_URI } = require("../config/config");
const axios = require('axios');

module.exports.GenerateSalt = async () => {
    return await bcrypt.genSalt();
}

module.exports.GeneratePassword = async (password, salt) => {
    return await bcrypt.hash(password, salt);
}

module.exports.ValidatePassword = async (inputPassword,
    savedPassword, salt) => {
    return ((await this.GeneratePassword(inputPassword, salt)).toString()) === savedPassword;
}

module.exports.GenerateSignature = async ({ _id, email }) => {
    return await axios.post(TASK_URI + '/token', { _id, email }).then((result) => {
        return result.data.data;
    }).catch((err) => {
        throw new Error(err);
    });
}


module.exports.FormateData = (data) => {
    if (data) {
        return { data }
    } else {
        throw new Error("Data not found");
    }

}