import React, { useCallback, useState } from "react";
import FormTextInput from "./FormTextInput";

const SkillsSelector = ({ skills, setSkills }) => {
  const [currentSkill, setCurrentSkill] = useState("");

  const handleInputChange = useCallback(
    (e) => {
      setCurrentSkill(e.target.value);
    },
    [setCurrentSkill]
  );

  return (
    <div>
      <FormTextInput
        name="currentSkill"
        value={currentSkill}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SkillsSelector;
