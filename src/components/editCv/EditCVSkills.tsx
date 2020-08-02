import React, { useCallback } from "react";
import H2 from "../../elements/H2";
import { FormWrapper } from "./Shared";
import SkillsSelector from "../../elements/SkillsSelector";
import { useCV } from "../../hooks/useCV";

const EditCVSkills = () => {
  const skills = useCV((state) => state.cv.skills);
  const set = useCV((state) => state.set);

  const setSkills = useCallback(
    (input) => {
      set((state) => {
        state.cv.skills = input;
      });
    },
    [set]
  );

  return (
    <div>
      <H2>Skills</H2>
      <FormWrapper>
        <SkillsSelector skills={skills} setSkills={setSkills} />
      </FormWrapper>
    </div>
  );
};

export default EditCVSkills;
