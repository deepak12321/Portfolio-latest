import mongoose from "mongoose";
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@portfolio.uswyvbt.mongodb.net/?appName=portfolio`;

const connectDB = async () => {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    console.log("Connecting to DB...");
    const connectionStatus = await mongoose.connect(uri);
    console.log(
      "DB connection Successfull, DB_HOST:-",
      connectionStatus.connection.host
    );
  } catch (error) {
    console.log("error occured connecting to DB :- ", error);
    process.exit(1);
  }
};

export default connectDB;
