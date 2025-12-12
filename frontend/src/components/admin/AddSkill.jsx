import React, { useState } from "react";
import axios from "axios";

const AddSkill = () => {
    const [skillName, setSkillName] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: "", text: "" });

    const handleSubmit = async (event) => {
        event.preventDefault();
        setMessage({ type: "", text: "" });

        // Validation
        if (!skillName.trim()) {
            setMessage({
                type: "error",
                text: "Please enter at least one skill",
            });
            return;
        }

        // Split by comma and trim each skill
        const skills = skillName
            .split(",")
            .map((skill) => skill.trim())
            .filter((skill) => skill !== "");

        if (skills.length === 0) {
            setMessage({
                type: "error",
                text: "Please enter valid skill names",
            });
            return;
        }

        const skillData = { skills: skills };
        console.log("Sending skills:", skillData);

        setLoading(true);
        try {
            const response = await axios.post(
                "http://localhost:8000/skills/add-skills",
                skillData
            );
            console.log("(FE) Response Received:", response.data);

            setMessage({
                type: "success",
                text: `Successfully added ${skills.length} skill(s)!`,
            });

            // Reset form
            setSkillName("");
        } catch (error) {
            console.error("(FE) Error Occurred on Adding Skill:", error);
            setMessage({
                type: "error",
                text: error.response?.data?.message || "Failed to add skills",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full text-black bg-gradient-to-br from-gray-50 to-gray-100 flex justify-center items-center p-6">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        Add New Skill
                    </h1>
                    <p className="text-gray-600">
                        Enter the name of the skill/tool to add to your portfolio
                    </p>
                </div>

                {message.text && (
                    <div
                        className={`mb-6 p-4 rounded-lg ${message.type === "success"
                                ? "bg-green-50 text-green-800 border border-green-200"
                                : "bg-red-50 text-red-800 border border-red-200"
                            }`}
                    >
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Skill Name */}
                    <div>
                        <label
                            htmlFor="skillName"
                            className="block text-sm font-semibold text-gray-700 mb-2"
                        >
                            Skill / Tool Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="skillName"
                            name="skillName"
                            value={skillName}
                            onChange={(event) => setSkillName(event.target.value)}
                            placeholder="e.g., React, Python, Figma, Docker"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                            fill="none"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Adding Skill...
                                </span>
                            ) : (
                                "Add Skill"
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSkillName("");
                                setMessage({ type: "", text: "" });
                            }}
                            className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSkill;
