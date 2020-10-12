import React from 'react';
import { useMutation } from 'react-apollo';
import { CreateMovie } from '../../graphql/mutations';
import { NewMovie } from '../../pages';

export default props => {
  const [executeMutation] = useMutation(CreateMovie);

  return <NewMovie executeMutation={executeMutation} {...props} subheading='Default' />;
};
