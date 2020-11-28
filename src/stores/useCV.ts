import create from "zustand";
import produce from "immer";

import { ICV } from "../models/cv";

export type IUseCV = {
  cv: ICV;
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
  createdAt: "",
  updatedAt: "",
};

const [useCV] = create<IUseCV>((set) => ({
  cv: INITIAL_CV_STATE,
  loading: true,
  reset: () => set((state) => ({ cv: INITIAL_CV_STATE, loading: false })),
  set: (fn: any) => set(produce(fn)),
}));

export default useCV;
