
const userRouter = require("express").Router();
const { getUserInfo,userLogin,userLoginSave,registerUser,registerUserData,updateUserData,deleteUserData } = require("../controllers/users.controller");


userRouter.get("/allUsers", getUserInfo);



userRouter.get("/login", userLogin);
userRouter.post("/login", userLoginSave);



userRouter.get("/register", registerUser);
userRouter.post("/register", registerUserData);
userRouter.put("/register/:id([0-9]+)", updateUserData);
userRouter.delete("/register/:id([0-9]+)", deleteUserData);

 


module.exports = userRouter;