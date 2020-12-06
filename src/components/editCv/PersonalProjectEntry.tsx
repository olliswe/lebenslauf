import React, { useCallback } from "react";
import { IPersonalProjectEntry } from "../../models/cv";
import { EntryWrapper, RemoveButtonWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import { Button as AntdButton, Divider } from "antd";
import FormTextArea from "../../elements/FormTextArea";
import usePersonalProjects from "../../hooks/usePersonalProjects";

const PersonalProjectEntry = ({
  entry,
  index,
}: {
  entry: IPersonalProjectEntry;
  index: number;
}) => {
  const { removeEntry } = usePersonalProjects();
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
