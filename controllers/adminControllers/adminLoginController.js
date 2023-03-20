const crypto = require('crypto');
const pool = require('../../database/mysqlConnection');
const jwtToken = require('../../util/jwtutil')


const adminLoginController = (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
    pool.query('SELECT * FROM admin WHERE username = ? and password = ?', [username, hashedPassword], async (error, results) => {

        if (error) {
            console.error(error);
            res.status(500).json({ error: 'An error occurred while logging in.' });
        } else if (results.length === 0) {
            res.status(401).json({ error: 'Invalid credentials.' });
        } else {
            const tokenjwt = await jwtToken(results[0].username)
 
                    res.cookie('jwt_refresh', tokenjwt.refreshtoken, {
                        httpOnly: true,
                        secure: true,
                        maxAge: 24 * 60 * 60 * 1000
                    }).cookie('jwt_access',tokenjwt.tokenval,{
                        httpOnly:true,
                        secure:true
                    }).json({ message: `welcome ${results[0].username}` });
                }
            })

        }





module.exports = { adminLoginController };
