// Purpose: To create a schema and model for the user collection in the database.
const mongoose=require('mongoose');
//schema creation
const schema=mongoose.Schema({
    Name:String,       //getting the name from the user/frontend
    Age:Number,
    Place:String,
    Phone:Number
})
//model creation
const userModel=mongoose.model("user",schema);  //user is the collection name using the schema
module.exports=userModel;   //exporting the model to index.js