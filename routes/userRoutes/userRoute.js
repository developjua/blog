const express = require('express');
const userRouter = express.Router()
const {userLogin,userSignup} = require('../../controllers/userControllers/userAuthController')
const {uploadProfilePic} = require('../../util/uploadutil')
const listAllBlogusers = require('../../controllers/userControllers/showAllblogs')
const {authenticateToken} = require('../../util/authJwt')
const refreshAcesssToken = require('../../util/refresh')
const logout = require('../../util/logout')



userRouter.post('/login',userLogin)
userRouter.post('/signup',uploadProfilePic,userSignup)
userRouter.get('/allblogs',authenticateToken,listAllBlogusers)
userRouter.get('/refresh',refreshAcesssToken)
userRouter.get('/logout',authenticateToken,logout)
module.exports = userRouter;

