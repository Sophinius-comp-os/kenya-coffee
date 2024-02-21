import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons (props) {
    const { label, name, options, ...rest } = props
    return (
        <div className='flex items-center gap-1.5'>
            <label  className="ml-2">{label}</label>
            <Field name={name} >
                {({ field }) => {
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <input
                                    type='radio'
                                    id={option.value}
                                    {...field}
                                    {...rest}
                                    value={option.value}
                                    checked={field.value === option.value}
                                    className="form-radio text-indigo-600 h-5 w-5 ml-2"
                                />
                                <label htmlFor={option.value}>{option.key}</label>
                            </React.Fragment>
                        )
                    })
                }}
            </Field>
            <ErrorMessage component={TextError} name={name} />
        </div>
    )
}

export default RadioButtons