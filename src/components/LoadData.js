/* eslint operator-linebreak: ["error", "after", { "overrides": { "+=": "before" } }] */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`;

const Img = styled.img`
  margin-top: 50px;
  animation: ${rotate} 1.5s infinite linear;
`;

function LoadData() {
  const { slug } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData(temp = [], next = '') {
      setLoading(true);
      let url = `https://www.reddit.com/r/${slug}/top.json?t=year&limit=100`;

      if (temp.length > 400) {
        setLoading(false);
        return;
      }

      if (next) {
        url = `${url}&after=${next}`;
      }

      const result = await axios(url);
      const currData = result.data.data.children;
      const nextPage = result.data.data.after;
      temp.push(...currData);
      setData(temp);
      fetchData(temp, nextPage);
    }

    fetchData();
  }, [slug]);

  return (
    <>
      {loading && <Img src="/loading_spinner.svg" alt="Logo" />}
      {!loading &&
        data.map((item) => <div key={item.data.id}>{item.data.author}</div>)}
    </>
  );
}

export default LoadData;
