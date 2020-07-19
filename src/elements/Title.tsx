import { Typography } from "antd";
import styled from "styled-components";

const { Title } = Typography;
const StyledTitle = styled(Title)`
  background-image: ${({ theme }) =>
    `linear-gradient(${theme.colors.primaryLightFaded},${theme.colors.primaryLightFaded})`};
  background-size: 100% 40%;
  background-position: center bottom 2%;
  background-repeat: no-repeat;
  display: inline-block;
`;
export default StyledTitle;
