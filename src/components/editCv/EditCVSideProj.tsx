import React, { useCallback } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import Button from "../../elements/Button";
import H2 from "../../elements/H2";
import PersonalProjectEntry from "./PersonalProjectEntry";
import usePersonalProjects from "../../hooks/usePersonalProjects";

const EditCVSideProj = () => {
  const { personalProjects, addEntry, hasEntries } = usePersonalProjects();

  const handleClick = useCallback(() => addEntry(), [addEntry]);

  return (
    <div>
      <H2>Personal Projects</H2>
      <FormWrapper>
        {personalProjects.map((entry, index) => (
          <PersonalProjectEntry entry={entry} key={index} index={index} />
        ))}
        <ButtonWrapper centered={!hasEntries}>
          <Button outlined={true} onClick={handleClick}>
            + Add Personal Project
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </div>
  );
};

export default EditCVSideProj;
