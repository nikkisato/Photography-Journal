import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  color: var(--color-white);
  font-size: 2rem;
  padding: 2rem;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
`;

const Logo = () => {
  return <LogoWrapper>Travel Journal</LogoWrapper>;
};

export default Logo;
