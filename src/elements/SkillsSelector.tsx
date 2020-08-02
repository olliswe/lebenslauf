import React, { useCallback, useState } from "react";
import FormTextInput from "./FormTextInput";
import InlineSpacer from "./InlineSpacer";
import { Button as AntdButton } from "antd";
import styled from "styled-components";
import { PlusOutlined } from "@ant-design/icons/lib";
import Chip from "./Chip";
import removeEntry from "../helpers/removeEntry";

interface ISkillsSelector {
  skills: string[];
  setSkills: (input: string[]) => void;
  chipFontSize?: string;
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
`;

const ChipsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: 2rem 0 2rem 0;
  flex-wrap: wrap;
`;

const ChipWrapper = styled.div`
  margin: 0 1rem 1rem 0;
`;

const SkillsSelector = ({
  skills,
  setSkills,
  chipFontSize,
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
      <ChipsWrapper>
        {skills.map((skill, index) => (
          <ChipWrapper>
            <Chip
              fontSize={chipFontSize}
              label={skill}
              key={index}
              onDelete={() => {
                removeSkill(index);
              }}
              variant={"outlined"}
              size={"medium"}
            />
          </ChipWrapper>
        ))}
      </ChipsWrapper>
    </>
  );
};

export default SkillsSelector;
