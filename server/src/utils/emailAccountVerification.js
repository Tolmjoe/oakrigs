
import { client, sender } from "../config/mailtrapConfig.js";
export const sendVerificationEmail = async (verificaionToken, email) => {
    try {
        const recipients = [{ email }];
        const response = await client.send({
            from: sender,
            to: recipients,
            subject: "Account Verification",
            text: `your verification code is ${verificaionToken}`,
            category: "Integration Test",
        })

        return (0);
    } catch (error) {
        console.log(error.message)
    }

}

