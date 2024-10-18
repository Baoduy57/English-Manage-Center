import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGOO_URI, {
      dbName: "ENGLISH_MANAGEMENT_CENTER_SYSTEM",
    })
    .then(() => {
      console.log("Connected to database successfully!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
