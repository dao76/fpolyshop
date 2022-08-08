/**
 * sevice: tầng lớp giao tiếp với database
 */

const userModel = require("./model");

exports.login = async (username, password) => {

  const user = await userModel.findOne({ username: username, password: password },
    "id username password  ");
  // tìm  ra 1 với điều kiện username và lấy ra những cột ở dưới
  return user;
};

exports.register = async (username, password, name) => {
  const user = new userModel({ username, password });
  return await user.save();

};





