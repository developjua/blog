const express = require('express');
const {uploadBlogPoster}  = require('../../util/uploadutil')

const adminrouter = express.Router();
const {adminLoginController} = require('../../controllers/adminControllers/adminLoginController')
const {listAllUsers,listAllBlog} = require('../../controllers/adminControllers/listAllUsersandblogs')
const {authenticateToken} = require('../../util/authJwt')
const newsBlog = require('../../controllers/adminControllers/postblog')
const refreshAcesssToken = require('../../util/refresh')
const logout = require('../../util/logout')


adminrouter.post('/login', adminLoginController)
adminrouter.post('/newsblog',authenticateToken,uploadBlogPoster ,newsBlog)
adminrouter.get('/logout',authenticateToken,logout)

adminrouter.get('/allblogs',authenticateToken,listAllBlog)
adminrouter.get('/allusers', authenticateToken, listAllUsers);
adminrouter.get('/refresh',refreshAcesssToken)
  




module.exports = adminrouter;
