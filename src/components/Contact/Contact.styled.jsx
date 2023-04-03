import styled from '@emotion/styled';

export const ListItem = styled.ul`
  font-size: 20px;
  margin-bottom: 5px;
  display: flex;

  justify-content: space-between;
  align-items: center;
`;

export const ContactName = styled.span`
  color: #a5ffa5;
  width: 40%;
`;

export const ContactNumber = styled.span`
  color: #ff9524;
  width: 50%;
`;

export const DeleteButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #fe4a4a;
`;
