import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  width: 100%;
  max-width: 140rem;
  height: 100%;
  margin: 0 auto;
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 50rem;
  border-radius: 1rem;
  padding: 10rem 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-mainDark);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  justify-content: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  align-items: center;
`;
