import React from "react";
import { DatePicker } from "antd";
import Label from "./Label";
import styled from "styled-components";

interface IFormDatePicker {
  label?: string;
  error?: string;
  width?: string;
  mb?: string;
}

const Wrapper = styled.div`
  margin-bottom: 0.25rem;
`;

const FormDatePicker = ({
  label,
  error,
  width,
  ...rest
}: IFormDatePicker & any) => {
  return (
    <div>
      <Wrapper>
        <Label>{label}</Label>
      </Wrapper>
      <div>
        <DatePicker {...rest} style={{ width: width || "100%" }} />
      </div>
    </div>
  );
};

export default FormDatePicker;
