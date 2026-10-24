require("dotenv").config()

const mongoose = require("mongoose");
const Movie = require("./models/Movie")



async function seedMovies(){
    try {
        await mongoose.connect(process.env.MONGO_URI)

        await Movie.deleteMany({})
        await Movie.insertMany(movies)

        console.log("sample movie added successfully")
    }
    catch (error){
        console.log("Seeding Failed",error.message);
    }
    finally{
        await mongoose.disconnect()
    }
}

seedMovies()
