import styled from 'styled-components';

export const List = styled.ul`
  /* background-color: #eaf2f8; */
  display: flex;
  flex-direction: column;

  padding-right: 200px;
  padding-left: 200px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding: 4px;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-size: 24px;
  font-weight: 500;

  color: black;
`;
