import React from 'react';
import {Input} from "antd";
import Label from "./Label";

interface IFormTextInput {
    label?:string;
    error?:string;
}

const FormTextInput = ({label, error, ...rest}:IFormTextInput) => {
    return (
        <Label>
            {label}
            <Input {...rest}/>
        </Label>
    );
};

export default FormTextInput;
