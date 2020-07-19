import React from "react";
import styled from "styled-components";

const Container = styled.div<{ active: boolean }>`
  display: block;
  height: 8.5rem;
  background: ${(props: any) => (props.active ? "white" : "")};
  box-shadow: ${(props: any) =>
    props.active ? "-10px 6px 8px -8px rgba(0, 0, 0, 0.5)" : ""};
  cursor: pointer;
  color: ${(props: any) => (props.active ? "" : "rgba(0,0,0,0.6)")};
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

interface ISideNavElement {
  active: boolean;
  tabKey: number;
  onClickHandler: any;
  label: string;
  icon?: any;
}

const SideNavElement = ({
  active,
  tabKey,
  onClickHandler,
  label,
  icon,
}: ISideNavElement) => {
  return (
    <Container
      active={active}
      onClick={() => {
        onClickHandler(tabKey);
      }}
    >
      <Wrapper>{label}</Wrapper>
    </Container>
  );
};

export default SideNavElement;
