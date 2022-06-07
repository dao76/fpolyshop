var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const authentication = require('../ui/authentication')
const productController = require("../compoments/products/controller");
const phoneController = require("../compoments/phones/controller");
const cartController = require("../compoments/carts/controller");
//http://localhost:3000/api/dang-nhap
router.post("/dang-nhap",[authentication.checklogin], async function (req, res, next) {
    const { username, password } = req.body;
    console.log("username = " + username);
  
    // tiến hành đăng nhập
  
    const user = await userController.login(username, password);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
  
    if (user) {
    const token = jwt.sign({id : user._id , username:user.username},'mykey')
  
      // nếu thành công thì chuyển qua sản phẩm
       res.json({status : true,id : user._id , username:user.username,token})
    } else {
      // nếu không thành công
      res.json( {status : false} )
     
    }
    console.log(user);
  });

  //http://localhost:3000/api/dang-ky
router.post("/dang-ky", async function (req, res, next) {
    const { username, password ,confirm_password} = req.body;
    console.log("username = " + req.body.confirm_password);
  
    // tiến hành đăng nhập
  
    const user = await userController.register(username, password,confirm_password);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
  
    if (user) {
        res.json( {status : true} )
    } else {
      // nếu không thành công
      res.json( {status : false} )
     
    }
  });
  router.post("/cart-add", async function (req, res, next) {
    const { body } = req;
    console.log("username = " + req.body.name);
  
    // tiến hành đăng nhập
  
    const cart = await cartController.insert(body);
    // await có tác dung là chờ nó chờ nó lấy
    // await thì phải có async
  
    if (cart) {
        res.json( {status : true} )
    } else {
      // nếu không thành công
      res.json( {status : false} )
     
    }
  });
  router.get("/cart-list",[authentication.checkToken], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const carts = await cartController.getCarts();
    
    res.json(carts);
    //hiển thị(render)
  });
    //http://localhost:3000/api/products
  router.get("/products",[authentication.checkToken], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const products = await productController.getProducts();
    
    res.json(products);
    //hiển thị(render)
  });
  router.get("/phones", async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const phones = await phoneController.getphone();
    
    res.json(phones);
    //hiển thị(render)
  });
  router.get("/products/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
  
    // lấy thông tin chi tiết của sản phẩm
    const product = await productController.getProductById(id);
    // lấy danh sách các danh mục
  
   
    //hiển thị(render)
  });
  router.get("/phone/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
  
    // lấy thông tin chi tiết của sản phẩm
    const phone = await phoneController.getphoneId(id);
    // lấy danh sách các danh mục
  
    res.json(phone);
    //hiển thị(render)
  });


module.exports = router;