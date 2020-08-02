import React, { useCallback, useMemo } from "react";

import { ButtonWrapper, FormWrapper } from "./Shared";
import { useCV } from "../../hooks/useCV";
import Button from "../../elements/Button";
import H2 from "../../elements/H2";
import PersonalProjectEntry from "./PersonalProjectEntry";

//
// export interface IPersonalProjectEntry {
//     name: string;
//     description?: string;
//     skills: string[];
//     githubProjectUrl?: string;
// }

const INITIAL_STATE = {
  name: "",
  description: "",
  skills: [],
  githubProjectUrl: "",
};

const EditCVSideProj = () => {
  const personalProjectEntries = useCV(
    (state) => state.cv.personalProjectEntries
  );
  const set = useCV((state) => state.set);

  const hasEntries = useMemo(() => personalProjectEntries.length > 0, [
    personalProjectEntries,
  ]);

  const handleClick = useCallback(
    (e) => {
      set((state) => {
        state.cv.personalProjectEntries = [
          ...state.cv.personalProjectEntries,
          INITIAL_STATE,
        ];
      });
    },
    [set]
  );

  return (
    <div>
      <H2>Personal Projects</H2>
      <FormWrapper>
        {personalProjectEntries.map((entry, index) => (
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
