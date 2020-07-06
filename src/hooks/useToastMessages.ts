import { MessageType } from "./useToasts.types";
import useToasts from "./useToasts";

const useToastMessages = () => {
  const addItem = useToasts((state) => state.addItem);
  const toggleToastLoading = useToasts((state) => state.toggleToastLoading);
  const loading = (msg: string) =>
    addItem({ msg: msg, type: MessageType.Loading, close: true });
  const success = (msg: string) =>
    addItem({ msg: msg, type: MessageType.Success, close: true });
  const error = (msg: string) =>
    addItem({ msg: msg, type: MessageType.Error, close: true });
  const info = (msg: string) =>
    addItem({ msg: msg, type: MessageType.Info, close: true });
  return {
    addItem,
    toggleToastLoading,
    loading,
    success,
    error,
    info,
  };
};

export default useToastMessages;
