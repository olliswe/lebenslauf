import create from "zustand";

interface IUser {
  [key: string]: string;
}

interface IUserState {
  user: IUser | null;
  setUser: (user: IUser) => void;
}

const [useUser] = create<IUserState>((set) => ({
  user: null,
  setUser: (user) => set((state) => ({ user })),
}));

export default useUser;
