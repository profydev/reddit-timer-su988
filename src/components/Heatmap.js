/* eslint react/prop-types: 0 */
import React from 'react';
import styled from 'styled-components';
// import PropTypes from 'prop-types';
import HeatmapHours from './HeatmapHours';
import HeatmapDays from './HeatmapDays';
import HeatmapTiles from './HeatmapTiles';

const Main = styled.main`
  max-width: 1115px;
  margin: 0 auto;
  margin-top: 57px;
`;

const Div = styled.div`
  display: flex;
  max-height: 280px;
`;

const Tiles = styled.div`
  flex: 1;
`;

function Heatmap({ posts }) {
  console.log(posts);

  // posts.forEach(day => day.forEach(hour => ))

  return (
    <Main>
      <HeatmapHours />
      <Div>
        <HeatmapDays />
        <Tiles>
          <HeatmapTiles />
        </Tiles>
      </Div>
    </Main>
  );
}

// Heatmap.propTypes = {
//   posts: PropTypes.array,
// };

export default Heatmap;
