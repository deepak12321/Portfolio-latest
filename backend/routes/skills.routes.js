import express from "express";
import {
  saveSkillsToDB,
  fetchSkills,
} from "../controllers/skills.controller.js";

const skillsRouter = express.Router();

skillsRouter.route("/add-skills").post(saveSkillsToDB);
skillsRouter.route("/get-Skills").get(fetchSkills);

skillsRouter.route("/health").get((request, response) => {
  try {
    return response.status(200).json({
      success: true,
      message: "/skills route is running normally",
    });
  } catch (error) {
    return response.status(500).json({
      success: false,
      message: "/skills has some issue",
      error,
    });
  }
});

export default skillsRouter;
