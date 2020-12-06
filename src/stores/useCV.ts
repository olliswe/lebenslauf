import create from "zustand";
import produce from "immer";

import { ICV, INITIAL_CV_STATE } from "../models/cv";

export type IUseCV = {
  cv: ICV;
  loading: boolean;
  set: any;
  reset: any;
};

const [useCV] = create<IUseCV>((set) => ({
  cv: INITIAL_CV_STATE,
  loading: true,
  reset: () => set((state) => ({ cv: INITIAL_CV_STATE, loading: false })),
  set: (fn: any) => set(produce(fn)),
}));

export default useCV;
