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
      ...(parsedTitle && { title: parsedTitle }),
      ...(parsedDirector && { director: parsedDirector }),
      ...(genre && { genre: parseGenres(genre) }),
    };

    return Movie.find(variables);
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

  static createMovieDelayed = async input => {
    const simulateWait = _ => new Promise(resolve => setTimeout(resolve, 3000));

    await simulateWait();

    return MovieService.createMovie(input);
  };

  static deleteMovie = async title => {
    const { deletedCount } = (await Movie.deleteOne({ title })) || {};
    const [success, message] =
      deletedCount === 1
        ? [true, 'Movie successfully deleted']
        : [false, 'Could not find movie to delete'];

    return { success, message };
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
