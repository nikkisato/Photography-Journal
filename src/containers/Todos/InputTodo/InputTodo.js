import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Heading/Heading';
import Modal from '../../../components/UI/Modal/Modal';
import Input from '../../../components/UI/Forms/Input/Input';
import Message from '../../../components/UI/Message/Message';
import { StyledForm } from '../../../hoc/layouts/elements';

import * as actions from '../../../store/actions';

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const TodoSchema = Yup.object().shape({
  todo: Yup.string()
    .required('The todo is required.')
    .min(4, 'Too short.')
});

const InputTodo = ({
  editTodo,
  close,
  opened,
  addTodo,
  loading,
  error,
  editTodoAction
}) => {
  const loadingText = editTodo ? 'Editing...' : 'Adding...';

  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading noMargin size='h1' color='white'>
          {editTodo ? 'Edit your Journey' : 'Add your new Journey'}
        </Heading>
        <Heading bold size='h4' color='white'>
          {editTodo
            ? 'Edit your Journey and tap edit'
            : 'Type your Journey and press add'}
        </Heading>
        <Formik
          initialValues={{
            todo: editTodo ? editTodo.todo : '',
            website: editTodo ? editTodo.website : '',
            notes: editTodo ? editTodo.notes : '',
            location: editTodo ? editTodo.location : '',
            source: editTodo ? editTodo.source : '',
          }}
          validationSchema={TodoSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const res = editTodo
              ? await editTodoAction(editTodo.id, values)
              : await addTodo(values);
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <Field
                type='text'
                name='todo'
                placeholder='Write your todo...'
                component={Input}
              />
              <Field
                type='url'
                name='website'
                placeholder='Image URL'
                component={Input}
              />
              <Field
                type='text'
                name='location'
                placeholder='Location'
                component={Input}
              />
              <Field
                type='text'
                name='notes'
                placeholder='Notes... example:ISO'
                component={Input}
              />

<Field
                type='url'
                name='source'
                placeholder='Source'
                component={Input}
              />
              <ButtonsWrapper>
                <Button
                  contain
                  color='main'
                  type='submit'
                  disabled={!isValid || isSubmitting}
                  loading={loading ? loadingText : null}
                >
                  {editTodo ? 'Edit Journey' : 'Add Journey'}
                </Button>
                <Button
                  type='button'
                  color='main'
                  contain
                  onClick={() => {
                    close();
                    resetForm();
                  }}
                >
                  Cancel
                </Button>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ todos }, ownProps) => ({
  loading: todos.loading,
  error: todos.error
});

const mapDispatchToProps = {
  addTodo: actions.addTodo,
  editTodoAction: actions.editTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(InputTodo);
