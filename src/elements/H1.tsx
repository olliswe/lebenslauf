import styled from "styled-components";

const H1 = styled.h1`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryLightFaded},${theme.colors.primaryLightFaded})`};
  background-size: 100% 40%;
  background-position: center bottom 2%;
  background-repeat: no-repeat;
  display: inline-block;
  font-size: 2.5rem;
  font-weight: bold;
`;
export default H1;
