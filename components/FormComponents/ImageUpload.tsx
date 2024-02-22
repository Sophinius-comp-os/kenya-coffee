// components/ImageUpload.tsx
"use client"
import { FieldProps, ErrorMessage } from 'formik';
import React, { useState } from 'react';

interface ImageUploadProps extends FieldProps {
    form: {
        setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
    };
}

const ImageUpload: React.FC<ImageUploadProps> = ({ field, form, ...props }) => {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.currentTarget.files?.[0];
        form.setFieldValue(field.name, file);

        if (file) {
            if (file.size > 1024 * 1024) {
                setErrorMessage('File size must be less than 1MB');
                setPreviewUrl(null);
                return;
            }

            setErrorMessage(null);

            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        } else {
            setErrorMessage(null);
            setPreviewUrl(null);
        }
    };

    return (
        <div>
            <input
                id={field.name}
                name={field.name}
                type="file"
                onChange={handleChange}
                accept="image/*"
                {...props}
            />
            {previewUrl && (
                <img src={previewUrl} alt="Preview" className="mt-2 w-full max-h-48 object-contain" />
            )}
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}
        </div>
    );
};

export default ImageUpload;
