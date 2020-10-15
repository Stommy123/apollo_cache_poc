import { MovieService } from '../services';

const Query = {
  movie: (_, { _id }) => MovieService.getMovieById(_id),
  movies: (_, { where = {} }) => MovieService.getMovies(where),
  randomMovie: _ => MovieService.getRandomMovie(),
};

const Mutation = {
  createMovie: (_, { input }) => MovieService.createMovie(input),
  createMovieDelayed: (_, { input }) => MovieService.createMovieDelayed(input),
  deleteMovie: (_, { _id }) => MovieService.deleteMovie(_id),
  seedMovies: _ => MovieService.seedMovies(),
  deleteAll: _ => MovieService.deleteAll(),
};

export default { Query, Mutation };
