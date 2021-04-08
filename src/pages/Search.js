import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const Section = styled.section`
  text-align: center;
  min-height: calc(100vh - 251px);
`;

const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-weight: normal;
  font-size: 38px;
  letter-spacing: 0.8px;
`;

function Search() {
  const { slug } = useParams();
  const [query, setQuery] = useState(slug);

  useEffect(() => {
    setQuery(slug);
  }, [slug]);

  return (
    <Section>
      <Title>Find the best time for a subreddit</Title>
      <SearchForm query={query} setQuery={setQuery} />
    </Section>
  );
}

export default Search;
