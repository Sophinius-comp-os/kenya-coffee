import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const TextArea = (props) => {
  const { label, name, ...rest } = props;
  return (
    <>
      <label className="block text-black text-lg font-bold mb-1" htmlFor={name}>
        {label}
      </label>

      <Field
        as="textarea"
        className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
        id={name}
        name={name}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default TextArea;
