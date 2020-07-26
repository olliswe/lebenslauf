import styled from "styled-components";

const H1 = styled.h1`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryLightVeryFaded},${theme.colors.primaryLightVeryFaded})`};
  background-size: 100% 39%;
  background-position: center bottom 17%;
  background-repeat: no-repeat;
  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;
`;
export default H1;
