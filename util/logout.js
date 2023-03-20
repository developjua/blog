const connection = require('../database/mysqlConnection')

const logout = (req, res) => {

            res.clearCookie('jwt_access', {
                httpOnly: true,
                secure: true
            }).json({'message':'logout sucessfully'})}
 



module.exports = logout;