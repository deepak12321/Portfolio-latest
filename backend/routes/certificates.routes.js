import express from "express";
import multerUpload from "../middleware/multer.middleware.js";
import saveToCloud from "../controllers/certificates.controllers.js";

const certificateRouter = express.Router();

certificateRouter
  .route("/upload-certificate-details")
  .post(multerUpload.single("file"), saveToCloud);

certificateRouter.route("/get-certificate-data").get((request, response) => {
  response.status(200).json({
    message: "This is project touter",
    project_name: "life coching website",
  });
});

export default certificateRouter;
