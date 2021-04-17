/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const Table = styled.table``;

function PostsTable({ posts }) {
  const ui =
    posts &&
    posts.map((post) => (
      <tr>
        <a href={post.url} target="blank" rel="noopener noreferrer">
          <td>{post.title}</td>
        </a>
        <td>{post.created_utc}</td>
        <td>{post.score}</td>
        <td>{post.num_comments}</td>
        {post.author === 'deleted' ? (
          <td>{post.author}</td>
        ) : (
          <a
            href={`https://www.reddit.com/user/${post.author}`}
            target="blank"
            rel="noopener noreferrer"
          >
            <td>{post.author}</td>
          </a>
        )}
      </tr>
    ));
  return (
    <>
      {posts && posts.length > 0 && (
        <Table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Time Posted</th>
              <th>Score</th>
              <th>Comments</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{ui}</tbody>
        </Table>
      )}
    </>
  );
}

export default PostsTable;
