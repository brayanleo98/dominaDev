const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    salt: String,
    task: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'task', require: true }
    ]
}, {
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.salt;
        }
    }
}
);

const UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;