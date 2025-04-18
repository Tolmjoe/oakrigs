import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            
        },
        password: {
            required: true,
            type: String,
        },
        dateOfBirth: {
            type: String,
            required: true
        },

        country: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            default: false
        },
        imagePublicId: String,
        imageSecuredUrl: String,

        verificationToken: String,
        verificationTokenExpiresAT: String,
        passwordResetToken: String,
        passwordResetTokenExpiresAT: String,
    },
    { timestamps: true }

)
export const User = mongoose.model("user", userSchema);