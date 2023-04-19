import styled from 'styled-components';

export const ContactData = styled.p`
  display: flex;
  align-items: center;
  padding: 5px 5px;
  color: Navy;
  &::before {
    content: '\u2022';
    margin-right: 10px;
    font-size: 26px;
    color: steelblue;
  }
`;

export const BtnDelete = styled.button`
  border: none;
  padding: 5px 20px;
  border-radius: 2px;
  color: white;
  background-color: SteelBlue;
  &:active {
    background-color: DeepSkyBlue;
  }
`;
