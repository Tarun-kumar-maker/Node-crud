const MovieController = require('../controllers/Movie.controller')
const express = require('express')
const userRoute = express.Router()

userRoute.get('/movies', MovieController.searchMovie)
userRoute.get('/search', MovieController.searchMovie)
userRoute.post('/movies', MovieController.createMovie)
userRoute.post('/movies/update', MovieController.updateMovie)
userRoute.post('/movies/delete', MovieController.deleteMovie)


module.exports = userRoute

