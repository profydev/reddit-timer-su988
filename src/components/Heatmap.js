/* eslint-disable */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import HeatmapHours from './HeatmapHours';
import HeatmapDays from './HeatmapDays';
import HeatmapTile from './HeatmapTile';
import PostsTable from './PostsTable';

function Heatmap({ posts }) {
  const [selected, setSelected] = useState({ day: null, hour: null });
  const { day, hour } = selected;

  const rows = posts.map((days, i) => {
    const columns = days.map((hours, j) => (
      <HeatmapTile
        key={uuidv4()}
        posts={hours}
        index={{ day: i, hour: j }}
        selected={selected.day === i && selected.hour === j}
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
      <Timezone>
        {' '}
        All times are shown in your timezone:{' '}
        <Span>{Intl.DateTimeFormat().resolvedOptions().timeZone}</Span>
      </Timezone>
      {posts[day] && posts[day][hour].length > 0 && (
        <PostsTable posts={posts[day][hour]} />
      )}
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

const Timezone = styled.div`
  font-size: 14px;
  color: #93918f;
  margin-top: 12px;
`;

const Span = styled.span`
  font-weight: bold;
`;
