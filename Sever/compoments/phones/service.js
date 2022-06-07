
const phoneModel= require('./model');
/**
 *  descriptionL lấy danh sách sản phẩm 
 */
 exports.getphone = async () =>{
    // return data;
    return phoneModel.find({},'id name price');
}
exports.getphoneID = async (id) => {
  // const product = data.filter((item) => item._id == id)[0];
  // return product;
  return phoneModel.findById(id);

};
exports.delete = async(id) =>{
  // data = data.filter(item => item._id != id);
  await phoneModel.findByIdAndDelete(id);

}
exports.insert = async(phone) => {
  // data.push(product);
  const p = new phoneModel(phone);
  await p.save();

}
/**
 *  descriptionL lấy tên danh muc theo id
 */ 









