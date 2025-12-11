import multer from "multer";

// using disk storage

const storage = multer.diskStorage({
  destination: function (request, file, cb) {
    // cb -> callback function
    cb(null, "./temp"); // keeping all files inside public folder
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const multerUpload = multer({ storage: storage });

export default multerUpload;
