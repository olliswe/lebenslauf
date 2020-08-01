import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const FormWrapper = ({ children }) => (
  <Scrollbars
    renderTrackHorizontal={() => <div />}
    style={{
      height: "31rem",
      padding: "1rem 0 2rem 0",
      boxSizing: "border-box",
      marginBottom: "1rem",
    }}
  >
    <Wrapper>{children}</Wrapper>
  </Scrollbars>
);

export const StyledRow = styled(Row)<{ mb?: string }>`
  margin-bottom: ${({ mb }) => mb || `1rem`};
  max-width: 50rem;
  width: 100%;
`;
