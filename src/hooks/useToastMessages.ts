import { MessageType } from "./useToasts.types";
import useToasts from "./useToasts";
import { useMemo } from "react";

const useToastMessages = () => {
  const addItem = useToasts((state) => state.addItem);
  return useMemo(() => {
    const success = (msg: string, persist = false) =>
      addItem({ msg: msg, type: MessageType.Success, close: true, persist });
    const error = (msg: string, persist = false) =>
      addItem({ msg: msg, type: MessageType.Error, close: true, persist });
    const info = (msg: string, persist = false) =>
      addItem({ msg: msg, type: MessageType.Info, close: true, persist });
    return {
      addItem,
      success,
      error,
      info,
    };
  }, [addItem]);
};

export default useToastMessages;
