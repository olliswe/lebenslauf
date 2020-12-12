import React, { useCallback } from "react";
import H2 from "../../elements/H2";
import { FormWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import FormTextArea from "../../elements/FormTextArea";
import useCV, { IUseCV } from "../../stores/useCV";
import { ICV } from "../../models/cv";

const EditCVBasic = () => {
  const cv = useCV((state) => state.cv);
  const set = useCV((state) => state.set);

  const handleChange = useCallback(
    (e) => {
      set((state: IUseCV) => {
        state.cv[e.target.name as keyof ICV] = e.target.value;
      });
    },
    [set]
  );

  return (
    <div>
      <H2>Basic Information</H2>
      <FormWrapper>
        <StyledRow>
          <FormTextInput
            label={"Name*"}
            value={cv.name}
            name={"name"}
            onChange={handleChange}
            required={true}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"Email"}
            value={cv.email}
            name={"email"}
            onChange={handleChange}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"Phone"}
            value={cv.phone}
            name={"phone"}
            onChange={handleChange}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"Location"}
            value={cv.location}
            name={"location"}
            onChange={handleChange}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"Current Position"}
            value={cv.position}
            name={"position"}
            onChange={handleChange}
          />
        </StyledRow>
        <StyledRow>
          <FormTextArea
            label={"Bio"}
            rows={10}
            value={cv.bio}
            name={"bio"}
            onChange={handleChange}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"Homepage URL"}
            value={cv.homepageUrl}
            onChange={handleChange}
            name={"homepageUrl"}
          />
        </StyledRow>
        <StyledRow>
          <FormTextInput
            label={"LinkedIn URL"}
            value={cv.linkedinUrl}
            name={"linkedinUrl"}
            onChange={handleChange}
          />
        </StyledRow>
      </FormWrapper>
    </div>
  );
};

export default EditCVBasic;
