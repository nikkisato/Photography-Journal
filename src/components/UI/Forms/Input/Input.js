import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 3rem;

  &::last-of-type {
    margin-bottom: 4.5rem;
  }
`;

const StyledInput = styled.input`
  padding: 1rem 2rem;
  background-color: var(--color-mainLight);
  color: var(--color-white);
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 2rem;
  border: none;
  width: 100%;

  &::placeholder {
    color: var(--color-white);
  }
`;

const Error = styled.div`
  padding: 0rem 2rem;
  color: var(--color-redError);
  visibility: ${({ show }) => (show ? 'visibile' : 'hidden')};
  opacity: ${({ show }) => (show ? '1' : '0')};
  transform: translateY(${({ show }) => (show ? '20px' : '10px')});
  transition: all 0.1s;
  position: absolute;
  bottom: 0;
  left: 0%;
  font-weight: 500;
  font-size: 1.2rem;
`;
const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export default Input;
