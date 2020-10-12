import React from 'react';
import { useMutation } from 'react-apollo';
import { FetchMovies } from '../../graphql/queries';
import { CreateMovie } from '../../graphql/mutations';
import { NewMovie } from '../../pages';

export default props => {
  const [executeMutation] = useMutation(CreateMovie, {
    refetchQueries: [{ query: FetchMovies, variables: { where: {} } }],
    awaitRefetchQueries: true,
  });

  return <NewMovie executeMutation={executeMutation} {...props} subheading='Refetch Queries' />;
};
