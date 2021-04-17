import { useState, useEffect } from 'react';
import axios from 'axios';

export async function fetchData(subreddit, temp = [], next = null) {
  let url = `https://www.reddit.com/r/${subreddit}/top.json?t=year&limit=100`;

  if (temp.length > 400) {
    return temp;
  }

  if (next) {
    url = `${url}&after=${next}`;
  }

  const result = await axios(url);
  const currData = result.data.data.children;
  const parsed = currData.map((data) => data.data);
  const nextPage = result.data.data.after;
  temp.push(...parsed);
  return fetchData(subreddit, temp, nextPage);
}

function useFetchData(subreddit) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(subreddit)
      .then((newPosts) => {
        setPosts(newPosts);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, [subreddit]);

  return {
    loading,
    error,
    posts,
  };
}
export default useFetchData;
