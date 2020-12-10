import React, { useCallback, useState } from "react";
import FormTextInput from "./FormTextInput";
import InlineSpacer from "./InlineSpacer";
import { Button as AntdButton } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons/lib";
import Chip from "./Chip";
import removeEntry from "../helpers/removeEntryHelper";

interface ISkillsSelector {
  skills: string[];
  setSkills: (input: string[]) => void;
  chipFontSize?: string;
  width?: string;
  label?: string;
  chipSize?: "small" | "medium";
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
`;

const ChipsWrapper = styled.div<any>`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: ${({ size }) =>
    size === "small" ? `0rem 0 1rem 0` : `2rem 0 2rem 0`};
  flex-wrap: wrap;
`;

const ChipWrapper = styled.div<any>`
  margin: ${({ size }) =>
    size === "small" ? `0.5rem 0 0.5rem 0` : `1rem 0 1rem 0`};
  & > div {
    margin-right: 1rem;
  }
`;

const SkillsSelector = ({
  skills,
  setSkills,
  chipFontSize,
  width,
  label,
  chipSize,
}: ISkillsSelector) => {
  const [currentSkill, setCurrentSkill] = useState("");

  const handleInputChange = useCallback(
    (e) => {
      setCurrentSkill(e.target.value);
    },
    [setCurrentSkill]
  );

  const removeSkill = useCallback(
    (index) => {
      const newSkills = removeEntry(skills, index);
      setSkills(newSkills);
    },
    [skills, setSkills]
  );

  const addSkill = useCallback(() => {
    setSkills([...skills, currentSkill]);
    setCurrentSkill("");
  }, [currentSkill, setSkills, skills]);

  return (
    <>
      <form>
        <InputWrapper>
          <FormTextInput
            name="currentSkill"
            value={currentSkill}
            onChange={handleInputChange}
            placeholder="Add item..."
            width={width || "20rem"}
            label={label}
          />
          <InlineSpacer width={"2rem"} />
          <AntdButton
            htmlType="submit"
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            disabled={currentSkill === ""}
            onClick={addSkill}
          >
            Add
          </AntdButton>
        </InputWrapper>
      </form>
      {skills.length > 0 && (
        <ChipsWrapper size={chipSize}>
          {skills.map((skill, index) => (
            <ChipWrapper key={index}>
              <Chip
                fontSize={chipFontSize}
                label={skill}
                key={index}
                onDelete={() => {
                  removeSkill(index);
                }}
                variant={"outlined"}
                size={chipSize || "medium"}
              />
            </ChipWrapper>
          ))}
        </ChipsWrapper>
      )}
    </>
  );
};

export default SkillsSelector;
