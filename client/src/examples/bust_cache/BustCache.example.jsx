import React from 'react';
import { useMutation } from 'react-apollo';
import { CreateMovie } from '../../graphql/mutations';
import { NewMovie } from '../../pages';

export default props => {
  const [executeMutation] = useMutation(CreateMovie, {
    update: cache => {
      const cacheKeys = Object.keys(cache.data.data);

      cacheKeys.forEach(key => key.includes('movies') && cache.data.delete(key));
    },
  });

  return <NewMovie executeMutation={executeMutation} {...props} subheading='Bust Cache' />;
};
