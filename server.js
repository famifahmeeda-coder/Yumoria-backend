const express = require("express")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const recipeRoutes = require("./routes/recipeRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config()

const app = express()


connectDB()

app.use(express.json())
app.use("/api/recipes",recipeRoutes)
app.use("/api/users", userRoutes)

app.get("/", (req, res) => {
    res.send("Welcome to Yumoria Backend!")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})