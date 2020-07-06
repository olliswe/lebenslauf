import styled from 'styled-components';
import React from 'react';

export interface ISVG {
    width: string;
    height: string;
    viewBox?: string;
    fill?: string;
}

export interface ISVGWrapper {
    cursor?: string;
    onClick?: any;
    pe?: string;
    pad?: string;
    wrapperProps?: {};
    transform?: string;
}

const SVG = styled.svg<ISVG>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  transform-origin: center center;
`;

const Wrapper = styled.div<ISVGWrapper>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ cursor }) => (cursor ? cursor : 'inherit')};
  pointer-events: ${({ pe }) => (pe ? pe : 'auto')};
  padding: ${({ pad }) => pad || '0'};
  transform: ${({ transform }) => transform || 'initial'};
`;

const SVGWrapper: React.FC<ISVGWrapper & ISVG> = props => {
    const { cursor, pe, pad, onClick, wrapperProps, transform, ...rest } = props;
    return (
        <Wrapper
            cursor={cursor}
            pe={pe}
            pad={pad}
            transform={transform}
            onClick={onClick}
            style={wrapperProps}
        >
            <SVG {...rest} />
        </Wrapper>
    );
};

export default SVGWrapper;