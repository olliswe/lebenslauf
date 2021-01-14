import { create } from "zustand";

interface IPreviewStore {
  previewCV: string;
  setPreviewCV: (previewCV: string) => void;
}

const [usePreviewCVStore] = create<IPreviewStore>((set) => ({
  previewCV: "",
  setPreviewCV: (previewCV) => set({ previewCV }),
}));

export default usePreviewCVStore;
