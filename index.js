// 1.import express
var express=require('express');
require('./connection');
const user=require('./model/user');                                    //importing the model from user.js 
// 2.Initialization
var app=express();                                                    //using again so store in another variable
//middleware  
app.use(express.json());                                           //middleware to convert the data into json format)   
// 3.api
//app.get('/',(req,res)=>{})//data as the request

app.get('/login',(req,res)=>{
    res.send('login successfully');

})
//add data to the database
app.post('/login',async(req,res)=>{

    try{ 
      console.log(req.body);                     //getting the data from the frontend
      await user(req.body).save();               //saving the data to the database
      res.send({message:"data added successfully"})      //sending the response to the frontend
    }catch(error){
        console.log(error)
        
    }
 })
 //to view
 app.get('/view',async(req,res)=>{
    try{
        const data=await user.find(); //finding the data from the database
        res.send(data);             //sending the data to the frontend
    }catch(error){
        console.log(error)
    }
 })
 // to delete the user

 app.delete('/remove/:id',async(req,res)=>{
    try{
        console.log(req.params.id);
        await user.findByIdAndDelete(req.params.id);
        res.send({message:"deleted"})
    }
    catch(error){
        console.log(error)
    }
 })
    app.put('/edit/:id',async(req,res)=>{
        try{
            var data=await user.findByIdAndUpdate(req.params.id,req.body); //updating the data in the database
            res.send({message:'updated successfully',data})
        }
        catch(error){
            console.log(error)
        }
    })
// 4.port for running server
app.listen(3001,()=>{
    console.log('server is running on port')
})