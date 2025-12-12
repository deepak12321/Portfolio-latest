import mongoose from "mongoose";

const skillsSchema = mongoose.Schema({
  skill_name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Skill = mongoose.model("Skill", skillsSchema);


export default Skill;
