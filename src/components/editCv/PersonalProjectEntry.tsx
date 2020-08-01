import React, { useCallback } from "react";
import { IPersonalProjectEntry } from "../../models/cv";
import { StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Col, Divider, Button as AntdButton } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import styled from "styled-components";
import { useCV } from "../../hooks/useCV";
import SkillsSelector from "../../elements/SkillsSelector";

//
// export interface IPersonalProjectEntry {
//     name: string;
//     description?: string;
//     skills: string[];
//     githubProjectUrl?: string;
// }

// TODO: MOVE ALL THESE TO SHARED
const ButtonWrapper = styled.div`
  height: 0;
  align-self: flex-end;
  margin: 1rem 1rem 0 0;
`;

const Wrapper = styled.div`
  opacity: 1;
  transition: opacity 1s ease-in;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

// TODO: MOVE TO HELPER
const removeEntry = (array, key) => {
  const copy = array;
  copy.splice(key, 1);
  return copy;
};

const PersonalProjectEntry = ({
  entry,
  index,
}: {
  entry: IPersonalProjectEntry;
  index: number;
}) => {
  const set = useCV((state) => state.set);
  const handleButtonClick = useCallback(() => {
    set((state) => {
      state.cv.personalProjectEntries = removeEntry(
        state.cv.personalProjectEntries,
        index
      );
    });
  }, [set, index]);

  const setSkills = useCallback((skills) => {}, []);

  return (
    <Wrapper>
      <ButtonWrapper>
        <AntdButton
          //@ts-ignore
          type="danger"
          shape="round"
          size={"small"}
          onClick={handleButtonClick}
        >
          Remove
        </AntdButton>
      </ButtonWrapper>
      <StyledRow>
        <FormTextInput label={"Name"} />
      </StyledRow>
      <StyledRow>
        <FormTextArea label={"Description"} rows={3} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"GitHub Project URL"} />
      </StyledRow>
      <StyledRow>
        <SkillsSelector skills={entry.skills} />
      </StyledRow>
      <Divider />
    </Wrapper>
  );
};

export default PersonalProjectEntry;
