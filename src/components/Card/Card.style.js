import styled from "styled-components";

export const CardImageWrapper = styled.div`
img{
  max-height:40rem;
}
  .cardimage {
    border-radius: 4%;
    width: 100%;
  }
`;

export const CardTitleWrapper = styled.h1`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: #000111;
`;
