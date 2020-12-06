import React, { useCallback } from "react";
import { IExperienceEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Button as AntdButton, Col } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import useExperienceEntries from "../../hooks/useExperienceEntries";
import { Divider } from "@material-ui/core";

const ExperienceEntry = ({
  entry,
  index,
}: {
  entry: IExperienceEntry;
  index: number;
}) => {
  const { removeEntry } = useExperienceEntries();
  const handleButtonClick = useCallback(() => removeEntry(index), [
    removeEntry,
    index,
  ]);

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
        <FormTextInput label={"Role"} value={entry.role} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"Company"} value={entry.company} />
      </StyledRow>
      <StyledRow gutter={24}>
        <Col span={12}>
          <FormDatePicker
            label={"Start Date"}
            width={"80%"}
            value={entry.startDate}
          />
        </Col>
        <Col span={12}>
          <FormDatePicker
            label={"End Date"}
            width={"80%"}
            value={entry.endDate}
          />
        </Col>
      </StyledRow>
      <StyledRow>
        <FormTextArea
          label={"Description"}
          rows={3}
          value={entry.description}
        />
      </StyledRow>
      <StyledRow>
        <FormTextInput
          label={"GitHub Project URL"}
          rows={3}
          value={entry.githubProjectUrl}
        />
      </StyledRow>
      <Divider />
    </EntryWrapper>
  );
};

export default ExperienceEntry;
