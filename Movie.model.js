const mongoose = require('mongoose')
const {Schema} = mongoose

const MovieSchema = new Schema({
    id : String,
    movie_name : String,
    genre : String,
    rating : String,
    streaming_link : String
})

module.exports = mongoose.model('Movie', MovieSchema, 'Movie');
