const cartmodel = require('./model');
exports.insert = async(cart) => {
    // data.push(product);
    const p = new cartmodel( cart);
    await p.save();
  
  }
  exports.getCarts = async () => {
    // return data;
    return await cartmodel.find().populate('category_id');
  };
  exports.delete = async(cart) =>{
    // data = data.filter(item => item._id != id);
    return await cartmodel.deleteMany(cart)
  
  }