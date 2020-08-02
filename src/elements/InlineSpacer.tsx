import React from "react";
import styled from "styled-components";

interface InlineSpacerProps {
  width: string;
}

const StyledSpan = styled.span<InlineSpacerProps>`
  margin-left: ${({ width }) => width};
`;

const InlineSpacer = ({ width }: InlineSpacerProps) => (
  <StyledSpan width={width} />
);

export default InlineSpacer;
