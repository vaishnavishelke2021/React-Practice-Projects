import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => console.log("Connected to MongoDB"));
    connection.on("error", (e) => {
      console.log("MongoDB Connection Error");
      console.log(e);
      process.exit();
    });
  } catch (e) {
    console.log("something went wrong");
    console.log(e);
  }
}
