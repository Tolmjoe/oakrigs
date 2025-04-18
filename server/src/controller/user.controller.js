import bcrypt from "bcryptjs"
import cloudinary from "../config/cloudinaryConfig.js";
import { User } from "../models/user.model.js";
import { sendVerificationEmail } from "../utils/emailAccountVerification.js";
import { generateTokenAndSetCookies } from "../utils/generateJWT_setCookies.js";
export const userRegistration = async (req, res) => {
    try {
        const { firstName, lastName, email, password, dateOfBirth, country } = req.body;
        if (!firstName || !lastName || !email || !password || !dateOfBirth || !country) {
            return res.status(400).json({ "errorMessage": "all fields are required!" });
        }
        // const userAlreadyExist = await User.findOne({ email });
        // if (userAlreadyExist) {
        //     return res.status(400).json({ "errorMessage": "user already exist!!" });
        // }
        const verificationToken = Math.round(Math.random() * 1000000);
        // console.log(verificationToken)
        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "Oaktabytes/userImages/",
            public_id: `${firstName}_${lastName}`
        });

        let hashedpassword = await bcrypt.hash(password, 10);
        const user = new User({
            firstName, lastName, email,
            password, dateOfBirth, country,
            verificationToken,
            verificationTokenExpiresAT: Date.now() + 24 * 60 * 60 * 1000,
            password: hashedpassword,
            imagePublicId: result.imagePublicId,
            imageSecuredUrl: result.imageSecuredUrl
        });
        await user.save();
        sendVerificationEmail(user.verificationToken, email);
        // generateTokenAndSetCookies(res, user._id);
        console.log(user)
        res.status(200).json({ message: "user saved successfully.." });

    } catch (error) {
        console.log(error)
    }

}

export const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) return res.status(400).json({ errorMessage: "invalid credentials..." });
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
        if (!passwordMatch) return res.status(400).json({ errorMessage: "invalid credentials..." });
        generateTokenAndSetCookies(res, existingUser._id);
        res.status(200).json({
            success: true,
            message: "authorized",

            user: {
                ...existingUser._doc,
                password: undefined
            }
        });

    } catch (error) {
        console.log(error.message)
    }

}

export const getAllUsers = async (req, res) => {

    try {
        const users = await User.find();
        users ? res.status(200).json({
            success: true,
            message: "succefully fetched all users",
            users
            // user: [{...users}]
        }) : res.status(200).json({
            success: false,
            message: "no user available in database.....",
        })

    } catch (error) {
        console.log(error.message)
    }

}

export const userLogOut = async (req, res) => {
    try {
        res.status(200).send(1);
        return
    } catch (error) {
        console.log(error)
    }

}

export const userUpdate = async (req, res) => {
    try {
        res.status(200).send(1);
        return
    } catch (error) {
        console.log(error)
    }

}

export const userAccountDelete = async (req, res) => {
    try {
        res.status(200).send(1);
        return
    } catch (error) {
        console.log(error)
        
    }

} 
