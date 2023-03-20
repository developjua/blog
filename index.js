const express = require('express');
const app = express();
const cookieparser = require('cookie-parser');
const useRoute = require('./routes/userRoutes/userRoute')
const adminRoute = require('./routes/adminRoutes/adminRoute')
const dotenv = require('dotenv')
dotenv.config();




app.use(express.json());
app.use(express.urlencoded({extended : false}))
app.use(cookieparser())



app.use('/admin',adminRoute)
app.use('/user',useRoute)



app.listen(process.env.PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
});