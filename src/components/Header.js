/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px 0 80px;
  margin-top: 26px;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledListItem = styled.li`
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
          <img src="./logo.svg" alt="Logo" />
        </Link>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/search/javascript">Search</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#how-it-works">
              How it works
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink smooth to="/#about">
              About
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </Nav>
    </header>
  );
}

export default Header;
