import styled from "styled-components";

export const CardImageWrapper = styled.div`
  .cardimage {
    border-radius: 4%;
    width: 100%;
  }
`;

// export const CardTextWrapper = styled.span`
//   color: black;
//   font-size: 1.5rem;
//   margin-left: 2rem;
//   line-height: 2rem;
//   li {
//     line-height: 1.5rem;
//     text-transform: capitalize;
//   }
// `;

export const CardTitleWrapper = styled.h1`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: #000111;
`;
