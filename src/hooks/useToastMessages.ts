import { MessageType } from "./useToasts.types";
import useToasts from "./useToasts";
import { useMemo } from "react";

const useToastMessages = () => {
  const addItem = useToasts((state) => state.addItem);
  return useMemo(() => {
    const success = (msg: string) =>
      addItem({ msg: msg, type: MessageType.Success, close: true });
    const error = (msg: string) =>
      addItem({ msg: msg, type: MessageType.Error, close: true });
    const info = (msg: string) =>
      addItem({ msg: msg, type: MessageType.Info, close: true });
    return {
      addItem,
      success,
      error,
      info,
    };
  }, [addItem]);
};

export default useToastMessages;
