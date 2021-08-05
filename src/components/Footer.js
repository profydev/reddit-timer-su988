import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 940px;
  margin: 0 auto;
  margin-top: 40px;
  height: 100px;
`;

const Logo = styled.p`
  text-decoration: none;
  color: #636363;
  font-size: 0.875em;
  flex: 1;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #636363;
  font-size: 0.875em;
  flex: 1;
  text-align: end;
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo>Reddit Timer</Logo>
      <Link to="/">
        <img src="/sign.svg" alt="" />
      </Link>
      <StyledLink to="/terms">Terms & Privacy</StyledLink>
    </StyledFooter>
  );
}

export default Footer;
