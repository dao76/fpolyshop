/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
const authentication = require("../ui/authentication")
const upload = require("../middle/upload");


router.get("/:id/detail", async function (req, res, next) {
    // lấy 1 sản phẩm từ database và hiển thị
    const { id } = req.params;
    console.log(id);
    // lấy thông tin chi tiết của sản phẩm
    const product = await productController.getProductById(id);
    // if (user != null) {
    //     res.status(200).json({ status: 200, error: false, data: user })
    // } else {
    //     res.status(200).json({ status: 200, error: false, data: [] })

    res.render("duan_deltai", { product: product });
    //hiển thị(render)
});



module.exports = router;
