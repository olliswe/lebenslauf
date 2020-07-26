import React, { useCallback, useMemo } from "react";
import H2 from "../../elements/H2";
import { FormWrapper } from "./Shared";
import Button from "../../elements/Button";
import styled from "styled-components";
import { useCV } from "../../hooks/useCV";
import ExperienceEntry from "./ExperienceEntry";

const ButtonWrapper = styled.div<{ centered: boolean }>`
  align-self: center;
  ${({ centered }) => (centered ? `margin-top: 6rem;` : `margin-top:1rem`)};
  margin-bottom: 2rem;
`;

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
