/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';

function PostsTable({ posts }) {
  const ui =
    posts &&
    posts.map((post) => (
      <tr>
        <TableData>
          <Href
            href={`https://reddit.com${post.permalink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {post.title}
          </Href>
        </TableData>
        <TableData>{dayjs.unix(post.created_utc).format('h:mm a')}</TableData>
        <TableData>{post.score}</TableData>
        <TableData>{post.num_comments}</TableData>
        {post.author === 'deleted' ? (
          <TableData>{post.author}</TableData>
        ) : (
          <TableData>
            {' '}
            <Href
              href={`https://reddit.com/u/${post.author}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {post.author}
            </Href>
          </TableData>
        )}
      </tr>
    ));
  return (
    <Section>
      <Header>Posts</Header>
      {posts && posts.length > 0 && (
        <Table>
          <thead>
            <tr>
              <TableHead>Title</TableHead>
              <TableHead>Time Posted</TableHead>
              <TableHead>Score</TableHead>
              <TableHead>Comments</TableHead>
              <TableHead>Author</TableHead>
            </tr>
          </thead>
          <tbody>{ui}</tbody>
        </Table>
      )}
    </Section>
  );
}

export default PostsTable;

// STYLED COMPONENTS //

const Section = styled.section`
  max-width: 786px;
  margin: 0 auto;
`;

const Table = styled.table`
  border: 1px solid #dddddd;
  border-collapse: collapse;
  text-align: start;
  font-size: 14px;
`;

const TableData = styled.td`
  border: 1px solid #dddddd;
  border-collapse: collapse;
  padding: 8px;

  :first-child {
    max-width: 373px;
  }

  :nth-child(2) {
    min-width: 114px;
  }

  :last-child,
  :first-child {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const Href = styled.a`
  text-decoration: none;
  color: #0087ff;
`;

const TableHead = styled.th`
  border: 1px solid #dddddd;
  border-collapse: collapse;
  padding: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;

  :first-child {
    text-align: start;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  text-align: start;
`;
