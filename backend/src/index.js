import app from "./app.js";
import connectDB from "../db/index.js";

const PORT = process.env.PORT || PORT;
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      try {
        console.log("Server Listening on PORT :", PORT);
      } catch (error) {
        console.log(
          "An Error Occured While establishing Connection :- ",
          error
        );
      }
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed", error);
  });
