import styled from "styled-components";

export const CardImageWrapper = styled.div`
  margin-right: 2rem;
  .cardimage {
    border-radius: 4%;
    width: 100%;
  }
`;

export const CardTitleWrapper = styled.h1`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: #000111;
`;
