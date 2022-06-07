const cartservice = require('../carts/service');
exports.insert = async (cart) => {
    await cartservice.insert( cart);
     
  }
  exports.getCarts = async () => {
    try {
      let carts = await cartservice.getCarts();
      carts = carts.map((item, index) => {
          item = {
              _id: item._id,
              name: item.name,
              price: item.price,
              quantity: item.quantity,
             
              category_id: item.category_id,
              image: item.image,
              index: index + 1
          }
          return item;
      })
      
      return carts;
    } catch (error) {
        return []
    }
  }
  exports.deleteall = async (cart) => {
    await cartservice.delete( cart);
     
  }