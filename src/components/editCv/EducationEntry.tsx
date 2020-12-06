import React, { useCallback } from "react";
import { IEducationEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Button as AntdButton, Col, Divider } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import useEducationEntries from "../../hooks/useEducationEntries";

const EducationEntry = ({
  entry,
  index,
}: {
  entry: IEducationEntry;
  index: number;
}) => {
  const { removeEntry } = useEducationEntries();
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
        <FormTextInput label={"Institution"} value={entry.institution} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"Degree Title"} value={entry.degree} />
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
      <Divider />
    </EntryWrapper>
  );
};

export default EducationEntry;
