import styled, { ThemeProps, withTheme } from "styled-components";
import React, {
  useMemo,
  useEffect,
  MutableRefObject,
  useRef,
  ReactElement,
  CSSProperties,
} from "react";
import { MessageType } from "../../hooks/useToasts.types";
import { ITheme } from "../../configs/theme";
import { AlertOutlined, CheckCircleOutlined } from "@ant-design/icons";
import { Spin } from 'antd';
import CrossIcon from "../../elements/CrossIcon";

const INMS = 300;
const OUTMS = 200;

const SCMessage = styled.div<{ bc: string }>`
  width: 100%;
  max-width: 30rem;
  border-radius: 4px;
  background-color: ${({ bc }:any) => bc};
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  margin-top: 1rem;
  transition: all ${INMS}ms ease;
  overflow: hidden;
  opacity: 0;
  transform: scale(0);
  position: relative;
  &.cancel {
    transition: all ${OUTMS}ms ease;
  }
`;

const Content = styled.div<{ theme: ITheme }>`
  display: flex;
  align-items: center;
  padding: 1.157rem 1.3125rem;
  font-size: 0.9375rem;
  color: ${({ theme }:any) => theme.colors.white};
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;

export interface IMessage {
  msg: string;
  type: MessageType;
  onClick?: (e: React.MouseEvent) => void;
  showClose?: boolean;
  cancel?: boolean;
  style?: CSSProperties;
}
const Message: React.FC<IMessage & ThemeProps<ITheme>> = ({
  msg,
  type,
  onClick,
  cancel,
  showClose,
  theme,
  style,
}) => {
  const typeColor: string = useMemo(() => {
    const colors: any = {
      error: theme.colors.errorBc,
      success: theme.colors.brand,
      info: theme.colors.blue,
    };

    return colors[type];
  }, [theme.colors.brand, theme.colors.errorBc, theme.colors.blue, type]);

  const TypeIcon: any = useMemo<ReactElement<any>>(() => {
    const icons: any = {
      error: AlertOutlined,
      success: CheckCircleOutlined,
      info: AlertOutlined,
    };

    return icons[type];
  }, [type]);

  const animTimeout = useRef<number>();

  const collapseSection = (element: any) => {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;

    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = "";

    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function () {
      element.style.height = sectionHeight + "px";
      element.style.transition = elementTransition;

      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function () {
        element.style.transform = "scale(0)";
        element.style.opacity = 0;

        animTimeout.current = window.setTimeout(
          () =>
            requestAnimationFrame(function () {
              element.style.marginTop = 0;
              element.style.marginBottom = 0;
              element.style.paddingTop = 0;
              element.style.paddingBottom = 0;
              element.style.height = 0;
            }),
          OUTMS
        );
      });
    });
  };

  const expandSection = (element: any) => {
    requestAnimationFrame(() => {
      element.style.transform = "scale(1)";
      element.style.opacity = 1;
    });
  };

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    if (!cancel && ref.current) {
      expandSection(ref.current);
    }
    if (cancel && ref.current) {
      collapseSection(ref.current);
    }
    return () => {
      if (animTimeout.current) {
        window.clearTimeout(animTimeout.current);
      }
    };
  }, [cancel, ref]);

  return (
    <SCMessage
      ref={ref}
      className={cancel ? "cancel" : ""}
      bc={typeColor}
      data-testid={`toast toast-${type}`}
      style={style}
    >
      <Content theme={theme}>
        {type === MessageType.Loading && (
          <Spin size="small"/>
        )}
        {type !== MessageType.Loading && (
          <TypeIcon stroke={theme.colors.white} fill={typeColor} />
        )}
        <span data-testid="toastMessage" style={{ padding: "0 1.3rem" }}>
          {msg}
        </span>
        <CloseIcon>
          {showClose && (
            <CrossIcon
              color={theme.colors.white}
              stroke={typeColor}
              cursor="pointer"
              onClick={onClick}
            />
          )}
        </CloseIcon>
      </Content>
    </SCMessage>
  );
};

export default withTheme(Message);
