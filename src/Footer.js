import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  border: 2px solid red;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 14px;
  padding: 0 130px 0 130px;
`;

const StyledIcon = styled.p``;

function Footer() {
  return (
    <StyledFooter>
      <StyledLink href="https://ooloo.io/employers">profy.dev</StyledLink>
      <StyledIcon>
        <Link to="/">
          <img src="./sign.svg" alt="" />
        </Link>
      </StyledIcon>
      <StyledLink to="/terms">Terms & Privacy</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
