import mongoose from "mongoose";

export const dbConnection= async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URI);
        console.log("succesfully connected to database")
      } catch (error) {
        console.log(error);
      }

}
 