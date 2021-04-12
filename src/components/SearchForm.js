/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import Button from './Button';

const Form = styled.form`
  margin-top: 30px;
  margin-left: -2px;
`;

const Span = styled.span`
  font-size: 18px;
  color: #9e9e9e;
`;

const Input = styled.input`
  width: 350px;
  height: 36px;
  margin: 0 10px;
  padding-left: 15px;
  background: #ffffff;
  border: 1px solid #e6e6e6;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0.8px;
`;

function SearchForm({ query, setQuery }) {
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Span>r /</Span>
        <Input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button text="Search" padding="12px" />
      </Form>
    </>
  );
}

export default SearchForm;
