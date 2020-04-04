import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase';
import Button from '../../components/UI/Forms/Button/Button';

import Heading from '../../components/UI/Heading/Heading';
import { Container } from '../../hoc/layouts/elements';
import InputTodo from './InputTodo/InputTodo';
import Loader from '../../components/UI/Loader/Loader';
import Todo from './Todo/Todo';

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
  display: flex;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  align-items: center;
  max-width: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding-right: 40px;
  object-fit: contain;
`;

const ContentWrapper = styled.div`
  align-items: center;
  object-fit: contain;
  object-fit: cover;
  
`;

const Todos = ({ todos, requested, userId }) => {
  const [isAdding, setisAdding] = useState(false);
  let content;
  if (!todos) {
    content = (
      <Content>
        <Loader isWhite />
      </Content>
    );
  } else if (!todos[userId] || !todos[userId].todos) {
    content = (
      <Content>
        <Heading color='white' size='h2'>
          You have no todos!
        </Heading>
      </Content>
    );
  } else if (todos[userId].todos.length === 0) {
    content = (
      <Content>
        <Heading color='white' size='h2'>
          You have no todos!
        </Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {todos[userId].todos
          .slice(0)
          .reverse()
          .map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
      </Content>
    );
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size='h1' color='white'>
            Your Todos
          </Heading>
          <Heading bold size='h4' color='white'>
            All you have to do for now...
          </Heading>
          <Button color='main' contain onClick={() => setisAdding(true)}>
            Add Todo
          </Button>
          <InputTodo opened={isAdding} close={() => setisAdding(false)} />
        </InnerWrapper>
        <ContentWrapper>{content}</ContentWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  todos: firestore.data.todos,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [`todos/${props.userId}`])
)(Todos);
