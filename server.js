const express = require('express');
 const connectDB=require('./config/db');
const app =express();
const path=require('path');
//Connect Database

connectDB();

//init Middleware
app.use(express.json({extended:false}));

// app.get('/',(req,res)=>res.send('API RUNNING'));

app.use('/api/users',require('./routes/api/users'));
app.use('/api/auth',require('./routes/api/auth'));
app.use('/api/posts',require('./routes/api/posts'));
app.use('/api/profile',require('./routes/api/profile'));
app.use('/api/upload',require('./routes/api/imguser'));
// const uploads=require('./routes/api/imguser');
// app.use('/api/upload', express.static(uploads));


//serve  static assets in production

if(process.env.NODE_ENV==='production'){

    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{


        res.sendFile(path.resolve(__dirname,'client','build','index'));

    });


}

const PORT=process.env.PORT||4001;

app.listen(PORT,()=>console.log(`server started on port  ${PORT}`));



