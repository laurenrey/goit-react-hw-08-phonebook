import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: blue;
  font-weight: 500;
  font-size: 24px;
  :not(:last-child) {
    margin-right: 32px;
  }
  :hover {
    color: grey;
  }
`;

export const Nav = styled.nav`
  margin: 20px 0;
`;
