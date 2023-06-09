import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../store/index';
import { setField, setError } from '../store/employeeFormStateSlice';

/**
 * `InputFieldProps` is an interface for the InputField component props.
 * @interface
 * @property {string} label - The label of the input field.
 * @property {string} name - The name of the input field.
 * @property {'text' | 'number'} type - The type of the input field.
 * @property {string} error - The error message for the input field.
 */
export interface InputFieldProps {
  label?: string;
  name: string;
  type?: 'text' | 'number';
  error?: string;
}

/**
 * `InputField` is a functional React component.
 * It renders an input field with a label and optional error message.
 * @component
 * @returns {JSX.Element} The rendered InputField component.
 */
export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  error,
  type = 'text',
}) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) =>
    state.employeeFormState.formValues[name]?.toString(),
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    if (type === 'text') {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    dispatch(setField({ name: name, value }));
    dispatch(setError({ name: name, message: '' }));
  };

  const isFirstNameOrLastName = name === 'firstname' || name === 'lastname';

  const inputComponent = (
    <input
      id={name}
      name={name}
      type={type}
      value={inputValue}
      onChange={handleInputChange}
      className={`inputFormEmployee ${error ? 'errorBorder' : ''}`}
    />
  );
  const inputElement = (
    <div className="form-item">
      {inputComponent}
      <label className={inputValue ? 'up' : ''} htmlFor={name}>
        {' '}
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {error ? (
        <p className="errorMessage" data-testid={`error-${name}`}>
          {error}
        </p>
      ) : (
        ''
      )}
    </div>
  );

  return isFirstNameOrLastName ? (
    <div
      key={name}
      className="box_input"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {inputElement}
    </div>
  ) : (
    inputElement
  );
};
