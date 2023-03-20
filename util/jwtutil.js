const jwt = require('jsonwebtoken')


const jwtToken = async (tokenvalue) => {
    const token = await tokenvalue ;
    console.log(token)
    const tokenval = jwt.sign({ username: token}, process.env.SECRET, { expiresIn: '5m' });
    const refreshtoken = jwt.sign({ username: token}, process.env.REFRESH_SECRET, { expiresIn: '1d' });
    return {tokenval,refreshtoken}

}



module.exports =  jwtToken ;