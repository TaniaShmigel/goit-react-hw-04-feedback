import styled from 'styled-components';

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
export const Button = styled.button`
  min-width: 100px;

  font-size: 20px;
  text-transform: capitalize;
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid gray;
  background-color: transparent;

  :hover,
  :focus {
    background-color: blue;
  }
`;
