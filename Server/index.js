const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const adminRouter=require('./routes/adminRoute')

dotenv.config();


const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/user/',userRouter);
app.use('/api/admin/',adminRouter)

const PORT = process.env.PORT || 5000;

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.dbConnect)
        console.log('DB Connected')
    } catch (error) {
        console.log('DB Server Error')
    }
}
dbConnect()

app.listen(PORT,()=>{
    console.log('Server:5000 Started Successfully');
})

