const upload = require('./uploadutil')
const uploadPoster = require('../util/posterutil')

const checkProfileImage = (req, res, next) => {
    upload(req, res, function (err) {

      if(err){
            return res.status(400).json({ error: '400', message: `${err.message} less than 50kb` });
        }

        next();
    })
}

const checkPosterImage = (req, res, next) => {
    uploadPoster(req, res, function (err) {

      if(err){
            return res.status(400).json({ error: '400', message: `${err.message} ` });
        }

        next();
    })
}



module.exports = {checkProfileImage,checkPosterImage}

