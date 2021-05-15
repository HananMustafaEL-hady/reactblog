const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://hanan123:123@blog.ujeek.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify:false,
    useCreateIndex:true
});
const connection = mongoose.connection;

module.exports = connection;


