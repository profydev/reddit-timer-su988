/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../utils/colors';

const Tile = styled.div`
  height: 40px;
  width: 40px;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  background-color: ${(props) =>
    props.count >= 10 ? colors[10] : colors[props.count]};

  &:hover {
    border: 1px solid black;
  }

  ${(props) => (props.active ? `border:1px solid black` : '')};
`;

function HeatmapTile({ posts, index, selected, setSelected }) {
  const handleClick = () => {
    setSelected(index);
  };

  return (
    <>
      <Tile active={selected} onClick={handleClick} count={posts.length}>
        {posts.length}
      </Tile>
    </>
  );
}

HeatmapTile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeatmapTile;
