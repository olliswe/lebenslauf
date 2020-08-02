import React, { useCallback } from "react";
import { IPersonalProjectEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Divider, Button as AntdButton } from "antd";
import FormTextArea from "../../elements/FormTextArea";
import { useCV } from "../../hooks/useCV";
import removeEntry from "../../helpers/removeEntry";

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
        <FormTextInput label={"Name"} />
      </StyledRow>
      <StyledRow>
        <FormTextArea label={"Description"} rows={3} />
      </StyledRow>
      <StyledRow>
        <FormTextInput label={"GitHub Project URL"} />
      </StyledRow>
      <Divider />
    </EntryWrapper>
  );
};

export default PersonalProjectEntry;
