const express = require('express');
const { AdminViewAllUsers, AdminViewUsersFeedback } = require('../controller/adminController');
const adminRouter = express.Router();
const verifyToken=require('../Middleware/verifyToken')



adminRouter.get('/adminviewuser',verifyToken,AdminViewAllUsers)
adminRouter.get('/adminviewfeedback',verifyToken,AdminViewUsersFeedback)
module.exports=adminRouter;