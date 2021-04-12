import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  max-width: 740px;
  margin: auto;
  margin-bottom: 95px;
  padding-top: 25px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Article = styled.article`
  margin-top: 105px;
`;

const List = styled.ul`
  color: #93918f;
  line-height: 27px;
  margin-top: -15px;
  margin-left: -35px;
  list-style: none;
`;

const ListItem = styled.li`
  &:before {
    content: '.';
    position: relative;
    top: -4px;
    right: 8px;
    font-size: 24px;
  }
`;

const About = styled.p`
  line-height: 27px;
  margin-top: -10px;
`;

const Href = styled.a`
  text-decoration: none;
  color: #0186ff;
`;

function Info() {
  return (
    <Section>
      <Article>
        <Title id="how-it-works">How it works</Title>
        <List>
          <ListItem>
            We find the 500 top posts from the past year for a subreddit.
          </ListItem>
          <ListItem>
            The data is visualized in a heatmap grouped by weekday and hour of
            the day.
          </ListItem>
          <ListItem>See immediately when to submit your reddit post.</ListItem>
        </List>
      </Article>
      <Article>
        <Title id="about">About</Title>
        <About>
          This app was created during a course on
          <Href href="https://profy.dev"> profy.dev </Href>
          with the goal to implement a pixel-perfect real-world application with
          professional workflows and tools like Kanban, ClickUp, Figma, GitHub,
          pull requests and code reviews.
          <Href href="https://profy.dev/employers">
            {' '}
            Click here for more information.
          </Href>
        </About>
      </Article>
    </Section>
  );
}

export default Info;
