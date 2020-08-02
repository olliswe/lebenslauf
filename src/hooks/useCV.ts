import create from "zustand";
import produce from "immer";

import { ICV } from "../models/cv";

type IUseCV = {
  cv: ICV;
  error: string;
  loading: boolean;
  set: any;
  reset: any;
};

const INITIAL_CV_STATE = {
  name: "",
  position: "",
  bio: "",
  location: "",
  email: "",
  phone: "",
  homepageUrl: "",
  linkedinUrl: "",
  educationEntries: [],
  experienceEntries: [],
  personalProjectEntries: [],
  skills: [],
};

const [useCV] = create<IUseCV>((set) => ({
  cv: INITIAL_CV_STATE,
  loading: true,
  error: "",
  reset: () =>
    set((state) => ({ cv: INITIAL_CV_STATE, error: "", loading: false })),
  set: (fn) => set(produce(fn)),
}));

const useCVRemotes = () => {
  // const [, makeRequest] = useImperativeRequestWrapper();
  const set = useCV((state) => state.set);

  //TODO: update methods
  const getCV = async () => {
    set((state) => {
      state.loading = true;
    });
    // const { data, error } = await makeRequest({});
  };

  const putCV = async () => {};

  return { getCV, putCV };
};

export { useCV, useCVRemotes };
