import React, { useEffect } from "react";
import Message from "./Message";
import useToasts from "../../hooks/useToasts";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div<any>`
  position: fixed;
  top: 4rem;
  left: 0;
  z-index: 1000;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  pointer-events: none;
  align-items: center;
`;

const MessageHub: React.FC<any> = () => {
  const items = useToasts((state) => state.items);
  const clearItems = useToasts((state) => state.clearItems);
  const markItems = useToasts((state) => state.markItems);

  const { pathname, search } = useLocation();

  useEffect(
    () => () => {
      clearItems();
    },
    [clearItems, pathname, search]
  );

  return createPortal(
    <Container>
      {items.map(({ key, toast }: any) => (
        <Message
          key={key}
          cancel={toast.cancel}
          msg={toast.msg}
          type={toast.type}
          showClose={toast.close}
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            markItems(key);
          }}
        ></Message>
      ))}
    </Container>,
    document.body
  );
};

export default MessageHub;
