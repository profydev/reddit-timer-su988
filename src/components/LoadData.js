/* eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }] */
import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import useFetchData from '../hooks/useFetchData';

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

function LoadData() {
  const { slug } = useParams();
  const { loading, error, posts } = useFetchData(slug);

  return (
    <>
      {loading && <Img src="/loading_spinner.svg" alt="Logo" />}
      {!loading && posts.length}
      {error}
    </>
  );
}

export default LoadData;
