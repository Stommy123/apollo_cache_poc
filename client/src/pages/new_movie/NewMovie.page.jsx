import React from 'react';
import { toast } from 'react-toastify';
import { Form, SectionWrapper } from '../../components';
import { schema } from './NewMovie.schema';

const NewMovie = ({ executeMutation, subheading = 'Default' }) => {
  const handleSubmit = async ({ genre, ...inputData }) => {
    try {
      const parsedGenres = genre && genre.map(({ value }) => value);
      const input = {
        ...inputData,
        ...(parsedGenres && { genre: parsedGenres }),
        duration: '2h15min',
      };
      await executeMutation({ variables: { input } });

      toast.info('Movie created!');
    } catch (e) {
      console.log('error creating new movie', e);
      toast.error('Failed to create movie');
    }
  };

  return (
    <SectionWrapper columnDefs='col-md-6 col-md-offset-3'>
      <Form schema={schema} subheading={subheading} handleSubmit={handleSubmit} />
    </SectionWrapper>
  );
};

export default NewMovie;
