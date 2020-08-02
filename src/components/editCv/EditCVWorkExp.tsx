import React, { useCallback, useMemo } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import { useCV } from "../../hooks/useCV";
import Button from "../../elements/Button";
import ExperienceEntry from "./ExperienceEntry";
import H2 from "../../elements/H2";

const INITIAL_STATE = {
  role: "",
  company: "",
  start_month: "",
  start_year: "",
  end_month: "",
  current: false,
  skills: [],
  githubProjectUrl: "",
};

const EditCVWorkExp = () => {
  const experienceEntries = useCV((state) => state.cv.experienceEntries);
  const set = useCV((state) => state.set);

  const hasEntries = useMemo(() => experienceEntries.length > 0, [
    experienceEntries,
  ]);

  const handleClick = useCallback(
    (e) => {
      set((state) => {
        state.cv.experienceEntries = [
          ...state.cv.experienceEntries,
          INITIAL_STATE,
        ];
      });
    },
    [set]
  );

  return (
    <div>
      <H2>Work Experience</H2>
      <FormWrapper>
        {experienceEntries.map((entry, index) => (
          <ExperienceEntry entry={entry} key={index} index={index} />
        ))}
        <ButtonWrapper centered={!hasEntries}>
          <Button outlined={true} onClick={handleClick}>
            + Add Work Experience
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default EditCVWorkExp;
