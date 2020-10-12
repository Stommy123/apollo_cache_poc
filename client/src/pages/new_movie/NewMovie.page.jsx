import React from 'react';
import { Form, SectionWrapper } from '../../components';
import { schema } from './NewMovie.schema';

const NewMovie = ({ history, executeMutation, subheading = 'Default' }) => {
  const handleSubmit = async ({ genre, ...inputData }) => {
    try {
      const parsedGenres = genre && genre.map(({ value }) => value);
      const input = {
        ...inputData,
        ...(parsedGenres && { genre: parsedGenres }),
        duration: '2h15min',
      };
      await executeMutation({ variables: { input } });
      // history.push('/');
    } catch (e) {
      console.log('error creating new movie', e);
    }
  };

  return (
    <SectionWrapper columnDefs='col-md-6 col-md-offset-3'>
      <Form schema={schema} subheading={subheading} handleSubmit={handleSubmit} />
    </SectionWrapper>
  );
};

export default NewMovie;
