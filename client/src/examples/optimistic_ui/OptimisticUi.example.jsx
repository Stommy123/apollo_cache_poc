import React from 'react';
import { useMutation, useApolloClient } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { CreateMovieDelayed } from '../../graphql/mutations';
import { NewMovie } from '../../pages';

export default props => {
  const client = useApolloClient();

  const [executeMutation] = useMutation(CreateMovieDelayed, {
    optimisticResponse: {
      createMovieDelayed: {
        director: 'John Buck',
        duration: '2h15min',
        genre: ['Fantasy'],
        rate: null,
        title: 'Frozen',
        year: '2013',
        _id: Date.now(),
      },
    },
    update: (_, { data }) => {
      const newMovie = data.createMovieDelayed;

      const readQueryResult = client.readQuery(
        { query: FetchMovies, variables: { where: {} } },
        true
      );

      client.writeQuery({
        query: FetchMovies,
        variables: { where: {} },
        data: { movies: [...readQueryResult.movies, newMovie] },
      });
    },
  });

  return <NewMovie executeMutation={executeMutation} {...props} subheading='Write Query' />;
};
