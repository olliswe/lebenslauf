import React, { useCallback } from "react";
import { IEducationEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Col, Divider, Button as AntdButton } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import useCV, { IUseCV } from "../../stores/useCV";
import removeEntry from "../../helpers/removeEntryHelper";

const EducationEntry = ({
  entry,
  index,
}: {
  entry: IEducationEntry;
  index: number;
}) => {
  const set = useCV((state) => state.set);
  const handleButtonClick = useCallback(() => {
    set((state: IUseCV) => {
      state.cv.educationEntries = removeEntry(state.cv.educationEntries, index);
    });
  }, [set, index]);

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
        <FormTextInput label={"Institution"} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"Degree Title"} />
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
      <Divider />
    </EntryWrapper>
  );
};

export default EducationEntry;
