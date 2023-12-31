const mongoose=require("mongoose");
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
const app=require('./app');
mongoose.connect(process.env.CONN_STR,{
    useNewUrlParser:true
}).then((conn)=>{console.log('DB Connection Successful');})
const port = process.env.port ||  3000;
app.listen(port, () => {
    console.log('Server has started');
});