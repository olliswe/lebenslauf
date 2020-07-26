import styled from "styled-components";

const H3 = styled.h3`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryLightFaded},${theme.colors.primaryLightFaded})`};
  background-size: 100% 40%;
  background-position: center bottom 2%;
  background-repeat: no-repeat;
  display: inline-block;
  font-size: 1.17rem;
`;
export default H3;
