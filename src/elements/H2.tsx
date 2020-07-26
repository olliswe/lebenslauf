import styled from "styled-components";

const H2 = styled.h2`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryLightVeryFaded},${theme.colors.primaryLightVeryFaded})`};
  background-size: 100% 36%;
  background-position: center bottom 17%;
  background-repeat: no-repeat;
  display: inline-block;
  font-size: 1.75rem;
  font-weight: bold;
`;
export default H2;
