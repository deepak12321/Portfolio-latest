import uploadtoCloudnary from "../utility/cloudnary.js";

const upload = async (file_path) => {};

const saveToCloud = async (request, response) => {
  try {
    const file = request.file;

    const uploadResult = await uploadtoCloudnary(file);

    return response.status(200).json({
      status: "sucessfully Uploaded on CLoudinary",
      url: uploadResult.url,
    });
  } catch (error) {
    console.log("error uploading the file in controller => ", error);
  }
};

export default saveToCloud;
