const { Router } = require("express");
const { postNewUser } = require("../controller/user.controller");

const userRouter = Router();

userRouter.post("/register", postNewUser);

module.exports = { userRouter };
