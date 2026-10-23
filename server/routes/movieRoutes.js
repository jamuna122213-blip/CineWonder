const express=require("express")
const Movie = require("../models/Movie")

const router = express.Router()

router.get("/",async (req,res) => {
    try{
        const movies = await Movie.find()
        res.json(movies)
        
    }
    catch(error) {
      res.status(500).json({message:"Failed to fetch Movie",
        error:error.message
      })
    }
})


module.exports = router