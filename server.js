const express = require("express");
const ejs = require("ejs")
const mongoose = require("mongoose")
const app = express();

mongoose.connect("mongodb://admin:123@postapi-shard-00-00.m5drb.mongodb.net:27017,postapi-shard-00-01.m5drb.mongodb.net:27017,postapi-shard-00-02.m5drb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-gfmcyc-shard-0&authSource=admin&retryWrites=true&w=majority")
const noteSchema = {
    title : String,
    content : String
}
const note = mongoose.model("Note", noteSchema);

app.get("/",function(req,res){
    note.find({}, function(req,note){
        res.render(__dirname + "/views/index.ejs", {
           noteList : note 
        })
    })
});

app.listen(3000, function(){
    console.log("server running on port 3000")
});
