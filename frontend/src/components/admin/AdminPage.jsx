import React, { useState } from "react";
import axios from "axios";

const AdminPage = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // stop page reload
    if (!file) {
      alert("Please choose a file first");
      return;
    }

    const fd = new FormData();
    fd.append("file", file); // <-- 'file' matches multer.single("file")
    fd.append("customerName", "Deepak"); // optional extra fields

    try {
      const upload = await axios.post(
        "http://localhost:8000/certificates/upload-certificate-details",
        fd,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log("Response:", upload.data);
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed");
    }
  };

  return (
    <div className="file-container h-screen w-screen flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*,application/pdf"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
        />

        <button
          type="submit"
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </form>

      <img
        src="http://res.cloudinary.com/da4zjlhwu/image/upload/v1765443818/vbbtm9e389deo7bcgpvh.png"
        alt=""
      />
    </div>
  );
};

export default AdminPage;
