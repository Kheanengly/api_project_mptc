const express = require('express');
const connectDB = require('./src/config/mongo.config');
const adminRoutes = require('./src/route/route.admin');
const app = express();
// const dotenv = require('dot')
// const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended:false}))



// Mount the user routes at the base URL '/admin'
app.use('/admin', adminRoutes);


// port number
const port = 3000; 

// Start the server
connectDB().then(()=>{
    app.listen(port, () => {
        console.log('Server is running on port 3000');
    });
}).catch(err => console.log(err))