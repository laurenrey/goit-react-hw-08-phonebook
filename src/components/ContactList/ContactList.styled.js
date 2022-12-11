import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 250px;
  padding-left: 250px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 4px;
  justify-content: space-between;
  transition-duration: 500ms;
  :hover {
    background-color: #e7e6e1;
  }
  border-radius: 4px;
  padding-left: 12px;
`;
