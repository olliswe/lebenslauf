import React, { useCallback, useMemo } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import Button from "../../elements/Button";
import ExperienceEntry from "./ExperienceEntry";
import H2 from "../../elements/H2";
import useExperienceEntries from "../../hooks/useExperienceEntries";

const EditCVWorkExp = () => {
  const {
    experienceEntries,
    addEntry,
    setEntry,
    hasEntries,
  } = useExperienceEntries();

  const handleClick = useCallback(() => addEntry(), [addEntry]);

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
