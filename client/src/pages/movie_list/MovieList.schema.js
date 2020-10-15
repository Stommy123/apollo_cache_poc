import { GENRES } from '../../constants';

export const filterTypes = [
  {
    id: 'title',
    type: 'text',
    widget: 'input',
    label: 'Title',
    placeholder: 'title',
  },
  {
    id: 'year',
    type: 'number',
    widget: 'input',
    label: 'Year',
    placeholder: 'Year',
  },
  {
    id: 'genre',
    widget: 'select',
    label: 'Genre',
    placeholder: 'Genre',
    options: GENRES,
    isMulti: true,
  },
];
