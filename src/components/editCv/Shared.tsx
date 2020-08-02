import React from "react";
import styled from "styled-components";
import { Row } from "antd";
import { Scrollbars } from "react-custom-scrollbars";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const ButtonWrapper = styled.div<{ centered: boolean }>`
  align-self: center;
  ${({ centered }) => (centered ? `margin-top: 6rem;` : `margin-top:1rem`)};
  margin-bottom: 2rem;
`;

export const RemoveButtonWrapper = styled.div`
  height: 0;
  align-self: flex-end;
  margin: 1rem 1rem 0 0;
`;

export const EntryWrapper = styled.div`
  opacity: 1;
  transition: opacity 1s ease-in;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
