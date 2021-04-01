import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  text-align: center;
  margin-top: 50px;
`;

const Title = styled.h1`
  font-family: 'Bitter', serif;
  font-weight: normal;
  font-size: 38px;
  letter-spacing: 1px;
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
`;

const StyledSub = styled.p`
  margin-top: 45px;
  color: #93918f;
`;

function Hero() {
  return (
    <Section>
      <Title>No reactions to your reddit posts?</Title>
      <Subtitle>
        Great timimg, great results! Find the best time to post on your
        subreddit.
      </Subtitle>
      <Button type="submit">Show me the best time</Button>
      <StyledSub>r/javascript</StyledSub>
    </Section>
  );
}

export default Hero;
