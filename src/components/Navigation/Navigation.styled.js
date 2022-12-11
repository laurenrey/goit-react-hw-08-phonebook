import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #12237d;
  font-weight: 500;
  font-size: 24px;
  margin-right: 16px;
  :not(:last-child) {
    margin-right: 32px;
  }

  &.active {
    color: #0000ff;
  }
`;

export const Nav = styled.nav`
  margin: 20px 0;
  margin-left: 16px;
`;
