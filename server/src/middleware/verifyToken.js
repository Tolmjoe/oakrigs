import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { User } from "../models/user.model.js";
dotenv.config();

export const verifyUserToken = async (req, res, next) => {
    try {
        const token = req.cookies.token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        if (!verified) return res.status(400).json({ success: false });
        const existingUser = await User.findOne({ _id: verified.userId });
        if (!existingUser) return res.status(400).json({ success: false });
        next();
    } catch (error) {
        console.log(error.message)
    }
}