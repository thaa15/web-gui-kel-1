import styled from "styled-components";

export const TemplateStudents = styled.div`
  width: 85%;
  margin: 30px auto;
  padding: 20px;
  border: 2px solid ${(props) => props.theme.color.blue.A200};
  border-radius: 20px;
  min-height: 500px;
`;

export const GridStudents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
`;

export const BoxStudents = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme.color.black.A100};
  padding: 20px;
`;
