import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm';

const Section = styled.section`
  text-align: center;
  min-height: calc(100vh - 251px);
`;

function Search() {
  const { slug } = useParams();
  const [query, setQuery] = useState(slug);

  useEffect(() => {
    setQuery(slug);
  }, [slug]);

  return (
    <Section>
      <h1>Find the best time for a subreddit</h1>
      <SearchForm query={query} setQuery={setQuery} />
    </Section>
  );
}

export default Search;
