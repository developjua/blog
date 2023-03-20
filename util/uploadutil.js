const multer = require('multer');
const fs = require('fs')
const path = require('path')










const profilePicStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const profilePicDir = './uploads/profile/';
    if (!fs.existsSync(profilePicDir)) {
      fs.mkdirSync(profilePicDir, { recursive: true });
    }
    cb(null, profilePicDir);
  },
  filename: (req, file, cb) => {
 
    cb(null, file.originalname+ '-' + Date.now() )
  }
});


const blogPosterStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const blogPosterDir = './uploads/blog/poster/';
    if (!fs.existsSync(blogPosterDir)) {
      fs.mkdirSync(blogPosterDir, { recursive: true });
    }
    

    cb(null, blogPosterDir);
  },
  filename: (req, file, cb) => {

    cb(null, file.originalname+ '-' + Date.now() )
  }
});

const uploadProfilePic = multer({ storage: profilePicStorage , 
    limits: {
    fileSize: 50000,
    fileFilter: function(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png)$/)) {
            return cb(new Error('Only JPG/PNG files are allowed '))
        }
        cb(null, true)
    }

},}).single('profilePic');

const uploadBlogPoster = multer({ 
  storage: blogPosterStorage ,
    limits: {
    fileSize: 100000,

    fileFilter: function(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|png)$/)) {
            return cb(new Error('Only JPG/PNG files are allowed '))
        }
        cb(null, true)
    }}
}).single('poster');





module.exports = {uploadBlogPoster,uploadProfilePic}
