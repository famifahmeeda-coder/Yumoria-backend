
const Recipe = require("../models/Recipe")

const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find()

        res.status(200).json({
            success: true,
            count: recipes.length,
            data: recipes
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const getRecipeById = async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id)

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            })
        }

        res.status(200).json({
            success: true,
            data: recipe
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const createRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.create(req.body)

        res.status(201).json({
            success: true,
            message: "Recipe created successfully",
            data: recipe
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const updateRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Recipe updated successfully",
            data: recipe
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const deleteRecipe = async (req, res) => {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id)

        if (!recipe) {
            return res.status(404).json({
                success: false,
                message: "Recipe not found"
            })
        }

        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
}
