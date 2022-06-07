const async = require('hbs/lib/async');
const phoneService = require('./service');

exports.getphone = async () => {
    const data = await phoneService.getphone();
    return data;
}

exports.getphoness = async (id) =>{
    let data = await phoneService.phoneService();
   data = data.map((item,index) =>{
       item ={
           _id :item._id,
           name :item.name,
           price : item.price,
           selected : item._id == id,
           index :index +1
       }
    
    return item;
   })
    return data;
}
exports.getphoneId = async (id) => {
    let phone = await phoneService.getphoneID(id);
    phone = {
        _id: phone._id,
        name: phone.name,
        price: phone.price,
                
    }
    return phone;
    
}
exports.insert = async (phone) => {
    await phoneService.insert(phone);
}