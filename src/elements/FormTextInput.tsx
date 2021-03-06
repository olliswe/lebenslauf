import React from "react";
import { Input } from "antd";
import Label from "./Label";

interface IFormTextInput {
  label?: string;
}

const FormTextInput = ({ label, width, ...rest }: IFormTextInput & any) => {
  return (
    <Label>
      {label}
      {label && <br />}
      <Input {...rest} style={{ width }} />
    </Label>
  );
};

export default FormTextInput;
