const Movie = require('../models/Movie.Model')
exports.createMovie = async (req,res) => {
  let request = req.body;
  const userData = {
    id : request.id,
    movie_name: request.movie_name,
    genre: request.genre,
    rating: request.rating,
    streaming_link: request.streaming_link
   }
   let alreadyCreated = await Movie.findOne({id: userData.id});
   if (alreadyCreated){
     return res.status(200).send({'message':'Movie already exists Only you can update this',"status":"200"});
   }
   const movie_data = await Movie(userData).save();
   return res.status(200).send({'message':'Movie Saved Sucessfully','data': movie_data,"status":"200"});
}

exports.searchMovie = async (req,res) => {
  let movie_name = req.query.title;
  let genre = req.query.genre;
  const searchData = {};
  if (movie_name) {
    searchData.movie_name = movie_name;
  }
  else if(genre){
    searchData.genre = genre;
  }
  let movie_data = await Movie.find(searchData);

  return res.status(200).send({'message': 'Movies Data', 'data': movie_data, "status": "200"})
}

exports.updateMovie = async (req,res) => {
  let movie_id = req.query.id;
  let request = req.body;
  if (movie_id) {
      let movie_data = await Movie.findOne({id: movie_id});
      movie_data.movie_name = req.body.movie_name ?? movie_data.movie_name;
      movie_data.genre = req.body.genre ?? movie_data.genre;
      movie_data.rating = req.body.rating ?? movie_data.rating;
      movie_data.streaming_link = req.body.streaming_link ?? movie_data.streaming_link;
      const updatedMovie = await Movie(movie_data).save();
      return res.status(200).send({'message':'Movie Updated Successfully','data': updatedMovie,"status":"200"})
    }
}

exports.deleteMovie = async (req,res) => {
  let movie_id = req.query.id;
  if (movie_id) {
    let movie_data = await Movie.deleteOne({id: movie_id});
    return res.status(200).send({'message':'Delete Successfully','data': movie_data,"status":"200"})
  }
  return res.status(200).send({'message':'Id mandatory for deleting movie'})
}