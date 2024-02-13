const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://admin:1234@cluster0.w2ssinh.mongodb.net/test_db?retryWrites=true&w=majority'; // Replace 'mydatabase' with your database name

// connect to MongoDB
// mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));


module.exports = () => {
   return mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
}