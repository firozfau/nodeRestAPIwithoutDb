const { v4: uniqueID } = require("uuid");

const users = [{
    id: uniqueID(),
    username: "firoz",
    email: "frz@gmail.com",
    user_id:111
},{
    id: uniqueID(),
    username: "jabed",
    email: "jabed@gmail.com",
     user_id:222
    }];



module.exports = users;