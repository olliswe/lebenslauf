import React, { useCallback } from "react";
import { IPersonalProjectEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Divider, Button as AntdButton } from "antd";
import FormTextArea from "../../elements/FormTextArea";
import useCV, { IUseCV } from "../../stores/useCV";
import removeEntry from "../../helpers/removeEntryHelper";

const PersonalProjectEntry = ({
  entry,
  index,
}: {
  entry: IPersonalProjectEntry;
  index: number;
}) => {
  const set = useCV((state) => state.set);
  const handleButtonClick = useCallback(() => {
    set((state: IUseCV) => {
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
        <FormTextInput label={"Name"} value={entry.name} />
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
          value={entry.githubProjectUrl}
        />
      </StyledRow>
      <Divider />
    </EntryWrapper>
  );
};

export default PersonalProjectEntry;
