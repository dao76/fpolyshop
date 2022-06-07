const async = require('hbs/lib/async');
const categoryService = require('../categories/service');

exports.getCategories = async () => {
    const data = await categoryService.getCategories();
    return data;
}

exports.getselectategories = async (id) =>{
    let data = await categoryService.getCategories();
   data = data.map((item,index) =>{
       item ={
           _id :item._id,
           name :item.name,
           description : item.description,
           selected : item._id == id,
           index :index +1
       }
    
    return item;
   })
    return data;
}
exports.getcateId = async (id) => {
    let category = await categoryService.getCategoryID(id);
    category = {
        _id: category._id,
        name: category.name,
        description: category.description,
                
    }
    return category;
    
}
exports.delete = async (id) => {
    await categoryService.delete(id);
}
exports.insert = async (category) => {
    await categoryService.insert(category);
}
exports.update = async (id, category) => {
    await categoryService.update(id, category);
}