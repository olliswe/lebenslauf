import React, { useCallback } from "react";
import { IExperienceEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Col, Button as AntdButton } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import useExperienceEntries from "../../hooks/useExperienceEntries";
import SkillsSelector from "../../elements/SkillsSelector";
import { Divider } from "@material-ui/core";

const ExperienceEntry = ({
  entry,
  index,
}: {
  entry: IExperienceEntry;
  index: number;
}) => {
  const { removeEntry } = useExperienceEntries(index);
  const handleButtonClick = useCallback(() => removeEntry(), [removeEntry]);

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
      <StyledRow mb={"0"}>
        <SkillsSelector
          skills={["React"]}
          setSkills={() => {}}
          label={"Tech Stack"}
          chipFontSize={"0.8rem"}
          chipSize={"small"}
        />
      </StyledRow>
      <Divider />
    </EntryWrapper>
  );
};

export default ExperienceEntry;
