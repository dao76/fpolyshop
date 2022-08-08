/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
const newControler = require("../compoments/news/controller");
const khachControler = require("../compoments/khachhang/controller");

const authentication = require("../ui/authentication")
const upload = require("../middle/upload");

router.get("/login_admin", function (req, res, next) {
  res.render("login");
});
router.post("/", async function (req, res, next) {
  const { username, password } = req.body;
  console.log("username = " + username);

  // tiến hành đăng nhập

  const user = await userController.login(username, password);
  // await có tác dung là chờ nó chờ nó lấy
  // await thì phải có async

  if (user) {
    const token = jwt.sign({ id: user._id, username: user.username }, 'mykey')
    req.session.token = token;
    // nếu thành công thì chuyển qua sản phẩm
    res.redirect("/admin");
  } else {
    // nếu không thành công
    res.redirect("/");
  }
});



router.get("/profile", [authentication.checklogin], function (req, res, next) {
  res.render("profile");
});
// /**



router.get("/", async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị
  const data = await productController.getProducts();
  const newdata = await newControler.getnews();

  res.render("index", { products: data, news: newdata });
  // hiển thị(render)
  // if (data != null) {
  //   res.status(200).json({ status: 200, error: false, data: data })
  // } else {
  //   res.status(200).json({ status: 200, error: false, data: [] })
  // }

});
router.get("/all_duan", async function (req, res, next) {
  // lấy danh sách sản phẩm từ database và hiển thị
  const data = await productController.getAll();

  res.render("duan_all", { products: data });
  // hiển thị(render)
  // if (data != null) {
  //   res.status(200).json({ status: 200, error: false, data: data })
  // } else {
  //   res.status(200).json({ status: 200, error: false, data: [] })
  // }

});
router.post('/insert', async (req, res, next) => {
  const { tennew, mieuta, image } = req.body
  const result = await newControler.insert({ tennew, mieuta, image, })
  if (result) {
    return res.status(200).json({ status: 200, error: false })
  }
  res.status(200).json({ status: 200, error: true })
})
// Author: Trần Quang Đạo, Mai Xuân Phi
router.post('/sendmail', async (req, res, next) => {
  const { email, name, phone } = req.body

  await khachControler.sendmail(email)
  await khachControler.insert({ email, name, phone })

})
module.exports = router;
