import create from "zustand";
import { ICV } from "../models/cv";
import produce from "immer";

type IUseCV = {
  cv: ICV;
  error: boolean;
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
  homepage_url: "",
  linkedin_url: "",
  education_entries: [],
  experience_entries: [],
  personal_project_entries: [],
  skills: [],
};

const useCV = create<IUseCV>((set) => ({
  cv: INITIAL_CV_STATE,
  loading: false,
  error: false,
  reset: () =>
    set((state) => ({ cv: INITIAL_CV_STATE, error: false, loading: false })),
  set: (fn) => set(produce(fn)),
  fetch: () => {},
  post: () => {},
}));
