var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const authentication = require('../ui/authentication')
const productController = require("../compoments/products/controller");
const phoneController = require("../compoments/phones/controller");
const cartController = require("../compoments/carts/controller");

// lấy all sản phẩm
router.get("/products", async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const products = await productController.getProducts();
    
    res.json(products);
    //hiển thị(render)
  });

  //thông tin sản phẩm
  router.get("/products/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
  
    // lấy thông tin chi tiết của sản phẩm
    const product = await productController.getProductById(id);
    // lấy danh sách các danh mục
  
   
    //hiển thị(render)
  });
  router.delete("/delete", async function (req, res, next) {
    
    const carts = await cartController.deleteall();
    
  });

  // mua hàng kiểu đồ án nhỏ
  // đồ án quan trọng thì thêm id_user của người mua hàng. để sau này vào danh mục mua select ra sản phẩm của ai mua
  router.post("/cart-add", async function (req, res, next) {
    const { body } = req;
  
    const cart = await cartController.insert(body);
    if (cart) {
        res.json( {status : true} )
    } else {
      // nếu không thành công
      res.json( {status : false} )
     
    }
  });


  //list 
  router.get("/cart-list", async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const carts = await cartController.getCarts();
    
    res.json(carts);
    //hiển thị(render)
  });





module.exports = router;