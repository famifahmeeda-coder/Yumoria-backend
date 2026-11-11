const express = require("express")

const router = express.Router()

const { generateRecipeSuggestions } = require("../controllers/aiController")

const { protect } = require("../middlewares/authMiddleware")

router.post("/suggestions", protect, generateRecipeSuggestions)

module.exports = router