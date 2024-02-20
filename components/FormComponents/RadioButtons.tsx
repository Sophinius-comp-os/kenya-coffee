import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "./TextError";
const RadioButtons = (props:any) => {
    const { label, name, options, ...rest } = props;
    return (
        <div>
            <Field
                className="mb-6 border-[f0f0f0] w-full rounded border py-3 px-[14px] text-base text-black outline-none focus:border-primary focus-visible:shadow-none"

                id={name}
                name={name}
                {...rest}
            >
                {({field}) =>    {
                    return (
                        options?.map((option) => {
                    return (
                        <React.Fragment key={option.key}>
                          <input type='radio' id={option.value}  {...field} checked={field.value === option.value} />

                            <label htmlFor={option.value}>{option.key}</label>
                        </React.Fragment>
                    );
                })
                    )
                }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    );
};

export default RadioButtons;
