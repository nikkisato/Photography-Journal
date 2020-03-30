import React, { useEffect } from 'react';

import { FormWrapper } from '../../../hoc/layouts/elements';
import Heading from '../../../components/UI/Heading/Heading';
import Button from '../../../components/UI/Forms/Button/Button';
import * as actions from '../../../store/actions';
import { connect } from 'react-redux';
import Message from '../../../components/UI/Message/Message';
import styled from 'styled-components';

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const VerifyEmail = ({ sendVerification, error, loading, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);
  return (
    <>
      <FormWrapper>
        <Wrapper>
          <Heading noMargin color='white' size='h1'>
            Verify your email
          </Heading>
          <Heading color='white' bold size='h4'>
            Go to your email inbox, and please verify your email.
          </Heading>

          <Button
            disabled={loading}
            loading={loading ? 'Sending Email' : null}
            onClick={() => sendVerification()}
          >
            Re-send Verification Email
          </Button>
          <MessageWrapper>
            <Message show={error}>{error}</Message>
          </MessageWrapper>
          <MessageWrapper>
            <Message success show={error === false}>
              Message sent successfully!
            </Message>
          </MessageWrapper>
        </Wrapper>
      </FormWrapper>
    </>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.verifyEmail.loading,
  error: auth.verifyEmail.error
});

const mapDispatchToProps = {
  sendVerification: actions.verifyEmail,
  cleanUp: actions.clean
};

export default connect(mapStateToProps, mapDispatchToProps)(VerifyEmail);
