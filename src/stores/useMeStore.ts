import { create } from "zustand";
import { IUser } from "../models/user";

interface IMeStore {
  user: IUser | undefined;
  setUser: (user: IUser | undefined) => void;
}

const [useMeStore] = create<IMeStore>((set) => ({
  user: undefined,
  setUser: (user) => set({ user }),
}));

export default useMeStore;
