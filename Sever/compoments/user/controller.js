const userService = require("./service");
const bcrypt = require("bcryptjs");
const { translateAliases } = require("./model");

exports.login = async (username, password) => {

    try {
      const user = await userService.login(username,password);
  return { _id: user._id, username: user.username,user:password }
    } catch (error) {
      
    }
  
};

exports.register = async (username, password, confirm_password) => {

  if (password != confirm_password) {
    return null;
  }
  let user = await userService.login(username);
  if (user) {
    return null;
  }
  const hash = await bcrypt.hash(confirm_password, await bcrypt.genSalt(10));
  user = await userService.register(username,password, hash);
  return { _id: user.id };
};