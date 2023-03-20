const jwt = require('jsonwebtoken')
const refreshAcesssToken = (req, res) => {
    if (req.cookies?.jwt_refresh) {


        const refreshToken = req.cookies.jwt_refresh;

        jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
            
            if (err) {

                return res.status(400).json({ error: '400', message: 'Token expired' });
            }
            else {
                req.user = user.username
                const token = jwt.sign({
                 username:user.username
                }, process.env.SECRET, {
                    expiresIn: '5m'
                });
                return res.cookie('jwt_access',token,{
                    httpOnly:true,
                    secure:true
                }).json({message:'successfully generated'})
            }
        })
    } else {
        return res.status(401).json({ error: '401', message: 'invalid Token' });
    }
}

module.exports = refreshAcesssToken