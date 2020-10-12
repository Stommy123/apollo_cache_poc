import React, { useReducer, useMemo } from 'react';
import { FormGroup } from '..';
import { isString, stateReducer } from '../../utilities';

const Form = ({
  className,
  schema: { id, fields = [], formHeading, submitText } = {},
  subheading,
  handleSubmit,
}) => {
  const initialState = useMemo(
    _ =>
      fields.reduce((acc, field) => {
        acc[field.id] = field.defaultValue || (field.multiSelect ? [] : String());
        return acc;
      }, {}),
    [fields]
  );

  const [state, setState] = useReducer(stateReducer, initialState);

  const handleInputChange = ({ id, value }) => setState({ [id]: value });

  const onSubmit = e => {
    e.preventDefault();
    const formData = Object.keys(state).reduce((acc, id) => {
      const value = state[id];
      state[id] && Object.assign(acc, { [id]: isString(value) ? value.trim() : value });
      return acc;
    }, {});
    handleSubmit(formData);
    setState(initialState);
  };

  return (
    <form className={className} onSubmit={onSubmit} id={id}>
      <h1 className='display-4 m-b-2'>
        {formHeading} - {subheading}
      </h1>
      {fields.map(field => (
        <FormGroup key={field.id} {...field} onChange={handleInputChange} value={state[field.id]} />
      ))}
      <button className='btn btn-primary' type='submit'>
        {submitText}
      </button>
    </form>
  );
};

export default Form;
