import React from "react";
import { DatePicker } from "antd";
import Label from "./Label";
import styled from "styled-components";
import moment from "moment";

interface IFormDatePicker {
  label?: string;
  error?: string;
  width?: string;
  mb?: string;
  value: string;
}

const Wrapper = styled.div`
  margin-bottom: 0.25rem;
`;

const FormDatePicker = ({
  label,
  error,
  width,
  value,
  ...rest
}: IFormDatePicker & any) => {
  return (
    <div>
      <Wrapper>
        <Label>{label}</Label>
      </Wrapper>
      <div>
        <DatePicker
          {...rest}
          defaultValue={value ? moment(value, "YYYY-MM-DD") : undefined}
          style={{ width: width || "100%" }}
        />
      </div>
    </div>
  );
};

export default FormDatePicker;
