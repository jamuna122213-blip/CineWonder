const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        default:""
    },
    videoId:{
        type:String,
        default:""
    },
    videoUrl:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Movie",movieSchema)

