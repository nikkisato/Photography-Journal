import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  color: var(--color-white);
  font-size: 1.2rem;
  padding: 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Logo = () => {
  return <LogoWrapper>Photography Journal</LogoWrapper>;
};

export default Logo;
