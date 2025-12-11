import mongoose from "mongoose";

const projectSchema = mongoose.Schema({
  project_Images_URL: {
    type: [String],
    required: true,
  },
  project_name: {
    type: String,
    required: true,
  },
  project_desc: {
    type: [String],
    required: true,
  },
  project_tools: {
    type: [String],
    required: true,
  },
  project_github: {
    type: String,
    default: null,
  },
  project_live: {
    type: String,
    default: null,
  },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
