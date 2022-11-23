const express = require("express")
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname)); 

mongoose.connect("mongodb+srv://bhalaji:bhalaji3004@cluster0.rf6dsat.mongodb.net/EventManagement")

const postSchema={
    date: String,
    month: String,
    imglink: String,
    title:String,
    content:String
}       

const contactSchema={
    name:String,
    email:String,
    phone:String,
    etype:String,
    people:Number,
    budget:Number,
    location:String,
    details:String
}

const newmsg =mongoose.model("messages",contactSchema)
app.post("/sendFeedback",function(req,res){
    console.log(req.body)
    let newInsert=new newmsg({                
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        etype: req.body.etype,
        people: req.body.people,
        budget: req.body.budget,
        location: req.body.location,
        details: req.body.details          
    })
    console.log(newInsert)
    newInsert.save();
    res.redirect("/about.html");
})

const newPost=mongoose.model("newsposts",postSchema)

var today = new Date()
var dd = String(today.getDate()).padStart(2, '0')
var mm = today.toLocaleString('default', { month: 'short' });

app.get("/",function(req,res){           
    res.sendFile(__dirname + '/index.html')
})
app.get("/sendFeedback",function(req,res){           
    res.sendFile(__dirname + '/about.html')
})


app.get("/load",(req,res)=>{
    newPost.find( (err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        else{
            return res.status(200).send(data)
        }
    })
})

app.post("/insertform",function(req,res){
    let newInsert=new newPost({                
        date:dd,
        month:mm,
        imglink:req.body.imglink,
        title:req.body.title,
        content:req.body.content            
    })
    console.log(newInsert)

    newPost.find({title: { $regex: req.body.title, $options: 'i' }}, (err,data)=>{
        if(err){
            console.log("ERRORRR!!!")
        }
        else{
            console.log(data)
            if(data.length<=0){
                newInsert.save();
                res.redirect("/blog.html");
            }
            else{
                res.redirect("/duplicateInsertPage.html");
            }
            
        }
    })
})

app.post("/editform",function(req,res){
    console.log(req.body)
    let update={                
        date:dd,
        month:mm,
        imglink:req.body.imglink,
        title:req.body.title,
        content:req.body.content            
    }
    let query={                
        title:req.body.search_title,         
    }
    newPost.updateOne(query,update, function (err, result) {
        if (err){
            console.log(err)
        }else{
            console.log("Result :", result) 
        }
    });
    res.status(200).redirect('/blog.html');
})

app.post("/delete",function(req,res){
    console.log(req.body)
    let query={                
        title:req.body.search_title,         
    }
    newPost.find(query).deleteOne( (err,data)=>{
        if(err){
            return res.status(500).send(err)
        }
        else{
            console.log(data)
            return res.status(200)
        }
    })
    res.status(200).redirect('/blog.html');
})

const registerSchema={
    username: String,
    dob: String,
    email: String
}        
const registers=mongoose.model("registers",registerSchema)
app.post("/registerform",function(req,res){
    console.log(req.body)
    let newInsert=new registers({                
        username: req.body.username,
        dob: req.body.dob,
        email: req.body.email           
    })
    console.log(newInsert)
    newInsert.save();
    res.redirect("/blog.html");
})
app.listen(3000,function(){
    console.log("server is running on 3000")
})
