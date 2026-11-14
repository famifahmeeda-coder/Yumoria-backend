
const mongoose = require("mongoose")

const recipeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true
        },

        ingredients: {
            type: [String],
            required: true
        },

        instructions: {
            type: [String],
            required: true
        },

        cuisine: {
            type: String,
            required: true
        },

        diet: {
            type: String,
            required: true
        },

        difficulty: {
            type: String,
            enum: ["Easy", "Medium", "Hard"],
            required: true
        },

        cookingTime: {
            type: Number,
            required: true
        },

        image: {
            type: String,
            default: ""
        },

        ratings: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                    required: true
                },
                value: {
                    type: Number,
                    required: true,
                    min: 1,
                    max: 5
                }
            }
        ],

        rating: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)


const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe
