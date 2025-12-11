import { v2 as cloudinary } from "cloudinary";
import fs from "fs"; // file system

const uploadtoCloudnary = async (file_details) => {
  const file_path = file_details.path;
  const public_id = file_details.file_name;
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

  try {
    if (!file_path) {
      console.log("Cloudnary unable to get file path.");
      return null;
    }

    const uploadResult = await cloudinary.uploader.upload(file_path, {
      public_id,
      resource_type: "auto",
    });

    console.log("file uploaded on cloudnary:- ", uploadResult);

    return uploadResult;
  } catch (error) {
    console.log("something went wrong while uploading the media to cloudnary");
  } finally {
    try {
      fs.unlinkSync(file_path);
    } catch (err) {
      console.log("File deletion failed:", err);
    }
  }
};

export default uploadtoCloudnary;
