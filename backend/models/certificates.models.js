import mongoose from "mongoose";

const certificateSchema = mongoose.Schema({
  certificate_pdf: {
    type: String,
    required: true,
  },
  certificate_heading: {
    type: String,
    required: true,
  },
});

const Certificate = mongoose.model("Certificate", certificateSchema);

export default Certificate;
