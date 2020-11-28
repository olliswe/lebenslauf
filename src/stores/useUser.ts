import create from "zustand";

interface IUser {
  [key: string]: string;
}

interface IUserState {
  user: IUser | null;
  hasCv: boolean;
  setUser: (user: IUser) => void;
  setHasCv: (hasCv: boolean) => void;
}

const [useUser] = create<IUserState>((set) => ({
  user: null,
  hasCv: false,
  setUser: (user) => set((state) => ({ user })),
  setHasCv: (hasCv) => set((state) => ({ hasCv })),
}));

export default useUser;
