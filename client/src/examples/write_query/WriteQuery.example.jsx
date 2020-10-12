import React from 'react';
import { useMutation, useApolloClient } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { CreateMovie } from '../../graphql/mutations';
import { NewMovie } from '../../pages';

export default props => {
  const client = useApolloClient();

  const [executeMutation] = useMutation(CreateMovie, {
    update: (_, { data }) => {
      const newMovie = data.createMovie;

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
