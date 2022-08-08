/**
 * router: giống như là ngươi điều hướng , quyết dịnh cái gì sẽ diễn ra tiếp theo
 */
var express = require("express");
var router = express.Router();
const jwt = require('jsonwebtoken');
const userController = require("../compoments/user/controller");
const productController = require("../compoments/products/controller");
const newController = require("../compoments/news/controller");

const authentication = require("../ui/authentication")
const upload = require("../middle/upload");

router.get("/", [authentication.checklogin], async function (req, res, next) {
    // lấy danh sách sản phẩm từ database và hiển thị
    const data = await newController.getAll();

    res.render("admin", { news: data });
    // hiển thị(render)
    // if (data != null) {
    //   res.status(200).json({ status: 200, error: false, data: data })
    // } else {
    //   res.status(200).json({ status: 200, error: false, data: [] })
    // }

});
router.delete("/:id/delete", async function (req, res, next) {
    // xóa 1 sản phẩm
    const { id } = req.params;
    await productController.delete(id);

    res.json({ result: true });
    // trả về kết quả xóa

})



module.exports = router;
