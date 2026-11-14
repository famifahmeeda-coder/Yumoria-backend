const express = require("express")
const { protect } = require("../middlewares/authMiddleware")

const router = express.Router()

const {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile
} = require("../controllers/userController")


router.post("/register", registerUser)


router.post("/login", loginUser)
router.get("/profile", protect, getUserProfile)

router.put("/profile", protect, updateUserProfile)

module.exports = router
