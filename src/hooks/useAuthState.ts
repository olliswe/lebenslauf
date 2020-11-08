import create from "zustand";

export enum AuthStates {
  pending = "PENDING",
  notAuthenticated = "NOT_AUTHENTICATED",
  loading = "LOADING",
  authenticated = "AUTHENTICATED",
}

interface IAuthState {
  authState: AuthStates;
  error: string;
  token: string;
  setAuthState: (newState: AuthStates) => void;
  setAuthFailure: (error: string) => void;
  setAuthSuccess: (input: {
    accessToken: string;
    refreshToken: string;
  }) => void;
  setAuthToken: (accessToken: string) => void;
}

const [useAuthState] = create<IAuthState>((set) => ({
  authState: AuthStates.pending,
  error: "",
  token: "",
  setAuthState: (newState: AuthStates) =>
    set((state) => ({ authState: newState })),
  setAuthFailure: (error: string) =>
    set((state) => ({
      authState: AuthStates.notAuthenticated,
      error,
      token: "",
    })),
  setAuthSuccess: ({ accessToken, refreshToken }) => {
    localStorage.setItem("refreshToken", refreshToken);
    return set((state) => ({
      authState: AuthStates.authenticated,
      error: "",
      token: accessToken,
    }));
  },
  setAuthToken: (accessToken) => set({ token: accessToken }),
}));

export default useAuthState;
