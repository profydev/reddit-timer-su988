/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 80px 10px 80px;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;
`;

const StyledListItem = styled.li`
  margin-right: -1px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  padding-left: 26px;
  color: #636363;
`;

function Header() {
  return (
    <header>
      <StyledNav>
        <Link to="/">
          <img src="./logo.svg" alt="Logo" />
        </Link>
        <StyledList>
          <StyledListItem>
            <StyledLink to="/search/javascript">Search</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/#how-it-works">How it works</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink to="/#about">About</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledNav>
    </header>
  );
}

export default Header;
