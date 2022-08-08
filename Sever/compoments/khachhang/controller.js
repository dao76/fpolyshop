const khachangSerive = require('./service');
const nodemailer = require("nodemailer");


exports.sendmail = async (email) => {

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "top59477@gmail.com",
            pass: "nnxbbrtbsnidizci"
        },
    });

    await transporter.sendMail(
        {
            from: "top59477@gmail.com", // sender address
            to: `${email}`, // list of receivers
            subject: "Kimoanhdatnen.com.vn", // Subject line

            // html: "    <p style='text-align:center;''><img src='https://i.imgur.com/FMB0C6J.jpg' width='400px' height='400px'alt='Logo'></p>        <p style='font-size: 20px; font-weight: bolder;text-align:center; '>Mã của bạn là:   <p>${chuoi_string}</p> </p>        <p style='text-align:center;'>Xin chào, vui lòng nhập mã `{$code}`trong vòng 10 phút tới để hoàn tất </p>        <p style='text-align:center;'>xác nhận email của bạn. </p>" , // html body
            html: ` <p style='text-align:center;margin-top: 100;''><img src='https://i.imgur.com/3O3KRXR.jpg' width='450px' height='400px'alt='Logo'></p>  <p style='text-align:center; font-size: 20px; font-weight: bolder;margin : -90px;position: absolute;left:210px;'>cảm ơn bạn đã đăng ký tư vấn và tham quan, vui lòng chờ nhân viên bên chúng tôi liên hệ lại </p> <p style='text-align:center;'> </p> <div style='text-align:center;'>  </div>`

        },
        (err) => {
            if (err) {
                return res.json({
                    message: "Lỗi",
                    err,
                });
            }
            return res.json({
                message: `Đã gửi mail thành công cho tài khoản ${email}`,
            });
        }
    );
}
exports.insert = async (khach) => {
    return await khachangSerive.insert(khach);
}
