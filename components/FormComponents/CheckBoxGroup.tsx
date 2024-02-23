import React from 'react';
import { Field, ErrorMessage, FieldProps } from 'formik';
import TextError from './TextError';

interface Option {
    key: string;
    value: string;
}

interface CheckboxGroupProps {
    label: string;
    name: string;
    options: Option[];
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ label, name, options, ...rest }) => {
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name}>
                {({ field }: FieldProps<any>) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='checkbox'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        );
                    });
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    );
};

export default CheckboxGroup;