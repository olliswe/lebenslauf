import React, { useCallback, useMemo } from "react";
import H2 from "../../elements/H2";
import { FormWrapper } from "./Shared";
import Button from "../../elements/Button";
import styled from "styled-components";
import { useCV } from "../../hooks/useCV";
import EducationEntry from "./EducationEntry";

const ButtonWrapper = styled.div<{ centered: boolean }>`
  align-self: center;
  ${({ centered }) => (centered ? `margin-top: 6rem;` : `margin-top:1rem`)};
  margin-bottom: 2rem;
`;

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
      set((state) => {
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
