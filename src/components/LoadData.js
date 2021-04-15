import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from '../hooks/useFetchData';
import LoadingSpinner from './LoadingSpinner';
import Heatmap from './Heatmap';
import groupByDay from '../utils/groupByDay';

function LoadData() {
  const { slug } = useParams();
  const { loading, error, posts } = useFetchData(slug);
  const [postsByDay, setPostsByDay] = useState(null);

  useEffect(() => {
    setPostsByDay(groupByDay(posts));
  }, [posts]);

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <div>Please try again</div>}
      {!loading && <Heatmap posts={postsByDay} />}
    </>
  );
}

export default LoadData;
