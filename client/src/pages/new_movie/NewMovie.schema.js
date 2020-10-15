import { GENRES } from '../../constants';

export const schema = {
  id: 'movieForm',
  formHeading: 'Add a new movie!',
  submitText: 'Submit!',
  fields: [
    {
      label: 'Title',
      type: 'text',
      id: 'title',
      placeholder: 'title',
      widget: 'input',
      required: true,
      defaultValue: 'Frozen',
    },
    {
      label: 'Director',
      type: 'text',
      id: 'director',
      placeholder: 'Director',
      widget: 'input',
      required: true,
      defaultValue: 'John Buck',
    },
    {
      id: 'genre',
      label: 'Genre',
      type: 'text',
      isMulti: true,
      placeholder: 'Genre',
      widget: 'select',
      required: true,
      options: GENRES,
      defaultValue: [{ value: 'FANTASY', label: 'Fantasy' }],
    },
    {
      label: 'Year',
      type: 'number',
      id: 'year',
      placeholder: 'Year',
      widget: 'input',
      required: true,
      defaultValue: '2013',
    },
  ],
};
