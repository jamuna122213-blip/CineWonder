const express=require("express")
const dotenv=require("dotenv")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const movieRoutes = require("./routes/movieRoutes")
const authRoutes = require("./routes/authRoutes")

const connectDB=require("./config/db")

dotenv.config()

const app = express()

app.use(cors({
    origin:[
        "http://localhost:5173",
    "https://cine-wonder.vercel.app"
],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use("/api/movies",movieRoutes)
app.use("/api/auth",authRoutes)

app.get("/",(req,res)=>{
    res.send("Cinewonder backend is running")
})


const PORT = process.env.PORT || 5000


async function startServer() {
    await connectDB();

    app.listen(PORT,()=>{
        console.log(`Server running at http://localhost:${PORT}`)
    })
}

startServer()