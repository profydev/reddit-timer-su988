import React from 'react';
import styled from 'styled-components';
import { days } from '../utils/constants';

const Days = styled.div`
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

function HeatmapDays() {
  const dayUi = days.map((day) => <SpanD>{day}</SpanD>);
  return (
    <>
      <Days>{dayUi}</Days>
    </>
  );
}

export default HeatmapDays;
