let users = require("../models/users.model");
const { v4: uniqueID } = require("uuid");




const getUserInfo = (req, res) => {

    res.status(200).json({ users });

};

const userLogin = (req, res) => {

    res.status(200).json({ users });

};

const userLoginSave = (req, res) => {

    res.status(200).json({ users });

};


const registerUser = (req, res) => {

    res.status(200).json({ users });

};


function getRandomInt(min, max) { 
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min; 
} 

const registerUserData = (req, res) => {
    const newUser=
            {
                id: uniqueID(),
                username: req.body.username,
                email: req.body.email,
                user_id:getRandomInt(111,999)
            }
   
    users.push(newUser)
    res.status(200).json({ users });

};

 

const updateUserData = (req, res) => {

     const userId = req.params.id;
    const { username, email } = req.body;

    users.filter((users) => users.user_id == userId).map(
        (selecteduser) => {
         
            selecteduser.username = username;
            selecteduser.email = email;
        });
 
 
    res.status(200).json({ users });

};

const deleteUserData = (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    
    const filterData= users.filter((user) => user.user_id != userId);


    
    res.status(200).json({ filterData });

};

 



module.exports = { getUserInfo,registerUser, registerUserData,userLogin,userLoginSave,updateUserData,deleteUserData};