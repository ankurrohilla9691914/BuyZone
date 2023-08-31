import mongoose from "mongoose";

/**Method to connect DB */
const Connection = async (userName, userPassword) => {
  const URL = `mongodb+srv://${userName}:${userPassword}@cluster0.rgo7uwz.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("successssss");
  } catch (error){
    console.log("error in DB connection",error.message);
  }
};

export default Connection;
