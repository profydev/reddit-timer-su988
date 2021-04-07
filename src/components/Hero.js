import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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

const Subtitle = styled.p`
  color: #93918f;
`;

const Button = styled.button`
  width: 217px;
  height: 36px;
  border-radius: 4px;
  border: none;
  background-color: #fdb755;
  color: #fff;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 0.5px;
  margin-top: 30px;
  cursor: pointer;
`;

const StyledSub = styled.p`
  margin-top: 45px;
  color: #93918f;
`;

const Img = styled.img`
  margin-top: 20px;
`;

function Hero() {
  return (
    <Section>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timimg, great results! Find the best time to post on your
        subreddit.
      </Subtitle>
      <Link to="/search/javascript">
        <Button type="submit">Show me the best time</Button>
      </Link>
      <StyledSub>r/javascript</StyledSub>
      <Link to="/search/javascript">
        <Img src="/table.svg" alt="Table" />
      </Link>
    </Section>
  );
}

export default Hero;
