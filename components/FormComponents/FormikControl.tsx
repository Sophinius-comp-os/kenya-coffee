import React from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";
import RadioButtons from "./RadioButtons";
import CheckBoxGroup from "./CheckBoxGroup";

interface FormikControlProps {
  control: string;
  label:string;
  name:string;
  options:[];
  // Define additional props if needed
}

const FormikControl: React.FC<FormikControlProps> = ({ control, ...rest }) => {
  switch (control) {
    case "input":
      return <Input {...rest} />;

    case "textarea":
      return <TextArea {...rest} />;

    case "select":
      return <Select {...rest} />;

    case "radio":
      return <RadioButtons {...rest} />;

    case "checkbox":
      return <CheckBoxGroup  {...rest} />;

    default:
      return null; // Handle unsupported control type
  }
};

export default FormikControl