/**
 * service tầng goa tiếp db
 * */

/**
 *  descriptionL lấy danh sách sản phẩm
 */
const { setMaxListeners } = require('./model');
const productmodel = require('./model');
exports.getProducts = async () => {
  // return data;
  return productmodel.find({}, 'id tenduan mieuta image tenthuongmai quymo dientichtb chudautu nhaphattrien vitri giaban anhlienquan anhlienquan1 anhlienquan2').limit(6).sort({ _id: -1 })
};
exports.getAllProducts = async () => {
  // return data;
  return productmodel.find({}, 'id tenduan mieuta image tenthuongmai quymo dientichtb chudautu nhaphattrien vitri giaban anhlienquan anhlienquan1 anhlienquan2 ').sort({ _id: -1 })
};
exports.getProductbyid = async (id) => {
  const product = await productmodel.findOne({ '_id': id })
  return product
}

exports.insert = async (product) => {
  const p = new productmodel(product);
  await p.save();

}
exports.update = async (id, product) => {

  await productmodel.findOneAndUpdate(id, product);
}



exports.delete = async (id) => {
  await productmodel.findByIdAndDelete(id);

}



