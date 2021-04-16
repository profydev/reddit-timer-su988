import React from 'react';
import styled from 'styled-components';
import { hours } from '../utils/constants';

const Div = styled.div`
  min-width: 154px;
  min-height: 52px;
  background-color: #fff;
`;

const Title = styled.div`
  display: flex;
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

function HeatmapHours() {
  const timeUi = hours.map((hour) => <SpanH>{hour}</SpanH>);
  return (
    <>
      <Title>
        <Div />
        <Hours>{timeUi}</Hours>
      </Title>
    </>
  );
}

export default HeatmapHours;
