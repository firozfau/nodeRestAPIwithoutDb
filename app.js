const express = require("express");
const cors = require("cors");
const bParser = require("body-parser");

const userRouter = require("./routes/users.route");

app = express();

app.use(cors());
app.use(bParser.urlencoded({extended:true}));
app.use(bParser.json());


app.use("/api/users",userRouter);






app.get("/", (req, res) => {

    res.sendFile(__dirname + "/views/index.html");
    
});

app.use("*", (req, res) => {
   
    res.send("404-Not found !");
 
});




module.exports = app;