import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 250px 0 290px;
`;

const StyledHref = styled.a`
  text-decoration: none;
  color: #636363;
  font-size: 14px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636363;
  font-size: 14px;
`;

const StyledIcon = styled.p``;

function Footer() {
  return (
    <StyledFooter>
      <StyledHref href="https://profy.dev/employers">profy.dev</StyledHref>
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
