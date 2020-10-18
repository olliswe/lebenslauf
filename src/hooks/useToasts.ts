import create from "zustand";
import { ToastMessage, MessageType } from "./useToasts.types";

let id: number = 0;
const defaultCloseDuration = 400;

export let toastSettings = {
  defaultDuration: 3500,
};

const [useToasts] = create((set, get) => ({
  items: [],
  cancelItems: new Map(),
  markItems: (key: number) => {
    set((state) => ({
      items: state.items.map((i: any) => {
        if (i.key === key) {
          i.toast.cancel = true;
        }
        return i;
      }),
    }));
  },
  removeItem: (key: number) => {
    get().clearItem(key);
    set((state) => ({ items: state.items.filter((i: any) => i.key !== key) }));
    set((state) => {
      state.cancelItems.delete(key);
      return {
        cancelItems: new Map(state.cancelItems),
      };
    });
  },
  addItem: (
    toast: ToastMessage,
    duration: number = toastSettings.defaultDuration
  ) => {
    const key = id++;
    const item = { key: key, toast: toast };
    set((state) => ({
      items: [...state.items, item],
      cancelItems: new Map(
        state.cancelItems.set(
          item.key,
          setTimeout(() => {
            get().markItems(item.key);
            setTimeout(() => get().removeItem(item.key), defaultCloseDuration);
          }, duration)
        )
      ),
    }));
    return key;
  },
  toggleToastLoading: (key: number, type: MessageType) => {
    set((state) => ({
      items: state.items.map((i: any) => {
        if (i.key === key) {
          i.toast.type = type;
        }
        return i;
      }),
    }));
  },
  clearItem: (key: number) => {
    clearTimeout(get().cancelItems.get(key));
  },
  clearItems: () => {
    for (const key of get().cancelItems.keys()) {
      const item = get().items.find((c) => c.key === key);
      if (item?.persist) {
        return;
      }
      clearTimeout(key);
    }
    set((_) => ({ items: [], cancelItems: new Map() }));
  },
}));

export default useToasts;
