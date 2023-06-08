import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './../store/index';
import { setField, setError } from '../store/newEmployeeEntreeSlice';
import { useInputChange } from '../utils/useInputChange';

interface InputFieldProps {
  label?: string;
  name: string;
  type?: 'text' | 'number';
  error?: string;
  isWrapped?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  error,
  type = 'text',
  isWrapped = false,
}) => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state: RootState) =>
    state.newEmployeeEntree[name]?.toString(),
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;

    if (type === 'text') {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }

    dispatch(setField({ name, value }));
    dispatch(setError({ name, message: '' }));
  };

  const isFirstNameOrLastName = name === 'firstname' || name === 'lastname';

  const inputComponent = (
    <input
            id={name}
            name={name}
            type={type}
            value={inputValue}
            onChange={handleInputChange}
            className={error ? 'errorBorder' : ''}
          />
    )
  const inputElement = (
    <>
      <label htmlFor={name}>
        {label ? label : name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      {isWrapped ? (
        <div style={{ position: 'relative' }}>
          {inputComponent}
          {error ? (
            <p className="errorMessage" data-testid={`error-${name}`}>
              {error}
            </p>
          ) : (
            ''
          )}
        </div>
      ) : (
        inputComponent
      )}
    </>
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