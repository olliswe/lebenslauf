import React, { useCallback } from "react";
import { IExperienceEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Col, Divider, Button as AntdButton } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import { useCV } from "../../hooks/useCV";
import removeEntry from "../../helpers/removeEntry";
import SkillsSelector from "../../elements/SkillsSelector";

const ExperienceEntry = ({
  entry,
  index,
}: {
  entry: IExperienceEntry;
  index: number;
}) => {
  const set = useCV((state) => state.set);
  const techStack = entry.techStack;
  const handleButtonClick = useCallback(() => {
    set((state) => {
      state.cv.experienceEntries = removeEntry(
        state.cv.experienceEntries,
        index
      );
    });
  }, [set, index]);

  const setTechStack = useCallback(
    (input) => {
      set((state) => {
        state.cv.skills = input;
      });
    },
    [set]
  );

  return (
    <EntryWrapper>
      <RemoveButtonWrapper>
        <AntdButton
          //@ts-ignore
          type="danger"
          shape="round"
          size={"small"}
          onClick={handleButtonClick}
        >
          Remove
        </AntdButton>
      </RemoveButtonWrapper>
      <StyledRow>
        <FormTextInput label={"Role"} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"Company"} />
      </StyledRow>
      <StyledRow gutter={24}>
        <Col span={12}>
          <FormDatePicker label={"Start Date"} width={"80%"} />
        </Col>
        <Col span={12}>
          <FormDatePicker label={"End Date"} width={"80%"} />
        </Col>
      </StyledRow>
      <StyledRow>
        <FormTextArea label={"Description"} rows={3} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"GitHub Project URL"} rows={3} />
      </StyledRow>

      <Divider />
    </EntryWrapper>
  );
};

export default ExperienceEntry;
