import express from "express"
export const userRouter = express.Router();


import { upload_multer } from "../config/fileHelperConfig.js";

import { userRegistration, getAllUsers, userLogin, userLogOut, userUpdate, userAccountDelete } from "../controller/user.controller.js";
import { verifyUserToken } from "../middleware/verifyToken.js";




userRouter.post("/register", upload_multer.single("userImage"), userRegistration);

userRouter.post("/userlogin", userLogin);
// userRouter.post("/userauth",verifyUserToken);


userRouter.get("/getallusers", verifyUserToken, getAllUsers);
userRouter.post("/userlogout", verifyUserToken, userLogOut);
userRouter.post("/userupdate", verifyUserToken, userUpdate);
userRouter.post("/useraccountdelete", verifyUserToken, userAccountDelete);
