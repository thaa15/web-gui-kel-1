import styled from "styled-components";

export const DeleteButton = styled.button`
  color: white;
  width: fit-content;
  margin: 20px 0;
  padding: 8px 32px;
  border-radius: 5px;
  margin-bottom: auto;
  background-color: ${(props) => props.theme.color.red};
`;
