import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 950px;
  margin: auto;
  margin-top: 110px;
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

const StyledIcon = styled.p`
  margin-right: -45px;
`;

const Div = styled.div`
  margin-right: 10px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledHref href="https://profy.dev/employers">profy.dev</StyledHref>
      <StyledIcon>
        <Link to="/">
          <img src="/sign.svg" alt="" />
        </Link>
      </StyledIcon>
      <Div>
        <StyledLink to="/terms">Terms & Privacy</StyledLink>
      </Div>
    </StyledFooter>
  );
}

export default Footer;
