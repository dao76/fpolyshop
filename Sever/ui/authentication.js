const jwt = require('jsonwebtoken');
exports.checklogin = function (req, res, next) {
    const { session } = req;
    const url = req.originalUrl.toLowerCase();
    if (!session) {
        if (url.includes('login_admin')) {
            next();
        } else {
            res.redirect('/login_admin');
        }
    } else {
        const { token } = session;
        if (!token) {
            if (url.includes('login_admin')) {
                next();
            } else {
                res.redirect('/login_admin');
            }
        } else {
            jwt.verify(token, 'mykey', function (error, decoded) {
                if (error) {
                    if (url.includes('login_admin')) {
                        next();
                    } else {
                        res.redirect('/login_admin');
                    }
                } else {
                    if (url.includes('login_admin')) {
                        res.redirect('/admin');

                    } else {
                        next();
                    }

                }
            })
        }
    }
}
exports.checkToken = function (request, response, next) {
    let token = null;
    if (request.headers.authorization &&
        request.headers.authorization.split(' ')[0] == 'Bearer')
        token = request.headers.authorization.split(' ')[1];

    if (token) {
        jwt.verify(token, 'mykey', function (error, decoded) {
            if (error) {
                response.json({ status: false })
            } else {
                next();
            }
        })
    } else {
        response.json({ status: false })
    }
}