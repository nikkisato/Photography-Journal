import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Message from '../../../components/UI/Message/Message';
import { FormWrapper, StyledForm } from '../../../hoc/layouts/elements';
import Heading from '../../../components/UI/Heading/Heading';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.')
});
const RecoverPassword = ({ loading, sendEmail, error }) => {
  return (
    <>
      <Formik
        initialValues={{
          email: ''
        }}
        validationSchema={RecoverSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await sendEmail(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid, loading, error }) => (
          <FormWrapper>
            <Heading noMargin size='h1' color='white'>
              Recover your password
            </Heading>
            <Heading size='h4' bold color='white'>
              Type in your e-mail to recover your password
            </Heading>
            <StyledForm>
              <Field
                type='email'
                name='email'
                placeholder='type out your email'
                component={Input}
              />
              <Button
                loading={loading ? 'Sending recover email' : null}
                disabled={!isValid || isSubmitting}
                type='submit'
              >
                Recover Email
              </Button>
              <MessageWrapper>
                <Message show={error}>{error}</Message>
              </MessageWrapper>
              <MessageWrapper>
                <Message success show={error === false}>
                  Recover email sent successfully!
                </Message>
              </MessageWrapper>
            </StyledForm>
          </FormWrapper>
        )}
      </Formik>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.recoverPassword.loading,
  error: auth.recoverPassword.error
});

const mapDispatchToProps = {
  sendEmail: actions.recoverPassword
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverPassword);
