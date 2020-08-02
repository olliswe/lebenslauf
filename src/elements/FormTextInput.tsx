import React from "react";
import { Input } from "antd";
import Label from "./Label";

interface IFormTextInput {
  label?: string;
  error?: string;
}

const FormTextInput = ({
  label,
  error,
  width,
  ...rest
}: IFormTextInput & any) => {
  return (
    <Label>
      {label}
      <Input {...rest} style={{ width }} />
    </Label>
  );
};

export default FormTextInput;
