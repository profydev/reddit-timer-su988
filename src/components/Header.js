/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: calc(100% - 160px);
  margin: auto;
  height: 100px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
`;

const ListItem = styled.li`
  margin-right: -1px;
`;

const StyledLink = styled(HashLink)`
  text-decoration: none;
  margin-left: 26px;
  color: #636363;
`;

function Header() {
  return (
    <header>
      <Nav>
        <Link to="/">
          <img src="/logo.svg" alt="Logo" />
        </Link>
        <List>
          <ListItem>
            <StyledLink to="/search/javascript">Search</StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink smooth to="/#how-it-works">
              How it works
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink smooth to="/#about">
              About
            </StyledLink>
          </ListItem>
        </List>
      </Nav>
    </header>
  );
}

export default Header;
