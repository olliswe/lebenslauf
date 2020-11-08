import create from "zustand";

export enum AuthStates {
  pending = "NOT_AUTHENTICATED",
  loading = "LOADING",
  authenticated = "AUTHENTICATED",
}

interface IAuthState {
  authState: AuthStates;
  error: string;
  setAuthState: (newState: AuthStates) => void;
  setAuthFailure: (error: string) => void;
  setAuthSuccess: (input: {
    accessToken: string;
    refreshToken: string;
  }) => void;
}

const [useAuthState] = create<IAuthState>((set) => ({
  authState: AuthStates.pending,
  error: "",
  setAuthState: (newState: AuthStates) =>
    set((state) => ({ authState: newState })),
  setAuthFailure: (error: string) =>
    set((state) => ({
      authState: AuthStates.pending,
      error,
      token: "",
    })),
  setAuthSuccess: ({ accessToken, refreshToken }) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);
    return set((state) => ({
      authState: AuthStates.authenticated,
      error: "",
    }));
  },
}));

export default useAuthState;
