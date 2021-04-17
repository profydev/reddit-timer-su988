import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const Img = styled.img`
  margin-top: 50px;
  animation: ${rotate} 1.5s infinite linear;
`;

function LoadingSpinner() {
  return (
    <>
      <Img src="/loading_spinner.svg" alt="Logo" />
    </>
  );
}

export default LoadingSpinner;
