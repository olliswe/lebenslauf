import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

export const FormWrapper = ({ children }) => (
  <Scrollbars
    style={{
      height: "31rem",
      padding: "1rem 0 2rem 0",
      boxSizing: "border-box",
      marginBottom: "2rem",
    }}
  >
    {children}
  </Scrollbars>
);

export const StyledRow = styled(Row)`
  margin-bottom: 2rem;
  max-width: 50rem;
`;
