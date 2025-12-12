import Skill from "../models/skills.models.js";

const saveSkillsToDB = async (request, response) => {
  try {
    const skillsData = request.body;
    console.log(skillsData);

    if (
      !skillsData ||
      !skillsData.skills ||
      !Array.isArray(skillsData.skills)
    ) {
      return response.status(400).json({
        success: false,
        message: "(BE) Failed to receive data or invalid format",
      });
    }

    // Trim each skill and filter out empty strings
    const cleanedSkills = skillsData.skills
      .map((skill) => skill.trim())
      .filter((skill) => skill !== "");

    if (cleanedSkills.length === 0) {
      return response.status(400).json({
        success: false,
        message: "(BE) No valid skills provided",
      });
    }

    let data = cleanedSkills.map((skill) => ({ skill_name: skill }));

    const inserted = await Skill.insertMany(data, { ordered: false });
    console.log(inserted);

    return response.status(200).json({
      success: true,
      message: "Skills added successfully to database",
      data: inserted,
    });
  } catch (error) {
    console.error("Error in saveSkillsToDB:", error);
    return response.status(500).json({
      success: false,
      message: "(BE) Something went wrong while uploading the data",
      error: error.message,
    });
  }
};

const fetchSkills = async (request, response) => {
  try {
    const items = await Skill.find();

    console.log(items);

    return response.status(200).json({
      success: true,
      length: items.length,
      data: items,
    });
  } catch (error) {}
};

export { saveSkillsToDB, fetchSkills };
