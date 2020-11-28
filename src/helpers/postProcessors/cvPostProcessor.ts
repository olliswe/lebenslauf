import { ICV, IGetCV } from "../../models/cv";

export const cvPostProcessor = (cv: IGetCV): ICV => ({
  ...cv,
  skills: cv.skills.map((skill) => skill.name),
});

export const cvsPostProcessor = (cvs: IGetCV[]): ICV[] =>
  cvs.map((cv) => cvPostProcessor(cv));
