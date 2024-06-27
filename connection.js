// 1.import mongoose
const mongoose=require('mongoose');
// 2.connect to mongodb
 mongoose.connect("mongodb+srv://annmariyajoyp:AnnJoy@cluster0.wtp5tiq.mongodb.net/OpenBatchdb1?retryWrites=true&w=majority&appName=Cluster0")// paste the mongodb url and write the name of db in btn the /..? and replace passw

 .then(()=>{
    console.log("connected to mongodb");
 })
 .catch((error)=>{
    console.log(error);
 });