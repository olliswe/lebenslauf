import React, { useCallback, useMemo } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import useCV, { IUseCV } from "../../stores/useCV";
import Button from "../../elements/Button";
import EducationEntry from "./EducationEntry";
import H2 from "../../elements/H2";

const INITIAL_STATE = {
  institution: "",
  degree: "",
  start_year: "",
  end_year: "",
  description: "",
  current: false,
};

const EditCVEdu = () => {
  const educationEntries = useCV((state) => state.cv.educationEntries);
  const set = useCV((state) => state.set);

  const hasEntries = useMemo(() => educationEntries.length > 0, [
    educationEntries,
  ]);

  const handleClick = useCallback(
    (e) => {
      set((state: IUseCV) => {
        state.cv.educationEntries = [
          ...state.cv.educationEntries,
          INITIAL_STATE,
        ];
      });
    },
    [set]
  );

  return (
    <div>
      <H2>Education</H2>
      <FormWrapper>
        {educationEntries.map((entry, index) => (
          <EducationEntry entry={entry} key={index} index={index} />
        ))}
        <ButtonWrapper centered={!hasEntries}>
          <Button outlined={true} onClick={handleClick}>
            + Add Education
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default EditCVEdu;
