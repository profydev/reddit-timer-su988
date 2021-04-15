/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';

const Article = styled.article`
  max-width: 1115px;
  margin: 0 auto;
  margin-top: 55px;
`;

const Title = styled.div`
  display: flex;
`;

const Div = styled.div`
  min-width: 154px;
  min-height: 52px;
  background-color: #fff;
`;

const Hours = styled.div`
  height: 52px;
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(180deg, #fefefe 0%, #e9e9e9 100%);
  border: 1px solid #f3f3f3;
`;

const SpanH = styled.span`
  color: #787878;
  font-size: 14px;
`;

const Main = styled.div`
  display: flex;
`;

const Days = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  min-width: 154px;
  background-color: #1e2537;
  padding-top: 10px;
`;

const SpanD = styled.span`
  color: #fff;
  min-height: 40px;
  font-weight: 600;
  font-size: 15px;
`;

const Tiles = styled.div`
  background-color: black;
  flex: 1;
`;

function Heatmap({ posts }) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const hours = [
    '12:00am',
    '2:00am',
    '4:00am',
    '6:00am',
    '8:00am',
    '10:00am',
    '12:00pm',
    '2:00pm',
    '4:00pm',
    '6:00pm',
    '8:00pm',
    '10:00pm',
  ];

  const timeUi = hours.map((hour) => <SpanH>{hour}</SpanH>);
  const dayUi = days.map((day) => <SpanD>{day}</SpanD>);
  console.log(posts);
  // posts.forEach(day => day.forEach(hour => ))

  return (
    <Article>
      <Title>
        <Div />
        <Hours>{timeUi}</Hours>
      </Title>
      <Main>
        <Days>{dayUi}</Days>
        <Tiles />
      </Main>
    </Article>
  );
}

// Heatmap.propTypes = {
//   posts: PropTypes.array,
// };

export default Heatmap;
