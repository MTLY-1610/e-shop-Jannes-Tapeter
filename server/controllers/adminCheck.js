const ServerError = require("../serverError")


module.exports = async (req, res, next) => {
  if (req.session.role === "admin") {
    next();
  } else {
    throw new ServerError('You are not a admin user', 418)
  }
}
