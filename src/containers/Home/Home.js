import React from 'react';
import styled from 'styled-components';
import Heading from '../../components/UI/Heading/Heading';
import { Container } from '../../hoc/layouts/elements';
import { Link } from 'react-router-dom';
import Italy from '../../assets/catania,Italy.png';
import France from '../../assets/carnoet,France.png';
import Germany from '../../assets/Bastei,Germany.png';
import China from '../../assets/Chifeng, China.png';

const Wrapper = styled.div`
  width: 100%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
  display: flex;
  text-align: center;
`;

const IMG = styled.img`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
  width: 100%;
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  @media only screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, 1fr);
  }
  @media only screen and (min-width: 601px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  @media only screen and (min-width: 1000px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(1, 1fr);
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const StyledButton = styled.button`
  width: auto;
  outline: none;
  padding: 1.2rem 5rem;
  border-radius: 2rem;
  font-size: 1.2rem;
  color: var(--color-white);
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin: 1.5rem 0 2rem 0;
  border: none;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-3px);
    color: var(--color-white);
  }
  &:active {
    transform: translateY(2px);
    color: var(--color-white);
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size='h1' color='white'>
            Always want to keep track of where you want to visit in the world??
          </Heading>
          <Heading bold size='h4' color='white'>
            Places you want to visit
          </Heading>

          <ImageWrapper>
            <IMG alt='screenshot' src={Italy}></IMG>
            <IMG alt='screenshot' src={France}></IMG>
            <IMG alt='screenshot' src={China}></IMG>
            <IMG alt='screenshot' src={Germany}></IMG>
          </ImageWrapper>

          <Heading size='h4' color='white'>
            As an aspiring photographer, I always have love seeing travel photos
            from around the world but often lose track of them. Created this
            website to keep track of my photos that I would love to take in the
            future!
          </Heading>
          <Heading size='h4' color='white'>
            Ready to start your Photography Journal?
          </Heading>

          <Link to='/login'>
            <StyledButton>Go to Login </StyledButton>
          </Link>
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

export default Home;
