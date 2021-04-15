/* eslint react/prop-types: 0 */
import React from 'react';
// import PropTypes from 'prop-types';

function Heatmap({ posts }) {
  console.log(posts);
  return <>{posts.length}</>;
}

// Heatmap.propTypes = {
//   posts: PropTypes.array,
// };

export default Heatmap;
