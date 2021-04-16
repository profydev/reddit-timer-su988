import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import HeatmapHours from './HeatmapHours';
import HeatmapDays from './HeatmapDays';
import HeatmapTile from './HeatmapTile';

function Heatmap({ posts }) {
  const [selected, setSelected] = useState();

  const rows = posts.map((days, i) => {
    const columns = days.map((hours, j) => (
      <HeatmapTile
        key={uuidv4()}
        posts={hours}
        index={[i, j]}
        selected={selected && selected[0] === i && selected[1] === j}
        setSelected={setSelected}
      />
    ));

    return columns;
  });

  return (
    <Main>
      <HeatmapHours />
      <Div>
        <HeatmapDays />
        <Tiles>{rows}</Tiles>
      </Div>
    </Main>
  );
}

Heatmap.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Heatmap;

// styled components //

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
  display: flex;
  flex-wrap: wrap;
`;
