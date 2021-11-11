import styled from "styled-components";
import { Link } from "react-router-dom";

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
  @media screen and (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: ${(props) => props.theme.screen.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BoxStudents = styled(Link)`
  display: block;
  width: 100%;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.color.black.A100};
  padding: 20px;
  transition: .3s all ease-in;
  &:hover{
    transform: scale(1.1);
  }
`;
