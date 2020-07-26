import React, { useCallback } from "react";
import { IExperienceEntry } from "../../models/cv";
import { StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Col, Divider, Button as AntdButton } from "antd";
import FormDatePicker from "../../elements/FormDatePicker";
import FormTextArea from "../../elements/FormTextArea";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";
import { useCV } from "../../hooks/useCV";

// export interface IExperienceEntry {
//     role: string;
//     company: string;
//     start_month: string;
//     start_year: string;
//     end_month?: string;
//     current: boolean;
//     skills: string[];
//     githubProjectUrl?: string;
// }

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

const removeEntry = (array, key) => {
  const copy = array;
  copy.splice(key, 1);
  return copy;
};

const ExperienceEntry = ({
  entry,
  index,
}: {
  entry: IExperienceEntry;
  index: number;
}) => {
  const set = useCV((state) => state.set);
  const handleButtonClick = useCallback(() => {
    set((state) => {
      state.cv.experienceEntries = removeEntry(
        state.cv.experienceEntries,
        index
      );
    });
  }, [set, index]);

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
    </Wrapper>
  );
};

export default ExperienceEntry;
