import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const Select = (props) => {
  const { label, name, options, ...rest } = props;
  return (
    <>
      <label
        className="flex text-black text-lg font-bold items-center -mt-4"
        htmlFor={name}
      >
        {label}
      </label>

      <Field
        as="select"
        className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"
        key={name}
        id={name}
        name={name}
        {...rest}
      >
        {options?.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </>
  );
};

export default Select;
