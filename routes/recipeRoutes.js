
const express = require("express")
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router()

const {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} = require("../controllers/recipeController")


router.get("/", getRecipes)


router.get("/:id", getRecipeById)

router.post("/", protect, createRecipe)

router.put("/:id", protect, updateRecipe)

router.delete("/:id", protect, deleteRecipe)

module.exports = router
