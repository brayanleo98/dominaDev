const { ValidateSignature } = require("../../utils/utils");


module.exports.UserAuth = async (req, res, next) => {
    const isAuthorized = await ValidateSignature(req);

    if (isAuthorized)
        return next();


    return res.status(403).json({ message: 'Not authorized' })
}