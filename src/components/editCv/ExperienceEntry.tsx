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
  const { removeEntry, handleChange } = useExperienceEntries();

  const handleButtonClick = useCallback(() => removeEntry(index), [
    removeEntry,
    index,
  ]);

  const onTextChange = (event: any) => {
    handleChange({ index, value: event.target.value, name: event.target.name });
  };

  const onDateChange = (date: string, name: "endDate" | "startDate") => {
    handleChange({ index, value: date || null, name: name });
  };

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
        <FormTextInput
          name="role"
          label={"Role*"}
          value={entry.role}
          onChange={onTextChange}
        />
      </StyledRow>
      <StyledRow>
        <FormTextInput
          name="company"
          label={"Company*"}
          value={entry.company}
          onChange={onTextChange}
        />
      </StyledRow>
      <StyledRow>
        <FormTextInput
          name="location"
          label={"Location*"}
          value={entry.location}
          onChange={onTextChange}
        />
      </StyledRow>
      <StyledRow gutter={24}>
        <Col span={12}>
          <FormDatePicker
            name="startDate"
            label={"Start Date*"}
            width={"80%"}
            value={entry.startDate}
            onChange={(moment: any, date: string) =>
              onDateChange(date, "startDate")
            }
          />
        </Col>
        <Col span={12}>
          <FormDatePicker
            name="endDate"
            label={"End Date"}
            width={"80%"}
            value={entry.endDate}
            onChange={(moment: any, date: string) =>
              onDateChange(date, "endDate")
            }
          />
        </Col>
      </StyledRow>
      <StyledRow>
        <FormTextArea
          name="description"
          label={"Description"}
          rows={3}
          value={entry.description}
          onChange={onTextChange}
        />
      </StyledRow>
      <StyledRow>
        <FormTextInput
          label={"GitHub Project URL"}
          value={entry.githubProjectUrl}
          onChange={onTextChange}
        />
      </StyledRow>
      <Divider />
    </EntryWrapper>
  );
};

export default ExperienceEntry;
