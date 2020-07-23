import React from "react";
import { Input } from "antd";
import Label from "./Label";

const { TextArea } = Input;

interface IFormTextArea {
  label?: string;
  error?: string;
}

const FormTextArea = ({ label, error, ...rest }: IFormTextArea & any) => {
  return (
    <Label>
      {label}
      <TextArea {...rest} />
    </Label>
  );
};

export default FormTextArea;
