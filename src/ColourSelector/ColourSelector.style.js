import styled from "styled-components";

export const SetColourWrapper = styled.ul`
  display: flex;

  li {
    margin-right: 2rem;
    display: inline;
  }

  input:not(:first-of-type) {
    margin: 0 0.5rem 0 2rem;
  }

  label {
    display: flex;
  }

  img {
    height: 1rem;
    margin-left: 0.5rem;
  }
`;
