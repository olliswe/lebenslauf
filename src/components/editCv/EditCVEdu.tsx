import React, { useCallback } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import Button from "../../elements/Button";
import EducationEntry from "./EducationEntry";
import H2 from "../../elements/H2";
import useEducationEntries from "../../hooks/useEducationEntries";

const EditCVEdu = () => {
  const {
    entries: educationEntries,
    addEntry,
    hasEntries,
  } = useEducationEntries();

  const handleClick = useCallback(() => addEntry(), [addEntry]);

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
