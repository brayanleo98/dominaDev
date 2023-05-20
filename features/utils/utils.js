
const jwt = require("jsonwebtoken");
const { APP_SECRET } = require("../config/config");

module.exports.GenerateSignature = async (payload) => {
    try {
        return await jwt.sign(payload, APP_SECRET, { expiresIn: "1h" })
    } catch (error) {
        console.log(error, 'jwt error');
        return error
    }
}

module.exports.ValidateSignature = async (req) => {
    try {
        const signature = req.get("Authorization");
        const payload = await jwt.verify(signature, APP_SECRET);
        req.user = payload;
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports.FormateData = (data) => {
    if (data) {
        return { data }
    } else {
        throw new Error("Data not found");
    }

}