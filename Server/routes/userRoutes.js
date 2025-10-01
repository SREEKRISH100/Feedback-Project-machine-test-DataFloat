const express = require('express');

const { registerUser, loginUser, addFeeback, viewFeeback, deleteFeeback } = require('../controller/userController');
const verifyToken = require('../Middleware/verifyToken');


const userRouter = express.Router();

userRouter.post('/register',registerUser);
userRouter.post('/login',loginUser);
userRouter.post('/addFeeback',verifyToken,addFeeback);
userRouter.get('/viewFeeback',verifyToken,viewFeeback);
userRouter.delete('/deleteFeeback/:id',verifyToken,deleteFeeback);


module.exports = userRouter ;