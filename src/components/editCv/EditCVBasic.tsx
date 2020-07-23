import React from "react";
import Title from "../../elements/Title";
import { FormWrapper, StyledRow } from "./Shared";
import FormTextInput from "../../elements/FormTextInput";
import FormTextArea from "../../elements/FormTextArea";

/***
 FIELDS:

 name:string;
 position?:string;
 bio?:string;
 location?:string;
 email?:string;
 phone?:string;
 homepage_url?:string;
 linkedin_url?:string;


 * ****/

const EditCVBasic = () => {
  return (
    <div>
      <Title level={2}>Basic Information</Title>
      <FormWrapper>
        <StyledRow>
          <FormTextInput label={"Name"} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"Email"} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"Phone"} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"Location"} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"Current Position"} />
        </StyledRow>
        <StyledRow>
          <FormTextArea label={"Bio"} rows={10} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"Homepage URL"} />
        </StyledRow>
        <StyledRow>
          <FormTextInput label={"LinkedIn URL"} />
        </StyledRow>
      </FormWrapper>
    </div>
  );
};

export default EditCVBasic;
