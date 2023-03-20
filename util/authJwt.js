const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  
  /* const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; */
   console.log
   if(req.cookies?.jwt_access){
    const token = req.cookies.jwt_access;
    if (!token) return res.status(401).json({error:'401',message:'unauthorized'});

    jwt.verify(token, process.env.SECRET, (err, user) => {
      if (err) return res.status(401).json({error:'401',message:'Token expired'});
      req.user = user.username;
      next();
    });

   }else{return res.status(401).json({ error: '401', message: 'invalid Token' });}



}




module.exports = {authenticateToken}
