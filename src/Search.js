import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';

const Section = styled.section`
  text-align: center;
  margin-top: 51px;
`;

const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-weight: normal;
  font-size: 38px;
  letter-spacing: 0.8px;
`;

const Form = styled.form`
  margin-top: 30px;
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

const Button = styled.button`
  width: 92px;
  height: 36px;
  font-size: 14px;
  text-transform: uppercase;
  color: #fff;
  background-color: #fdb755;
  border: none;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }
`;

function Search() {
  const { slug } = useParams();
  const [query, setQuery] = useState(slug);
  const history = useHistory();

  useEffect(() => {
    setQuery(slug);
  }, [slug]);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
  };

  return (
    <Section>
      <Title>Find the best time for a subreddit</Title>
      <Form onSubmit={handleSubmit}>
        <Span>r /</Span>
        <Input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <Button>Search</Button>
      </Form>
    </Section>
  );
}

export default Search;
