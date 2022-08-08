const productService = require('../products/service');



exports.getProducts = async () => {
  try {
    let products = await productService.getProducts();
    products = products.map((item, index) => {
      item = {
        _id: item._id,
        tenduan: item.tenduan,
        mieuta: item.mieuta,
        image: item.image,
        tenthuongmai: item.tenthuongmai,
        dientichtb: item.dientichtb,
        chudautu: item.chudautu,
        nhaphattrien: item.nhaphattrien,
        vitri: item.vitri,
        giaban: item.giaban,
        anhlienquan: item.anhlienquan,
        anhlienquan1: item.anhlienquan1,
        anhlienquan2: item.anhlienquan2,
        index: index + 1
      }
      return item;
    })

    return products;
  } catch (error) {
    return []
  }
}
exports.getAll = async () => {
  try {
    let products = await productService.getAllProducts();
    products = products.map((item, index) => {
      item = {
        _id: item._id,
        tenduan: item.tenduan,
        mieuta: item.mieuta,
        image: item.image,
        tenthuongmai: item.tenthuongmai,
        dientichtb: item.dientichtb,
        chudautu: item.chudautu,
        nhaphattrien: item.nhaphattrien,
        vitri: item.vitri,
        giaban: item.giaban,
        anhlienquan: item.anhlienquan,
        anhlienquan1: item.anhlienquan1,
        anhlienquan2: item.anhlienquan2,
        index: index + 1
      }
      return item;
    })

    return products;
  } catch (error) {
    return []
  }
}
exports.getProductById = async (id) => {
  try {
    let product = await productService.getProductbyid(id);
    product = {
      _id: product._id,
      tenduan: product.tenduan,
      mieuta: product.mieuta,
      image: product.image,
      tenthuongmai: product.tenthuongmai,
      dientichtb: product.dientichtb,
      chudautu: product.chudautu,
      nhaphattrien: product.nhaphattrien,
      vitri: product.vitri,
      giaban: product.giaban,
    }
    return product;
  } catch (error) {
    return {};
  }

}


exports.insert = async (product) => {
  await productService.insert(product);

}
exports.update = async (id, product) => {
  try {
    await productService.update(id, product);

  } catch (error) {

  }
}
exports.delete = async (id) => {
  try {
    await productService.delete(id);

  } catch (error) {

  }
}