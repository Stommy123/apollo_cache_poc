import { Movie } from '../../models';
import { parseGenres } from '../../utilities';
import { movieData } from '../../data';

class MovieService {
  static getMovieById = _id => Movie.findById(_id);

  static getMovies = where => {
    const { title, director, genre, ...whereClause } = where;
    const parsedTitle = title && new RegExp(title.trim(), 'i');
    const parsedDirector = director && new RegExp(director.trim(), 'i');
    const variables = {
      ...whereClause,
      ...(parsedTitle && { parsedTitle }),
      ...(parsedDirector && { director: parsedDirector }),
      ...(genre && { genre: parseGenres(genre) }),
    };

    return Movie.find(variables).sort();
  };

  static getRandomMovie = async _ => {
    const [movie] = await Movie.aggregate([{ $sample: { size: 1 } }]);

    return movie;
  };

  static createMovie = async input => {
    const { genre, ...movieInput } = input;
    const newMovieData = { ...movieInput, ...(genre && { genre: parseGenres(genre) }) };

    return Movie.create(newMovieData);
  };

  static deleteMovie = async _id => {
    const { deletedCount } = (await Movie.deleteOne({ _id })) || {};
    const [success, status, message] =
      deletedCount === 1
        ? [true, 200, 'Movie successfully deleted']
        : [false, 500, 'Could not find movie to delete'];

    return { success, status, message };
  };

  static seedMovies = async _ => {
    try {
      await Movie.insertMany(movieData);
      return true;
    } catch (err) {
      console.log('error', err.message);
      return false;
    }
  };

  static deleteAll = async _ => {
    try {
      await Movie.deleteMany();
      return true;
    } catch (err) {
      console.log('error', err.message);
      return false;
    }
  };
}

export default MovieService;
