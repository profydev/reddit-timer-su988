/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #fdb755;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  cursor: pointer;
  padding: ${(props) => props.padding};
`;

function Button({ text, padding }) {
  return (
    <>
      <Btn type="submit" padding={padding}>
        {text}
      </Btn>
    </>
  );
}

export default Button;
