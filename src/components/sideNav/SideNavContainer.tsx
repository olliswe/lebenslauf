import styled from "styled-components";

const SideNavContainer = styled.nav`
  height: 100%;
  width: 10rem;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom,${theme.colors.secondaryLight},${theme.colors.white})`};
  box-shadow: inset -5px 0 15px -8px rgba(0, 0, 0, 0.5);
`;

export default SideNavContainer;
